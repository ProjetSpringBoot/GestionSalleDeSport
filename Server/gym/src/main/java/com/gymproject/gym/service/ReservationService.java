package com.gymproject.gym.service;

import com.gymproject.gym.model.Reservation;
import com.gymproject.gym.model.ReservationStatus;
import com.gymproject.gym.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    // Create new reservation
    public Reservation createReservation(Reservation reservation) {
        if (reservation == null) {
            throw new IllegalArgumentException("Reservation data cannot be null.");
        }
        return reservationRepository.save(reservation);
    }

    // Get all reservations
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // Get a reservation by ID
    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found with ID: " + id));
    }

    // Update a reservation's status
    public Reservation updateReservationStatus(Long id, ReservationStatus status) {
        Reservation reservation = getReservationById(id);
        reservation.setStatus(status);
        return reservationRepository.save(reservation);
    }

    // Delete a reservation
    public void deleteReservation(Long id) {
        if (!reservationRepository.existsById(id)) {
            throw new RuntimeException("Reservation not found with ID: " + id);
        }
        reservationRepository.deleteById(id);
    }

    // Notify a coach about a reservation (mock implementation)
    public boolean notifyCoach(Long reservationId) {
        Reservation reservation = getReservationById(reservationId);

        // Logic to send a notification to the coach
        System.out.println("Notifying coach: " + reservation.getCoach().getId() + " about reservation " + reservationId);

        return true; // Assume notification succeeded
    }


    public List<Reservation> getReservationsByCoachId(Long coachId) {
        return reservationRepository.findByCoachId(coachId);
    }

}
