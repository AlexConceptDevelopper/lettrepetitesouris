package fr.petitesouris.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "tooth_orders")
@Getter
@Setter
public class ToothOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerEmail;

    @Column(nullable = false)
    private Double amount = 1.99;

    @Column(nullable = false)
    private String status = "PENDING"; // PENDING, PAID

    private String stripeSessionId;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private DocumentData documentData;

    // Helper pour lier proprement le DocumentData
    public void setDocumentData(DocumentData documentData) {
        this.documentData = documentData;
        if (documentData != null) {
            documentData.setOrder(this);
        }
    }
}