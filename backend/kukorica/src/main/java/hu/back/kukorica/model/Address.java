package hu.back.kukorica.model;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;


@Entity
@Data
@Table(name = "uaddress")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int user_id;
    private String country;
    private String city;
    private String street;
    private String house_number;
    @Nullable
    private int floor;
    @Nullable
    private int door;
}
