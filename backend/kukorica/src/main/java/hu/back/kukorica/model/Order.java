package hu.back.kukorica.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "ORDER_MODEL")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderID;
    //TODO itt majd lehet ez így nem lesz jó, userid-ra kel cserélni
    private int customerID;
    private String orderDate;
    private int totalAmount;
    private String status;
    private String files;

    //TODO itt ha feltölt majd a felhasználó egy fájlt akkor kell egy fileURL field is

}
