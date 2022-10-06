package com.example.commerce_spring.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.commerce_spring.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


}