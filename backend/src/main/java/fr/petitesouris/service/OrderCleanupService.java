package fr.petitesouris.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.petitesouris.model.ToothOrder;
import fr.petitesouris.repository.ToothOrderRepository;

@Service
public class OrderCleanupService {

    private final ToothOrderRepository orderRepository;

    public OrderCleanupService(ToothOrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // S'exécute tous les jours à minuit pile (00:00:00)
    @Scheduled(cron = "0 0 0 * * *")
    @Transactional
    public void purgeOldDocumentData() {
        // Suppression des données enfants après 48 heures pour laisser le temps au client
        // de re-télécharger son PDF en cas de besoin, tout en respectant l'engagement RGPD.
        LocalDateTime limitDate = LocalDateTime.now().minusHours(48);
        
        List<ToothOrder> ordersToClean = orderRepository.findByDocumentDataIsNotNullAndCreatedAtBefore(limitDate);
        
        for (ToothOrder order : ordersToClean) {
            order.setDocumentData(null);
            orderRepository.save(order);
        }
        
        if (!ordersToClean.isEmpty()) {
            System.out.println("Nettoyage RGPD (48h) : " + ordersToClean.size() + " document(s) de la Petite Souris purgé(s).");
        }
    }
}