package hu.back.kukorica.controller;

import hu.back.kukorica.model.Product;
import hu.back.kukorica.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productController")
public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Product>> getAllProduct(){
        List<Product> productList = this.productService.getAllProduct();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @PostMapping("/getItemById")
    public ResponseEntity<Product> getItemById(@RequestBody int id){
        return new ResponseEntity<>(this.productService.getItemById(id), HttpStatus.OK);
    }

    @PostMapping("/saveProduct")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product){
        Product newProduct = this.productService.saveProduct(product);
        return new ResponseEntity<>(newProduct, HttpStatus.OK);
    }
}
