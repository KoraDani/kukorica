package hu.back.kukorica.dao;

import hu.back.kukorica.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Customer,Integer> {

    Customer findByEmail(String email);

}
