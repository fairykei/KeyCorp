package com.keycorp.controller;

import com.keycorp.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FavoritosController {

    TodosFavoritos todosFavoritos;
    TodosUsuarios todosUsuarios;
    TodosProdutos todosProdutos;

    @Autowired
    public FavoritosController(TodosFavoritos todosFavoritos, TodosUsuarios todosUsuarios, TodosProdutos todosProdutos){
        this.todosFavoritos = todosFavoritos;
        this.todosProdutos = todosProdutos;
        this.todosUsuarios = todosUsuarios;
    }

    @PostMapping("/save/favorite/{userId}")
    public ResponseEntity<String> saveFavorite(@PathVariable("userId") int userId, @RequestBody Produto produto){

        if (todosUsuarios.findById(userId) != null){
            if(todosFavoritos.getFavoriteId(userId, produto.getIdProduto()) == null){
                Favorito favorito = new Favorito();
                favorito.setIdProduto(produto.getIdProduto());
                favorito.setIdUsuario(userId);
                todosFavoritos.save(favorito);

                return ResponseEntity.status(HttpStatus.OK).body("Favorito salvo com sucesso!");
            }
            else{
                return ResponseEntity.status(HttpStatus.OK).body("Favorito já está salvo!");
            }
        }
        else{
            ResponseEntity.status(HttpStatus.NO_CONTENT).body("Usuário não encontrado");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao salvar favorito");
    }

    @DeleteMapping("/remove/favorite/{userId}")
    public ResponseEntity<String> removeFavorite(@PathVariable("userId") int userId, @RequestBody Produto produto){

        if (todosUsuarios.findById(userId) != null){

            Favorito favorito = todosFavoritos.getFavoriteId(userId, produto.getIdProduto());
            todosFavoritos.deleteById(favorito.getIdFavorito());

            return ResponseEntity.status(HttpStatus.OK).body("Favorito salvo com sucesso!");
        }
        else{
            ResponseEntity.status(HttpStatus.NO_CONTENT).body("Usuário não encontrado");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao salvar favorito");

    }

    @GetMapping("/get/favorites/{userId}")
    public ResponseEntity<List<Produto>> getFavoritesForUser(@PathVariable("userId") int userId){
        if(todosUsuarios.findById(userId) != null){
            List<Produto> favoritos = todosProdutos.getFavoritesForUser(userId);
            if(!favoritos.isEmpty()){


                return ResponseEntity.status(HttpStatus.OK).body(favoritos);
            }
            else{
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            }
        }
        else{
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
}
