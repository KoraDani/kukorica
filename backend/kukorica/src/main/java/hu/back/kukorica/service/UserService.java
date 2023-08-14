package hu.back.kukorica.service;

import hu.back.kukorica.dao.UserRepository;
import hu.back.kukorica.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user){
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
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = this.userRepository.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("Faild to find user by email" + email);
        }
        return user;
    }
}
