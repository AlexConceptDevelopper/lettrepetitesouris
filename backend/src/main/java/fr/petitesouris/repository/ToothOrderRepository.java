package fr.petitesouris.repository;

import fr.petitesouris.model.ToothOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ToothOrderRepository extends JpaRepository<ToothOrder, Long> {
    Optional<ToothOrder> findByStripeSessionId(String stripeSessionId);

    List<ToothOrder> findByDocumentDataIsNotNullAndCreatedAtBefore(LocalDateTime date);
}