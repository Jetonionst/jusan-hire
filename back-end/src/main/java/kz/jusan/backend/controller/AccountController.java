package kz.jusan.backend.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import javax.servlet.http.HttpServletRequest;

import kz.jusan.backend.entity.AccountEntity;
import kz.jusan.backend.entity.UserEntity;
import kz.jusan.backend.security.JwtProvider;
import kz.jusan.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.*;

@RestController
@SecurityRequirement(name = "jwtauth")
@RequestMapping("/api/v1/get_user_id")
public class AccountController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtProvider jwtProvider;

    @GetMapping
    public int getAccounts(HttpServletRequest request) {
        String token = request.getHeader("Authorization").replace("Bearer ", "");
        UserEntity client = userService.findByUsername(jwtProvider.getUsernameFromToken(token));
        return client.getUserID();
    }

}