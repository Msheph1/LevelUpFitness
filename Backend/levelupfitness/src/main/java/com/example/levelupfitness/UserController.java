package com.example.levelupfitness;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class UserController {

    private static DAO<User> dao;
	@Autowired
	public UserController(DAO<User> dao) {
		this.dao = dao;
	}
    @CrossOrigin(origins = {"http://192.168.12.102:8081", "http://localhost:8081"})
    @GetMapping("/hello") 
    @ResponseBody
    public String helloGFG() 
    { 
        List<User> users = dao.list();
		users.forEach(System.out::println);
        return users.get(1).getUsername(); 
    } 
}
