package fr.petitesouris.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "document_data")
public class DocumentData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private ToothOrder order;

    private String childName;
    private Integer childAge;
    private String childGender;
    private String toothType;
    private String toothPosition;
    private String giftType;
    
    @Column(columnDefinition = "TEXT")
    private String customMessage;
}