package rollaball.backend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import rollaball.backend.dao.UserRepository;
import rollaball.backend.exception.EmailAlreadyExistException;
import rollaball.backend.exception.UserNameAlreadyExistException;
import rollaball.backend.model.MyUserDetails;
import rollaball.backend.model.User;
import rollaball.backend.security.JwtUtil;
import rollaball.backend.service.MyUserDetailsService;
import rollaball.backend.service.UserService;

@RestController
//@RequestMapping("/user")
public class UserRestController {

	@Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
	private UserService userService;

    @Autowired 
    UserRepository userRepository;
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
	private JwtUtil jwtTokenUtil;
	
//	
    @GetMapping("user/hello") 
	public String hello() {
		return "<h1> Hello user </h1>";	
		}
	
	
    @PostMapping("public/login")
	public ResponseEntity<?> login(@RequestBody User user ) throws Exception
    {
    	try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(user.getUserName());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(jwt);
		
	}
	
	@PostMapping("public/registration")
	@ResponseStatus(code = HttpStatus.CREATED, reason = "User successfully created! " )
	public void registration(@RequestBody User user) {
		if( userRepository.existsByUserName(user.getUserName())){
			throw new UserNameAlreadyExistException();
		}
		else if(userRepository.existsByEmail(user.getEmail())){
			throw new EmailAlreadyExistException();
	        }
		else {
		userService.registration(user);
		}
		
	}
	
	@GetMapping("public/hello") 
	public String helloGET() {
		return "<h1> Hello from public page </h1>";	
		}
	
	
	
}
