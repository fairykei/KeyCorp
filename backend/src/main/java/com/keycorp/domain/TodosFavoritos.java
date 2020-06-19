package com.keycorp.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodosFavoritos extends JpaRepository<Favorito, Integer> {

    @Query(value = "select * from Favorito f where f.idUsuario = ?1 and f.idProduto = ?2", nativeQuery = true)
    Favorito getFavoriteId(int userId , int idProduto);




}
