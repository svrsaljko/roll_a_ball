package rollaball.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="username", unique=true)
    protected String userName;

    @Column(name="email", unique=true)
    private String email;

    @Column(name="password")
    private String password;
	
    private String roles;

    @Column(name="highscore")
    protected Integer highscore;

    public User() {}

    public  long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

    public String getUserName() {
	return userName;
    }

    public void setUserName(String userName) {
	this.userName = userName;
    }

    public String getEmail() {
	return email;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public String getPassword() {
	return password;
    }

    public void setPassword(String password) {
	this.password = password;
    }
	
    public String getRoles() {
	return roles;
    }

    public void setRoles(String roles) {
	this.roles = roles;
    }

    public Integer getHighscore() {
	return highscore;
    }

    public void setHighscore(Integer highscore) {
	this.highscore = highscore;
    }
	
}