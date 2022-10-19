package com.example.commerce_spring.controller;


import com.example.commerce_spring.domain.Customer;
import com.example.commerce_spring.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@CrossOrigin
public class CustomerController {


    private final CustomerService customerService;

    @PostMapping("/customer")
    public ResponseEntity<?> save(@RequestBody Customer customer){

        System.out.println("title " + customer.getName());
        return new ResponseEntity<>(customerService.create(customer), HttpStatus.CREATED);

    }
}

