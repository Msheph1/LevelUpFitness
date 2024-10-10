package com.example.levelupfitness;

public class User {
    private int userId;
    private String username;
    private String password;
    private int exp;


    public User() {

    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }

    public int getExp() {
        return exp;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public void setExp(int exp) {
        this.exp = exp;
    }

    
    @Override
    public String toString() {
        return "UserId: " + userId + "\nUsername: " + username + "\nPasword: " + password + "\nExp: " + exp;
    }
}
