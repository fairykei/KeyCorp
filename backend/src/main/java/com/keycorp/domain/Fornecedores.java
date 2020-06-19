package com.keycorp.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document(collection = "fornecedores")
public class Fornecedores {

    @Getter
    @Setter
    @Id
    private String _id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String description;
    @Getter
    @Setter
    private String contractedBy;
    @Getter
    @Setter
    private String contractExpiration;

    public Fornecedores(String _id, String name, String description, String contractedBy, String contractExpiration) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.contractedBy = contractedBy;
        this.contractExpiration = contractExpiration;
    }

    public Fornecedores() {
    }
}
