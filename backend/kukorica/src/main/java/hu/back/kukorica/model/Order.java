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
    //TODO itt majd lehet ez így nem lesz jó, userid-ra kel cserélni
    @OneToOne
    private User user;
    private String orderDate;
    private int totalAmount;
    private String status;

    //TODO itt ha feltölt majd a felhasználó egy fájlt akkor kell egy fileURL field is

}
