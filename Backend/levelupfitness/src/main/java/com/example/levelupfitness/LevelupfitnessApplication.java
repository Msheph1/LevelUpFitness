package com.example.levelupfitness;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication
public class LevelupfitnessApplication {

	public static void main(String[] args) {
		SpringApplication.run(LevelupfitnessApplication.class, args);
		//ConnectDB connection = new ConnectDB();
	}

}
