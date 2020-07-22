package rollaball.backend.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;


@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason="Email already exist!")
public class EmailAlreadyExistException extends RuntimeException {

}





