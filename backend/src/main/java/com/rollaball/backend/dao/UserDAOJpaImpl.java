package com.rollaball.backend.dao;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.rollaball.backend.entity.User;


@Repository
public class UserDAOJpaImpl implements UserDAO {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	private EntityManager entityManager;

	
	@Autowired
	UserDAOJpaImpl (EntityManager entityManager){
		this.entityManager= entityManager;
	}
	
	
	@Override
	public void register(User newUser) {
		if(validEmailFormat(newUser.getEmail())) {
			if(!emailExist(newUser.getEmail())) {
				if(!usernameExist(newUser.getUsername())){
						createNewUser(newUser);
					}else System.out.println("username already exist");
				}else System.out.println("email already in use");
		}else System.out.println("Invalid email format");
	}
	
	private void createNewUser(User newUser) {
		newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
		User dbUser = this.entityManager.merge(newUser);
		if(dbUser.getId() != 0) {
			System.out.println("user successfully created");
		}

		newUser.setId(dbUser.getId());
	}
	
	private boolean usernameExist(String username) {
		boolean usernameExist;
		try{
			//	radi, da li je ovo ispravan nacin 
			User user=this.entityManager.createQuery(
			"SELECT u from User u WHERE u.username=:username", User.class).
			setParameter("username", username).getSingleResult();
			//	System.out.println("user: " + user);
			usernameExist=true;
		}catch(NoResultException nre) {
			usernameExist=false;
		}
		return usernameExist;
	}
	private boolean emailExist(String email) {
		boolean emailExist;
		try{
			//	radi, da li je ovo ispravan nacin 
			User user=this.entityManager.createQuery(
			"SELECT u from User u WHERE u.email=:email", User.class).
			setParameter("email", email).getSingleResult();
			//	System.out.println("user: " + user);
			emailExist=true;
		}catch(NoResultException nre) {
			emailExist=false;
		}
		return emailExist;
	}
	
	private boolean validEmailFormat(String email) {
		boolean validEmailFormat;
		String regex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(email);
		if(matcher.matches()) {
			validEmailFormat= true;
		}else validEmailFormat= false;

		return validEmailFormat;
	}

}
