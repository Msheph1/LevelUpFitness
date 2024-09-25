package com.example.levelupfitness;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    @CrossOrigin(origins = {"http://192.168.12.102:8081", "http://localhost:8081"})
    @GetMapping("/hello") 
    @ResponseBody
    public String helloGFG() 
    { 
        System.out.println("\n\n\n\n\n\n\n\n\n\n what happened");
        return "Hello this is a test"; 
    } 
}
