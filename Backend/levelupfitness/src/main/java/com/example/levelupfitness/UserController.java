package com.example.levelupfitness;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class UserController {

    private final ConnectDB connectDB;

    @Autowired
    public UserController(ConnectDB connectDB) {
        this.connectDB = connectDB;
    }


    @CrossOrigin(origins = {"http://192.168.12.102:8081", "http://localhost:8081"})
    @GetMapping("/hello") 
    @ResponseBody
    public String helloGFG() 
    { 
        
        System.out.println("before cclick connection");
        connectDB.getConnection();
        System.out.println("\n what happened");
        return "Hello this is a test"; 
    } 
}
