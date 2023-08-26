package hu.back.kukorica.controller;

import hu.back.kukorica.model.Customer;
import hu.back.kukorica.service.UserService;
import hu.back.kukorica.session.SessionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Customer> loginUser(@RequestBody Customer userModel){
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
    public ResponseEntity<Customer> saveUser(@RequestBody Customer userModel){
//        userModel.setId(UUID.randomUUID().node());
//        User user = userService.saveUser(userModel);
        Customer user = new Customer(userModel.getId(),userModel.getFirstName(), userModel.getLastName(),userModel.getEmail(), userModel.getPassword(), userModel.getAddressId(), userModel.getPhone(), userModel.getCoins(), userModel.getSessionId());
        System.out.println(userModel.getUsername() +" mentve");
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }
}
