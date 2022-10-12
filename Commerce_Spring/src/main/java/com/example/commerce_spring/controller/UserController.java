package com.example.commerce_spring.controller;

import com.example.commerce_spring.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.commerce_spring.service.UserService;
import com.example.commerce_spring.domain.User;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/jpa")
public class UserController {
    private final UserService userService;

    @PostMapping("/users")
    public ResponseEntity<?> save(@RequestBody User user){
        return new ResponseEntity<>(userService.create(user), HttpStatus.CREATED);
    }
}