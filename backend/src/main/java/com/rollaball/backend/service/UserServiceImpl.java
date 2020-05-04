package com.rollaball.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rollaball.backend.dao.UserDAO;
import com.rollaball.backend.entity.User;

@Service
public class UserServiceImpl implements UserService {

	private UserDAO userDAO;
	
	@Autowired
	public UserServiceImpl( UserDAO userDAO ){
		this.userDAO = userDAO;
	}
	
	//public UserServiceImpl(  ){}
	
	@Override
	@Transactional
	public void register(User newUser) {
		// TODO Auto-generated method stub
		userDAO.register(newUser);
	}

}
