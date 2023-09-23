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
        String sessionId = sessionRegistry.registerSession(userModel.getUsername());
        Customer curCust = this.userService.findByEmail(userModel.getEmail());
        curCust.setSessionId(sessionId);
        return new ResponseEntity<>(curCust, HttpStatus.OK);
    }

    @PostMapping("/saveUser")
    public ResponseEntity<Customer> saveUser(@RequestBody Customer userModel){
//        userModel.setId(UUID.randomUUID().node());
//        User user = userService.saveUser(userModel);
        Customer user = new Customer(userModel.getCustomerID(),userModel.getSurname(), userModel.getForename(),userModel.getEmail(), userModel.getPassword(), userModel.getPhone(), userModel.getCoins(), userModel.getSessionId());
        System.out.println(userModel.getUsername() +" mentve");
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }
}
