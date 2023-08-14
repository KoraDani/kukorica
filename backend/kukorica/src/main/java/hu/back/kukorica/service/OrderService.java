package hu.back.kukorica.service;

import hu.back.kukorica.dao.OrderRepository;
import hu.back.kukorica.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order) {
        return this.orderRepository.save(order);
    }
}
