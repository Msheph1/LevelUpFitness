package com.example.levelupfitness;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class UserController {

    private static DAO<User> dao;
	@Autowired
	public UserController(DAO<User> dao) {
		this.dao = dao;
	}
    @CrossOrigin(origins = {"http://192.168.12.102:8081", "http://localhost:8081"})
    @GetMapping("/{userId}") 
    @ResponseBody
    public User LoadUser(@PathVariable("userId") int id) 
    { 
        
        User selectedUser;
        Optional<User> optional = dao.get(id);
        selectedUser = optional.isPresent() ? optional.get() : null;
        return selectedUser;
    } 

    @CrossOrigin(origins = {"http://192.168.12.102:8081", "http://localhost:8081"})
    @PostMapping("/{userId}/addexp/{amount}") 
    @ResponseBody
    public void addExp(@PathVariable("userId") int userId, @PathVariable("amount") int amount){
        System.out.println("made it this far");
        try {
        User updatedUser = dao.get(userId).get();
        updatedUser.setExp(updatedUser.getExp() + amount);
        dao.update(updatedUser, userId);
        }
        catch(Exception e) {
            System.out.println(e + "\n\n\nerrored out");
        }
    }
}
