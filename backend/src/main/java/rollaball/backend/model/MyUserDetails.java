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
   
    //private List<GrantedAuthority> authorities;
    

    public MyUserDetails(User user) {
        this.userName = user.getUserName();
        this.password =  user.getPassword(); 
        //this.authorities = 
        System.out.println("logged user: " + this.userName);
        System.out.println("authorities: " + this.getAuthorities());
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
		// TODO Auto-generated method stub
		return this.userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
}
