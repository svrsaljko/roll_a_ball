package com.rollaball.backend.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rollaball.backend.entity.User;

@Repository
public class UserDAOJpaImpl implements UserDAO {

	private EntityManager entityManager;

	@Autowired
	UserDAOJpaImpl (EntityManager entityManager){
		this.entityManager= entityManager;
	}
	
	
	@Override
	public void register(User newUser) {
		// TODO Auto-generated method stub
		User dbUser = entityManager.merge(newUser);
		newUser.setId(dbUser.getId());
	}

}
