package com.keycorp.controller;

import com.keycorp.domain.Licenca;
import com.keycorp.domain.TodasLicencas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LicencasController {

    TodasLicencas todasLicencas;
    @Autowired
    public LicencasController(TodasLicencas todasLicencas) {
        this.todasLicencas = todasLicencas;
    }

    @PostMapping("/insert/licence")
    public ResponseEntity<Licenca> insertLicence(@RequestBody Licenca licenca){
        if(licenca != null){
//            licenca.setIdItensPedido("");
            todasLicencas.save(licenca);
            return ResponseEntity.status(HttpStatus.OK).body(licenca);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(licenca);
    }

    @PutMapping("/update/licence")
    public ResponseEntity<String> updateLicenceStatus(@RequestBody Licenca licencas){
        Licenca licenca =  todasLicencas.getLicenceTop1(licencas.getIdProduto());
        if(todasLicencas.findById(licencas.getIdProduto()) != null){
            //todasLicencas.updateLicenceStatus(licenca.getIdProduto());
            if(todasLicencas.getLicenceTop1(licencas.getIdProduto()) != null){
            licenca.setKeyStatus("true");
            todasLicencas.save(licenca);
                System.out.println("CARALHO");
            return ResponseEntity.status(HttpStatus.OK).body("Licença utilizada com sucesso!");

            }
            else{
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Desculpe, não possuimos mais licenças!");
            }

        }
        else {
            ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Ocorreu um erro no processamento");
    }

//    @GetMapping("/insert/licence")
//    public ResponseEntity<List<Licenca>> teste(@RequestBody Licenca licenca){
////            licenca.setIdItensPedido("");
//            todasLicencas.get(licenca.getIdProduto());
//            return ResponseEntity.status(HttpStatus.OK).body(todasLicencas.get(licenca.getIdProduto()));
//            }
}
