package com.keycorp.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodosProdutos extends JpaRepository<Produto, Integer > {

    @Query("select p from Produto p where p.nomeProduto like %:nomeProduto%")
    List<Produto> findSpecificProduct(String nomeProduto);

    @Query("select p from Produto p")
    List<Produto> findAllProducts();

    @Query(value = "select * from Produto p where p.idProduto = ?1", nativeQuery = true)
    Produto findProductsById(int idProduto);

    @Query("select p , c.categoria from Produto p inner join Categoria c on p.idCategoria = c.idCategoria " +
            "where c.idCategoria = :idCategoria")
    List<Produto> findProductsByCategory(int idCategoria);

    @Query("select p from Produto p inner join Categoria c on p.idCategoria = c.idCategoria where c.idCategoria = :idCategoria \n" +
            "AND p.valorBase BETWEEN :firstValue AND :secondValue")
    List<Produto> findProductsByPriceRange(int idCategoria, double firstValue, double secondValue);

    @Query("select p from Produto p where p.valorBase BETWEEN :firstValue AND :secondValue")
    List<Produto> findAllProductsByPriceRange(double firstValue, double secondValue);

    @Query(value = "select distinct p.*  from Produto p, Usuario u, Favorito f where f.idUsuario = u.idUsuario and u.idUsuario = ?1 and p.idProduto = f.idProduto", nativeQuery = true)
    List<Produto> getFavoritesForUser(int userId);

}
