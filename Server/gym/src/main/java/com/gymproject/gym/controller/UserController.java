package com.gymproject.gym.controller;

import com.gymproject.gym.model.User;
import com.gymproject.gym.repository.UsersRepository;
import com.gymproject.gym.util.JwtUtil;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.Produces;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
        try {
            // Hash the password before saving
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            usersRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        }
    }

    // Login a user
    @PostMapping("/login")
    @Consumes("application/json")
    @Produces("application/json")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> existingUser = usersRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            // Check password
            if (passwordEncoder.matches(user.getPassword(), existingUser.get().getPassword())) {
                // Generate JWT token
                String token = jwtUtil.generateToken(existingUser.get().getEmail());

                // Return success message and token
                return ResponseEntity.ok("Bearer " + token);
            } else {
                return ResponseEntity.badRequest().body("Invalid password.");
            }
        } else {
            return ResponseEntity.badRequest().body("User not found.");
        }
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
    }

}