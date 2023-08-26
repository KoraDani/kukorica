package hu.back.kukorica.model;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;


@Entity
@Data
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressID;
    private int userID;
    private String country;
    private String postCardNumber;
    private String city;
    private String street;
    private String houseNumber;
    @Nullable
    private int floor;
    @Nullable
    private int door;
}
