package com.gymproject.gym.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, WebConfig webConfig) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        // Permit register and login endpoints
                        .requestMatchers(HttpMethod.POST, "/api/users/register", "/api/users/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/coaches/register", "/api/coaches/login").permitAll()
                        // Permit GET request for fetching all businesses
                        .requestMatchers(HttpMethod.GET, "/api/gym/all").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/gym/*").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/requests").permitAll()
                        // Authenticate other requests
                        .anyRequest().authenticated()
                )
                .csrf(csrf -> csrf.disable())  // Disable CSRF protection for stateless API
                .cors(cors -> cors.configurationSource(webConfig.corsConfigurationSource()));// Use CORS settings from WebConfig

        return http.build();
    }
}
