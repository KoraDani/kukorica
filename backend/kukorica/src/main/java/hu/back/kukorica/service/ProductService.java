package hu.back.kukorica.service;

import hu.back.kukorica.dao.ProductRepository;
import hu.back.kukorica.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProduct() {
        return this.productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return this.productRepository.save(product);
    }
}
