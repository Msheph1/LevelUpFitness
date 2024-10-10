package com.example.levelupfitness;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component 
public class UserJdbcDAO implements DAO<User> {

    private static final Logger log = LoggerFactory.getLogger(UserJdbcDAO.class);
    private JdbcTemplate jdbcTemplate;

    public UserJdbcDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper<User> rowMapper = (rs,rowNum) -> {
        User user = new User();
        user.setUserId(rs.getInt("userid"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("upassword"));
        user.setExp(rs.getInt("exp"));
        return user;
    };

    @Override
    public List<User> list() {
        String sql = "SELECT userid, username, upassword, exp from users";
        return jdbcTemplate.query(sql, rowMapper); 
    }

    @Override
    public void create(User user) {
        String sql = "insert into users(userid, username, upassword) values(?,?,?)";
        int rowsAffected =  jdbcTemplate.update(sql, user.getUserId(), user.getUsername(), user.getPassword());
        if(rowsAffected == 1) {
            log.info("New user created: " + user.getUsername());
        }
    }

    @Override
    public Optional<User> get(int id) {
        String sql = "select userid, username, upassword, exp from users where userid = ?";
        User user = null;
        try {
            user = jdbcTemplate.queryForObject(sql, rowMapper, id);
        } catch (DataAccessException e) {
            log.info("User not found: " + id);
        }
        return Optional.ofNullable(user);
    }

    @Override
    public void update(User user, int id) {
        String sql = "update users set username = ?, upassword = ?, exp = ? where userid = ?";
        int update = jdbcTemplate.update(sql, user.getUsername(), user.getPassword(), user.getExp(), id);
        if(update == 1) {
            log.info("User updated: " + user.getUsername());
        }
    }

    @Override
    public void delete(int id) {
         jdbcTemplate.update("delete from users where userid = ?", id);
    }
    
}
