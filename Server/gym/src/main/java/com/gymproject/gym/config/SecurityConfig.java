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
        return new BCryptPasswordEncoder(); // Secure password encoding
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, WebConfig webConfig) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        // Allow unauthenticated access to specific endpoints
                        .requestMatchers(HttpMethod.POST, "/api/users/register", "/api/users/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/coaches/register", "/api/coaches/login").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/coaches/all").permitAll() // Add this if fetching coaches
                        .requestMatchers(HttpMethod.GET, "/api/gym/all").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/gym/*").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/requests").permitAll()
                        // Require authentication for all other requests
                        .anyRequest().authenticated()
                )
                .csrf(csrf -> csrf.disable())  // Disable CSRF for stateless APIs
                .cors(cors -> cors.configurationSource(webConfig.corsConfigurationSource())); // Use CORS settings from WebConfig

        return http.build();
    }
}
