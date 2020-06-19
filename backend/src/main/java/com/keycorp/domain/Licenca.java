package com.keycorp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
public class Licenca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idLicenca;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "idProduto")
//    private Produto produto;

    private int idProduto;

    private String chave;

    private String keyStatus;

    public Licenca(int idLicenca, int idProduto, String chave, String keyStatus) {
        this.idLicenca = idLicenca;
        this.idProduto = idProduto;
        this.chave = chave;
        this.keyStatus = keyStatus;
    }

    public Licenca(){}

    public int getIdLicenca() {
        return idLicenca;
    }

    public void setIdLicenca(int idLicenca) {
        this.idLicenca = idLicenca;
    }

    public int getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
    }

    public String getChave() {
        return chave;
    }

    public void setChave(String chave) {
        this.chave = chave;
    }

    public String getKeyStatus() {
        return keyStatus;
    }

    public void setKeyStatus(String keyStatus) {
        this.keyStatus = keyStatus;
    }

}

@Table (name = "Licenca")
public class Licenca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int idLicenca;

    @Getter
    @Setter
    private String chave;

    //Relacionamentos de tabelas

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idProduto")
    @Getter
    @Setter
    private Produto produto;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idItensPedido")
    @Getter
    @Setter
    private ItensPedido itensPedido;

    private Licenca (){}

    public Licenca(int idLicenca, String chave) {
        this.idLicenca = idLicenca;
        this.chave = chave;
    }

}
