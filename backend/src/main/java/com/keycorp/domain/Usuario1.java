package com.keycorp.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;


@Document(collection = "usuario")
public class Usuario1 {

        @Getter
        @Setter
        @Id
        @GeneratedValue
        private String id;
        @Getter
        @Setter
        private String nome;

        @Getter
        @Setter
        private String senha;

        public Usuario1(String id,String nome, String senha) {
            this.id = id;
            this.nome = nome;
            this.senha = senha;
        }

        public Usuario1(){}
}
