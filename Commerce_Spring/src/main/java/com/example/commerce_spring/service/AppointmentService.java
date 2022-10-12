package com.example.commerce_spring.service;

import com.example.commerce_spring.domain.Appointment;
import com.example.commerce_spring.domain.User;
import com.example.commerce_spring.repository.AppointmentRepository;
import com.example.commerce_spring.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;

    @Transactional
    public Appointment create(Long user_id, Appointment appointment){
        User user;
        user = userRepository.findById(user_id).orElseThrow(()-> new IllegalArgumentException("Check user Id"));
        appointment.setUser(user);

        return appointmentRepository.save(appointment);
    }
}
