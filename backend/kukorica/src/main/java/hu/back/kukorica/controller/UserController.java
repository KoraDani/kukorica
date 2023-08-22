package hu.back.kukorica.controller;

import hu.back.kukorica.model.User;
import hu.back.kukorica.service.UserService;
import hu.back.kukorica.session.SessionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/userController")
public class UserController {

    private final UserService userService;

//    @Autowired
//    public AuthenticationManager manager;
    @Autowired
    public SessionRegistry sessionRegistry;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User userModel){
//        System.out.println("emial: "+userModel.getEmail()+" pwd: "+ userModel.getPassword());
//        User user = userService.loginUser(userModel);
//        return new ResponseEntity<>(user, HttpStatus.OK);

//        manager.authenticate(new UsernamePasswordAuthenticationToken(userModel.getUsername(), userModel.getPassword()));
        System.out.println(userModel.getEmail());

        String sessionId = sessionRegistry.registerSession(userModel.getUsername());

        System.out.println("sessionid " + sessionId);
        userModel.setSessionId(sessionId);

        return new ResponseEntity<>(userModel, HttpStatus.OK);
    }

    @PostMapping("/saveUser")
    public ResponseEntity<User> saveUser(@RequestBody User userModel){
//        userModel.setId(UUID.randomUUID().node());
//        User user = userService.saveUser(userModel);
        User user = new User(userModel.getId(),userModel.getName(),userModel.getPassword(),userModel.getEmail(), userModel.getCoins(), userModel.getSessionId());
        System.out.println(userModel.getUsername() +" mentve");
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }
}
