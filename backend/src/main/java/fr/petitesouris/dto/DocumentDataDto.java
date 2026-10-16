package fr.petitesouris.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DocumentDataDto {
    private String childName;
    private Integer childAge;
    private String childGender;
    private String city;
    private String toothType;      // ex: Molaire, Incisive...
    private String toothPosition;  // ex: Haut gauche, Bas droit...
    private String giftType;       // ex: Pièce de 2€, Petit cadeau...
    private String customMessage;  // Le message de la Petite Souris
}