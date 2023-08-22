package hu.back.kukorica.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "ORDER_MODEL")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne
    private User user;
    @OneToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
    private String files;
    private long productId;
    private String orderFileUrl;
    private String orderDate;
    private String finishDate;
    private String shipDate;

    private int price;

}
