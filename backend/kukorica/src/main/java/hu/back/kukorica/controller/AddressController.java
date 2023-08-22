package hu.back.kukorica.controller;

import hu.back.kukorica.model.Address;
import hu.back.kukorica.model.User;
import hu.back.kukorica.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/addressController")
public class AddressController {
    private AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("/saveAddress")
    public ResponseEntity<Address> saveAddress(@RequestBody Address address){
        System.out.println(address.getUser_id());
        address.setUser_id(2);
        Address newaddress = this.addressService.saveAddress(address);
        return new ResponseEntity<>(newaddress, HttpStatus.OK);
    }
}
