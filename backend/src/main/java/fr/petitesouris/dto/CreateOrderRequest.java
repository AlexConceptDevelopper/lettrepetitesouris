package fr.petitesouris.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateOrderRequest {
    private String customerEmail;
    private DocumentDataDto documentData;
}