package rollaball.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import rollaball.backend.dao.UserRepository;
import rollaball.backend.model.MyUserDetails;
import rollaball.backend.model.User;


@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired 
	UserRepository userRepository;
	
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User user = userRepository.findByUserName(userName);
		System.out.println("user FROM DB: " + user.getUserName());
		System.out.println("user:FROM DB " + user.getEmail());
		System.out.println("user: FROM DB " + user.getPassword());
		
        //user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));
        MyUserDetails userDetails = new MyUserDetails(user);
		return userDetails;
	}
	

}
