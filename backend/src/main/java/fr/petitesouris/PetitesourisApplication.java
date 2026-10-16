package fr.petitesouris;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class PetitesourisApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetitesourisApplication.class, args);
	}
}
