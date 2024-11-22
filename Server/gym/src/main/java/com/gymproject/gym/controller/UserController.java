package com.gymproject.gym.controller;

import com.gymproject.gym.model.User;
import com.gymproject.gym.repository.UsersRepository;
import com.gymproject.gym.util.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
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
    public ResponseEntity<String> login(@RequestBody User loginRequest) {
        Optional<User> user = usersRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent() && passwordEncoder.matches(loginRequest.getPassword(), user.get().getPassword())) {
            String token = jwtUtil.generateToken(user.get().getEmail());
            logger.info("User logged in successfully: {}", loginRequest.getEmail());
            return ResponseEntity.ok("Bearer " + token);
        } else {
            logger.warn("Invalid credentials for user: {}", loginRequest.getEmail());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid credentials");
        }
    }

    // Get all users
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = usersRepository.findAll();
        logger.info("Fetched all users");
        return ResponseEntity.ok(users);
    }

    // Fetch user details by email
    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = usersRepository.findByEmail(email);
        if (user.isPresent()) {
            logger.info("User details fetched for: {}", email);
            return ResponseEntity.ok(user.get());
        } else {
            logger.warn("User not found: {}", email);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Public endpoint
    @GetMapping("/public")
    public ResponseEntity<String> publicEndpoint() {
        return ResponseEntity.ok("This is a public endpoint");
    }
}
