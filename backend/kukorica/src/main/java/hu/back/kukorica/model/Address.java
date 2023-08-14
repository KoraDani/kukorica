package hu.back.kukorica.model;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;


@Entity
@Data
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private User user;
    private String country;
    private String city;
    private String street;
    private String house_number;
    @Nullable
    private int floor;
    @Nullable
    private int door;
}
