package com.gymproject.gym.controller;

import com.gymproject.gym.model.Coach;
import com.gymproject.gym.util.JwtUtil;
import com.gymproject.gym.repository.CoachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/coaches")
public class CoachController {

    @Autowired
    private CoachRepository coachRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil; // Ensure JwtUtil is a properly configured Spring bean

    // Register a new coach
    @PostMapping("/register")
    public ResponseEntity<String> registerCoach(@RequestBody Coach coach) {
        try {
            // Check if email already exists
            if (coachRepository.findByEmail(coach.getEmail()).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already in use.");
            }

            // Hash the password before saving
            coach.setPassword(passwordEncoder.encode(coach.getPassword()));
            coachRepository.save(coach);
            return ResponseEntity.status(HttpStatus.CREATED).body("Coach registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        }
    }

    // Login for coach
    @PostMapping("/login")
    public ResponseEntity<?> loginCoach(@RequestBody Coach coach) {
        Optional<Coach> existingCoach = coachRepository.findByEmail(coach.getEmail());

        if (existingCoach.isPresent()) {
            // Check password
            if (passwordEncoder.matches(coach.getPassword(), existingCoach.get().getPassword())) {
                // Generate JWT token
                String token = jwtUtil.generateToken(existingCoach.get().getEmail());
                return ResponseEntity.ok().body("Bearer " + token);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }

    // Get all coaches
    @GetMapping("/all")
    public ResponseEntity<List<Coach>> getAllCoaches() {
        try {
            List<Coach> coaches = coachRepository.findAll();
            return ResponseEntity.ok(coaches);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
