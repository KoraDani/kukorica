package hu.back.kukorica.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productID;
    private String name;
    private String description;
    private int price;
    private int stockQuantity;
    private String imageURL;
}
