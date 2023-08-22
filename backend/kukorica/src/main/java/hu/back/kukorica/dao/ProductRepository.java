package hu.back.kukorica.dao;

import hu.back.kukorica.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository  extends JpaRepository<Product,Integer> {
    @Query("SELECT u FROM Product u WHERE u.id = ?1")
    Product getItemById(int id);

}

