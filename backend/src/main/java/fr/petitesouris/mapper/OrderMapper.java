package fr.petitesouris.mapper;

import org.springframework.stereotype.Component;

import fr.petitesouris.dto.CreateOrderRequest;
import fr.petitesouris.dto.DocumentDataDto;
import fr.petitesouris.model.DocumentData;
import fr.petitesouris.model.ToothOrder;

@Component
public class OrderMapper {

    public ToothOrder toEntity(CreateOrderRequest request) {
        if (request == null) {
            return null;
        }

        ToothOrder order = new ToothOrder();
        order.setCustomerEmail(request.getCustomerEmail());
        
        // Détermination dynamique du montant en fonction de l'offre
        boolean isFull = "full".equalsIgnoreCase(request.getOfferType());
        order.setAmount(isFull ? 1.99 : 0.99);
        order.setStatus("PENDING");

        if (request.getDocumentData() != null) {
            DocumentDataDto dto = request.getDocumentData();
            DocumentData docData = new DocumentData();
            
            docData.setChildName(dto.getChildName());
            docData.setChildAge(dto.getChildAge());
            docData.setChildGender(dto.getChildGender());
            docData.setCity(dto.getCity());
            docData.setToothType(dto.getToothType());
            docData.setToothPosition(dto.getToothPosition());
            docData.setGiftType(dto.getGiftType());
            docData.setCustomMessage(dto.getCustomMessage());

            order.setDocumentData(docData);
        }

        return order;
    }
}