package com.example.commerce_spring.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.commerce_spring.repository.UserRepository;
import com.example.commerce_spring.domain.User;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    @Transactional
    public User create(User user){
        return userRepository.save(user);
    }


}