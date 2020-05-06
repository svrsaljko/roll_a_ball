package com.rollaball.backend.rest;

//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rollaball.backend.entity.User;
import com.rollaball.backend.service.UserService;

@RestController
@EnableWebSecurity
@RequestMapping("/user")
public class UserRestController {

	private UserService userService;

	UserRestController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/register")
	public User register(@RequestBody User user) {
		user.setId(0);
		userService.register(user);
		return user;
	}
}
