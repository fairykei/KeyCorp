package com.keycorp.controller;

import com.keycorp.domain.TodosFornecedores;
import com.keycorp.domain.Fornecedores;
import com.keycorp.security.Encrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FornecedoresController {


    private TodosFornecedores todosFornecedores;

    @Autowired
    public FornecedoresController(TodosFornecedores todosFornecedores) {
        this.todosFornecedores = todosFornecedores;
    }

    @PostMapping("/save/vendor")
    public ResponseEntity<String> addUser(@RequestBody Fornecedores fornecedor) {
        todosFornecedores.save(fornecedor);
        return ResponseEntity.ok("Fornecedor cadastrado com sucesso!");
    }
}

