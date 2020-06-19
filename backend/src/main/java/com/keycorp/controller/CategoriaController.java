package com.keycorp.controller;

import com.keycorp.domain.Categoria;
import com.keycorp.domain.TodasCategorias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoriaController {
    TodasCategorias todasCategorias;
    @Autowired
    public CategoriaController(TodasCategorias todasCategorias) {
        this.todasCategorias = todasCategorias;
    }

    @PostMapping("/insert/categoria")
    public ResponseEntity<Categoria> insertCategory(@RequestBody Categoria categoria){
        if(categoria != null){
            todasCategorias.save(categoria);
            return ResponseEntity.status(HttpStatus.OK).body(categoria);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(categoria);
    }
}
