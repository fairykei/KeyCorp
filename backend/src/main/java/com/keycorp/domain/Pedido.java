package com.keycorp.domain;


import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import javax.persistence.*;
import java.util.List;

@Embeddable
@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPedido;

    @JsonProperty
    private double valorTotal;

    @JsonProperty
    private int tipoPagamento;

    @JsonProperty
    private int idUsuario;

    private int idProduto;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int idPedido;

    private double valorTotal;

    private int tipoPagamento;

    private int idUsuario;

    //private String dataCompra;

    //Relacionamentos de tabelas

//
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "idUsuario")
//    private Usuario usuario;

//    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
//    private List< ItensPedido > itensPedidos;

//    public Pedido(int idPedido, double valorTotal, int tipoPagamento, int idUsuario) {
//        this.idPedido = idPedido;
//        this.valorTotal = valorTotal;
//        this.tipoPagamento = tipoPagamento;
//        this.idUsuario = idUsuario;
//        //this.dataCompra = dataCompra;
//    }


    public Pedido(int idPedido, double valorTotal, int tipoPagamento, int idUsuario, int idProduto) {

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private List< ItensPedido > itensPedidos;

    public Pedido(int idPedido, double valorTotal, int tipoPagamento, int idUsuario) {
        this.idPedido = idPedido;
        this.valorTotal = valorTotal;
        this.tipoPagamento = tipoPagamento;
        this.idUsuario = idUsuario;
        this.idProduto = idProduto;
    }

    private Pedido(){}

//    RestTemplate restTemplate;
//
        //this.dataCompra = dataCompra;
    }

//    RestTemplate restTemplate;

//    private Pedido() {
//        this.restTemplate = new RestTemplate();
//    }

//
//    public Pedido validarCriacaoPedido(Pedido pedido){
//        String url = "http://35.237.84.170/insert/order/" + pedido.getIdUsuario();
    private Pedido(){}

//    public Pedido validarCriacaoPedido(Pedido pedido){
//        String url = "http://35.237.84.170/insert/order/" + pedido.getUsuario().getIdUsuario();
//        ResponseEntity<Pedido> resposta = restTemplate.postForEntity(url, pedido, Pedido.class);
//
//        return resposta.getBody();
//    }


    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public int getTipoPagamento() {
        return tipoPagamento;
    }

    public void setTipoPagamento(int tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
    }

//    public List<ItensPedido> getItensPedidos() {
//        return itensPedidos;
//    }

//    public void setItensPedidos(List<ItensPedido> itensPedidos) {
//        this.itensPedidos = itensPedidos;
//    }

    public List<ItensPedido> getItensPedidos() {
        return itensPedidos;
    }

    public void setItensPedidos(List<ItensPedido> itensPedidos) {
        this.itensPedidos = itensPedidos;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    //    public String getDataCompra() {
//    public String getDataCompra() {
//        return dataCompra;
//    }
//
//    public void setDataCompra(String dataCompra) {
//        this.dataCompra = dataCompra;
//    }


    public int getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
    }
}

