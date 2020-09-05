package rollaball.backend.model;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MyUserDetails implements UserDetails {
	
    private String userName;
    private String password;
       
    public MyUserDetails(User user) {
        this.userName = user.getUserName();
        this.password =  user.getPassword(); 
    	}
	
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
	List<GrantedAuthority> authorities = Arrays.stream("ROLE_USER".split(","))
        .map(SimpleGrantedAuthority::new)
        .collect(Collectors.toList());
	return authorities;
    };
	
    @Override
    public String getPassword() {
	return this.password;
    }

    @Override
    public String getUsername() {
	return this.userName;
    }
    
    @Override
    public boolean isAccountNonExpired() {
	return true;
    }

    @Override
    public boolean isAccountNonLocked() {
	return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
	return true;
    }

    @Override
    public boolean isEnabled() {
	return true;
    }
	
}
