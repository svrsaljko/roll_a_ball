package com.rollaball.backend;

import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public ServletWebServerFactory servletContainer() {
		//Enable SSL Trafic
		TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory() {
			@Override
			protected void postProcessContext(Context context) {
				SecurityConstraint securityConstraint = new SecurityConstraint();
				securityConstraint.setUserConstraint("CONFIDENTAL");
				SecurityCollection collection = new SecurityCollection();
				collection.addPattern("/*");
				securityConstraint.addCollection(collection);
				context.addConstraint(securityConstraint);
			}
		};  
		tomcat.addAdditionalTomcatConnectors(httpToHttpsRedirectConnector());
		
		return tomcat;
	}
	
	  private Connector httpToHttpsRedirectConnector() {
	        Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
	        connector.setScheme("http");
	        connector.setPort(8000);
	        connector.setSecure(false);
	        connector.setRedirectPort(8443);
	        return connector;
	    }
}




