package com.gymproject.gym.controller;

import com.gymproject.gym.model.Reservation;
import com.gymproject.gym.model.ReservationStatus;
import com.gymproject.gym.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // Get all reservations
    @GetMapping
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.getAllReservations();
        return ResponseEntity.ok(reservations);
    }

    // Create a new reservation
    @PostMapping
    public ResponseEntity<?> createReservation(@RequestBody Reservation reservation) {
        try {
            Reservation createdReservation = reservationService.createReservation(reservation);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdReservation);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error creating reservation: " + e.getMessage());
        }
    }

    // Get a reservation by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getReservationById(@PathVariable Long id) {
        try {
            Reservation reservation = reservationService.getReservationById(id);
            return ResponseEntity.ok(reservation);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Notify coach about reservation
    @PostMapping("/{id}/notify")
    public ResponseEntity<String> notifyCoach(@PathVariable Long id) {
        boolean notified = reservationService.notifyCoach(id);
        if (notified) {
            return ResponseEntity.ok("Coach has been notified about the reservation.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to notify the coach.");
        }
    }
}