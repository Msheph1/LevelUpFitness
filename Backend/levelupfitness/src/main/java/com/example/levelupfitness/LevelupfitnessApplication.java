package com.example.levelupfitness;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication
public class LevelupfitnessApplication {

	private static DAO<User> dao;
	@Autowired
	public LevelupfitnessApplication(DAO<User> dao) {
		this.dao = dao;
	}

	public static void main(String[] args) {
		SpringApplication.run(LevelupfitnessApplication.class, args);
		
		System.out.println("\n Create user ------------------------\n");
		User u = new User("generatedinline", "asdfserwqr");
		//u.setUserId(4);
		//dao.create(u);

		System.out.println("\n All Users ------------------------\n");
		List<User> users = dao.list();
		users.forEach(System.out::println);
	}

}
