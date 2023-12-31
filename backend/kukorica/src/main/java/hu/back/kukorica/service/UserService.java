package hu.back.kukorica.service;

import hu.back.kukorica.dao.UserRepository;
import hu.back.kukorica.model.Customer;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Data
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private Customer currentCustomer;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Customer saveUser(Customer user){
        return this.userRepository.save(user);
    }

//    public User loginUser(User userModel) {
//        final User user = this.userRepository.findByEmail(userModel.getEmail());
//        System.out.println("finded user: " + user.getName());
//        if(user.getEmail().equals(userModel.getEmail()) && user.getPassword().equals(userModel.getPassword())){
//            System.out.println("egyezetett");
//            return user;
//        }
//        System.out.println("nem egyezetett");
//        return null;
//    }

    @Override
    public Customer loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer user = this.userRepository.findByEmail(email);
//        this.currentCustomer = this.userRepository.findByEmail(email);
//        this.currentCustomer = user;
        System.out.println("Current Customer:" + currentCustomer.getForename());
        if(user == null){
            throw new UsernameNotFoundException("Faild to find user by email" + email);
        }
        return user;
    }

    public Customer findByEmail(String email) {
        this.currentCustomer = this.userRepository.findByEmail(email);
        return this.userRepository.findByEmail(email);
    }
}
