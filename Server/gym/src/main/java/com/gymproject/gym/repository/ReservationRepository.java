package com.gymproject.gym.repository;

import com.gymproject.gym.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByCoachId(Long coachId); // Spring Data JPA query method
}

