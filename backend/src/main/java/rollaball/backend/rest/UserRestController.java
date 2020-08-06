package rollaball.backend.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import rollaball.backend.dao.UserRepository;
import rollaball.backend.exception.EmailAlreadyExistException;
import rollaball.backend.exception.UserNameAlreadyExistException;
import rollaball.backend.model.MyUserDetails;
import rollaball.backend.model.RankedUser;
import rollaball.backend.model.UpdateHighscoreReqBody;
import rollaball.backend.model.User;
import rollaball.backend.security.JwtUtil;
import rollaball.backend.service.MyUserDetailsService;
import rollaball.backend.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
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
    @GetMapping("private/hello") 
	public String hello() {
		return "<h1> Hello user </h1>";	
		}
	
   @PatchMapping("private/highscore")
   public ResponseEntity<?> updateHighscore(@RequestBody UpdateHighscoreReqBody reqBody) throws Exception
   	{
	   System.out.println("HIGHSCORE API CALLED");
		User userByUserName = userRepository.findByUserName(reqBody.getUserName());
		userByUserName.setHighscore(reqBody.getHighscore());
		userRepository.save(userByUserName);
	    return ResponseEntity.ok("New highscore submitted successfully!");
   	}
 
   @GetMapping("private/highscore")
   public ResponseEntity<?> getHighscore(@RequestParam String userName) throws Exception
   	{
	   	User userByUserName = userRepository.findByUserName(userName);
		return ResponseEntity.ok(userByUserName.getHighscore());
   	}
   
   
   @GetMapping("private/highscore/list")
   public ResponseEntity<?> getHighScoreList(@RequestParam String userName) throws Exception
   {
	   List<User> users = userRepository.findAll(Sort.by(Sort.Direction.DESC, "highscore"));
	   List<RankedUser> rankedUsers = new ArrayList<RankedUser>();
	   for (int i = 0; i < users.size(); i++) {
		    if( i<10 ||users.get(i).getUserName().equals(userName) ) 
		    	{
		    		RankedUser user = new RankedUser(users.get(i).getUserName(),
		    				users.get(i).getHighscore(),i+1);
		    		rankedUsers.add(user);
		    		
		    	}
		}       
	return ResponseEntity.ok(rankedUsers);
	   
   }
    
    
    @PostMapping("public/login")
 	public ResponseEntity<?> login(@RequestBody User user ) throws Exception
     {
    	System.out.println("username: "+ user.getUserName() + "email: " + user.getEmail() + "password: " + user.getPassword());
    	if( user.getUserName() == null )
    		{ 
    			User userByEmail = userRepository.findByEmail(user.getEmail());
    			System.out.println("user by email has username: " + userByEmail.getUserName());
    			user.setUserName(userByEmail.getUserName());
    		}
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
		user.setRoles("ROLE_USER");
		user.setHighscore(0);	
		userService.registration(user);
		}
		
	}
}
