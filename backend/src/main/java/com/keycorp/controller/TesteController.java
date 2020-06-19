package com.keycorp.controller;

import com.keycorp.domain.TodosTestes;
import com.keycorp.domain.Usuario;
import com.keycorp.domain.Usuario1;
import com.keycorp.security.Encrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteController {


    private TodosTestes todosTestes;
    private Encrypt hashpwd = new Encrypt();

    @Autowired
    public TesteController(TodosTestes todosTestes) {
        this.todosTestes = todosTestes;
    }

    @PostMapping("/mongo/signup")
    public ResponseEntity<String> addUser(@RequestBody Usuario1 usuario) {
        todosTestes.save(usuario);
        return ResponseEntity.ok("Usuário criado com sucesso!");
    }
}

