package com.keycorp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
public class ValorProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int idValorProdutos;

    @Getter
    @Setter
    private int valor;

    //Relacionamentos de tabelas

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idProduto")
    @Getter
    @Setter
    private Produto produto;

    private ValorProduto(){}

    public ValorProduto(int idValorProdutos, int valor) {
        this.idValorProdutos = idValorProdutos;
        this.valor = valor;
    }

}
