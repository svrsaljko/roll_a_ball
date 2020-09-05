package rollaball.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import rollaball.backend.dao.UserRepository;
import rollaball.backend.model.User;

@Service
public class UserService {

    @Autowired 
    UserRepository userRepository;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
	
    public void registration(User user) {
	String hashedPassword = passwordEncoder.encode(user.getPassword());
	user.setPassword(hashedPassword);
	userRepository.save(user);
    }

}