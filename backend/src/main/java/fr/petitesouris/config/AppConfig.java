package fr.petitesouris.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(Duration.ofSeconds(30)); // 30 secondes pour se connecter à Brevo
        factory.setReadTimeout(Duration.ofSeconds(60));    // 60 secondes pour envoyer le gros PDF
        return new RestTemplate(factory);
    }
}