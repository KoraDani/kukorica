package hu.back.kukorica.service;

import hu.back.kukorica.dao.AddressRepository;
import hu.back.kukorica.model.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {
    private AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }


    public Address saveAddress(Address address) {
        return this.addressRepository.save(address);
    }
}
