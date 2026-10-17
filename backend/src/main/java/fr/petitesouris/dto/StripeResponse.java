package fr.petitesouris.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StripeResponse {
    private String status;
    private String message;
    private String sessionId;
    private String sessionUrl;

    // Constructeur vide
    public StripeResponse() {}

    // Constructeur avec tous les arguments (évite le bug de Lombok)
    public StripeResponse(String status, String message, String sessionId, String sessionUrl) {
        this.status = status;
        this.message = message;
        this.sessionId = sessionId;
        this.sessionUrl = sessionUrl;
    }
}