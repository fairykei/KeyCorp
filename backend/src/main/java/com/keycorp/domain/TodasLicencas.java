package com.keycorp.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodasLicencas extends JpaRepository<Licenca, Integer> {

    @Query(value = "select top 1 * from licenca l where l.idProduto = :idProduto and l.keyStatus = 0" , nativeQuery = true)
    Licenca getLicenceTop1(int idProduto);

    @Query(value = "select top 1 * from Licenca l, Pedido p where l.idProduto = ?1 and " +
            "p.idUsuario = ?2 order by p.dataCompra desc", nativeQuery = true)
    Licenca getKey(int idProduto, int idUsuario);

}
