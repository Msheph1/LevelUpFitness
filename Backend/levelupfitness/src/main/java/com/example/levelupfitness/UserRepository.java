/*
package com.example.levelupfitness;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.PropertySource;
// //import org.springframework.stereotype.Service;
import org.springframework.context.annotation.PropertySource;

import java.sql.Connection;
import java.sql.DriverManager;

@Configuration
@PropertySource("classpath:application-dev.properties")
public class UserRepository {
    
	@Value("${postgresLink}")
	private String postgresLink;
	@Value("${postgresUsername}")
	private String postgresUsername;
	@Value("${postgresPassword}")
	private String postgresPassword;

    @Bean
    public Connection userRepositoryConnection() {
        System.out.println("\n\n\n\n\n\n\n\n the database has started attempting");
        Connection connection = null;
        System.out.println("url:  " + postgresLink);
        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(postgresLink, postgresUsername, postgresPassword);
            
            if(connection != null) {
                System.out.println("Connection OK");
            } else {
                System.out.println("connection Failed");
            }
        } catch (Exception e) {
           System.out.println(e);
        }
        return connection;
    }
}

*/