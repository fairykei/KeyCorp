package com.keycorp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Embeddable
@Entity
public class ItensPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int idItensPedido;

    @Getter
    @Setter
    private int qtdItem;

    @Getter
    @Setter
    private double valorUnitario;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idProduto")
    @Getter
    @Setter
    private Produto produto;

    //Relacionamentos de tabelas

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idPedido")
    @Getter
    @Setter
    private Pedido pedido;

    @OneToMany(mappedBy = "itensPedido", cascade = CascadeType.ALL)
    @Getter
    @Setter
    private List< Licenca > licencas;

    private ItensPedido (){}

    public ItensPedido(int idItensPedido, int qtdItem, double valorUnitario) {
        this.idItensPedido = idItensPedido;
        this.qtdItem = qtdItem;
        this.valorUnitario = valorUnitario;
    }

    @Override
    public String toString() {
        return "ItensPedido{" +
                "idItensPedido=" + idItensPedido +
                ", qtdItem=" + qtdItem +
                '}';
    }
}
