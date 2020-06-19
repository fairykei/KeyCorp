package com.keycorp.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodosPedidos extends JpaRepository<Pedido, Integer> {

    @Query("select p from Pedido p where idUsuario = :userId")
    List<Pedido> findAllOrdersByUserId(int userId);

    @Query("select p from Pedido p where dataCompra BETWEEN :firstValue AND :secondValue")
    List<Pedido> findAllOrdersByDate(double firstValue, double secondValue);

    @Query(value = "select top 1 p.idPedido from  Pedido p where p.idUsuario = 1 order by dataCompra desc", nativeQuery = true)
    Pedido findTop1Order(int idUsuario);

}
