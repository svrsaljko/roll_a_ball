package rollaball.backend.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import rollaball.backend.model.User;

public interface UserRepository extends JpaRepository <User,Long> {
	 User findByUserName(String userName);
	 Boolean existsByUserName(String userName);
	 Boolean existsByEmail(String email);
}







