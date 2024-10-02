package com.example.levelupfitness;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.PropertySource;
// //import org.springframework.stereotype.Service;
import org.springframework.context.annotation.PropertySource;

import jakarta.annotation.PostConstruct;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@Configuration
@PropertySource("classpath:application-dev.properties")
public class ConnectDB {
    
	@Value("${postgresLink}")
	private String postgresLink;
	@Value("${postgresUsername}")
	private String postgresUsername;
	@Value("${postgresPassword}")
	private String postgresPassword;

    @PostConstruct
    public void getConnection() {
        Connection connection;
        System.out.println(postgresLink + postgresPassword + postgresUsername);
        System.out.println("\n\n\n\n\n\n\n\n the database has started attempting");
        System.out.println("url:  " + postgresLink);
        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(postgresLink, postgresUsername, postgresPassword);
            if(connection != null) {
                System.out.println("starting query");
                String query = "Select * From USERS";
                Statement statement = connection.createStatement();
                ResultSet rs = statement.executeQuery(query);
                rs.next();
                System.out.println("\n\nquery returned: " + rs.getString(2) + "\n");
            } else {
                System.out.println("connection Failed");

            }
        } catch (Exception e) {
           System.out.println(e);
        }
    }
}
