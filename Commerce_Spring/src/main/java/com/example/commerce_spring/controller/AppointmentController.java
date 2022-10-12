package com.example.commerce_spring.controller;

import com.example.commerce_spring.domain.Appointment;
import com.example.commerce_spring.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class AppointmentController {
    private final AppointmentService appointmentService;

    @PostMapping("/users/{userId}/appointment")
    public ResponseEntity<?> createAppointment(@PathVariable(value = "userId") Long user_Id, @RequestBody Appointment appointment){
        return new ResponseEntity<>(appointmentService.create(user_Id, appointment), HttpStatus.CREATED);
    }
}
