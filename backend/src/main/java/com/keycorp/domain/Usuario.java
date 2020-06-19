package com.keycorp.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Embeddable
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int idUsuario;

    @Getter
    @Setter
    private String nome;

    @Getter
    @Setter
    private String cpf;

    @Getter
    @Setter
    private String dataNascimento;

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private String senha;

    @Getter
    @Setter
    private LocalDateTime dataAtualizacao;

    //Relacionamentos de tabelas

//    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
//    @Getter
//    @Setter
//    private List< Pedido > pedidos;

    public Usuario(int idUsuario, String nome, String cpf, String dataNascimento, String email, String senha, LocalDateTime dataAtualizacao) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.senha = senha;
        this.dataAtualizacao = dataAtualizacao;
    }

    public Usuario(){}
//    RestTemplate restTemplate;
//
//    public Usuario() {
//        this.restTemplate = new RestTemplate();
//    }
//
//
//    public Usuario validarLogin(Usuario usuario){
//        String url = "http://35.237.84.170/login";
//        ResponseEntity<Usuario> resposta = restTemplate.postForEntity(url, usuario,Usuario.class);
//
//        return resposta.getBody();
//    }


}