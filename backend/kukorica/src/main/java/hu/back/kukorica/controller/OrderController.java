package hu.back.kukorica.controller;

import hu.back.kukorica.model.Address;
import hu.back.kukorica.model.Order;
import hu.back.kukorica.service.AddressService;
import hu.back.kukorica.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/orderController")
public class OrderController {
    private OrderService orderService;
    private AddressService addressService;

    @Autowired
    public OrderController(OrderService orderService, AddressService addressService) {
        this.orderService = orderService;
        this.addressService = addressService;
    }

    @PostMapping("/saveOrder")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order){
        System.out.println(order.getFiles() + " files");
        Address address = this.addressService.saveAddress(order.getAddress());
        Order newOrder = this.orderService.saveOrder(order);
        return new ResponseEntity<>(newOrder, HttpStatus.OK);
    }
}
