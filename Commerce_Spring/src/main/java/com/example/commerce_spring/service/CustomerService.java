package com.example.commerce_spring.service;


import com.example.commerce_spring.domain.Customer;
import com.example.commerce_spring.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    @Transactional
    public Customer create(Customer customer){
        return customerRepository.save(customer);
    }
}

