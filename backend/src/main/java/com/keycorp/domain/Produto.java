package com.keycorp.domain;

import lombok.Getter;
import lombok.Setter;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import javax.persistence.*;
import java.util.Arrays;


import javax.persistence.*;

import java.util.List;

@Embeddable
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int idProduto;

    @Getter
    @Setter
    private String nomeProduto;

    @Getter
    @Setter
    private String descProduto;

    @Getter
    @Setter
    private double valorBase;

    //Relacionamentos de tabelas

//    @OneToMany(mappedBy = "produto")
//    @Getter
//    @Setter
//    private List< ValorProduto > valorProdutos;
//
//    @OneToMany(mappedBy = "produto")
//    @Getter
//    @Setter
//    private List < ItensPedido > itensPedidos;
//
//    @OneToMany(mappedBy = "produto")
//    @Getter
//    @Setter
//    private List < Licenca > licencas;
    @OneToMany(mappedBy = "produto")
    @Getter
    @Setter
    private List< ValorProduto > valorProdutos;

    @OneToMany(mappedBy = "produto")
    @Getter
    @Setter
    private List < ItensPedido > itensPedidos;

    @OneToMany(mappedBy = "produto")
    @Getter
    @Setter
    private List < Licenca > licencas;

    @Getter
    @Setter
    private int idCategoria;

    public Produto() {
    }


//    public Produto(String nomeProduto, String descProduto, double valorBase) {
//        this.nomeProduto = nomeProduto;
//        this.descProduto = descProduto;
//        this.valorBase = valorBase;
//    }


    public Produto(int idProduto, String nomeProduto, String descProduto, double valorBase, List<Licenca> licencas, int idCategoria) {
        this.idProduto = idProduto;
        this.nomeProduto = nomeProduto;
        this.descProduto = descProduto;
        this.valorBase = valorBase;
//        this.licencas = licencas;
        this.idCategoria = idCategoria;
    }

    public Produto(String nomeProduto, String descProduto, double valorBase) {
        this.nomeProduto = nomeProduto;
        this.descProduto = descProduto;
        this.valorBase = valorBase;
    }

}
