package com.keycorp.controller;

import com.keycorp.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ProdutosController {
    TodosProdutos todosProdutos;

    @Autowired
    public ProdutosController(TodosProdutos todosProdutos) {
        this.todosProdutos = todosProdutos;
    }

    @PostMapping("/insert/product")
    public ResponseEntity<Produto> insertProduct(@RequestBody Produto produto){
        if(produto != null){
            todosProdutos.save(produto);
            return ResponseEntity.status(HttpStatus.OK).body(produto);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(produto);
    }

    @GetMapping("/search/product/{nomeProduto}")
    public ResponseEntity<List<Produto>> findSpecificProduct(@PathVariable("nomeProduto") String nomeProduto){
        System.out.println(nomeProduto);
            List<Produto> produto = todosProdutos.findSpecificProduct(nomeProduto);
            if(produto.size() > 0){
                System.out.println(produto);
                return ResponseEntity.status(HttpStatus.OK).body(produto);
            }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/search/products")
    public ResponseEntity<List<Produto>> findAllProducts(){
        List<Produto> produtos = todosProdutos.findAllProducts();
        if(produtos.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(produtos);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/search/products/category/{category}")
    public ResponseEntity<List<Produto>> findProductsByCategory(@PathVariable("category") int idCategoria){

        List<Produto> produtos = todosProdutos.findProductsByCategory(idCategoria);

        if(produtos.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(produtos);
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/search/products/category/{category}/price")
    public ResponseEntity<List<Produto>> findProductsByPriceRange(@PathVariable("category") int idCategoria,
                                                                  @RequestBody RangeValues values){

        List<Produto> produtos = todosProdutos.findProductsByPriceRange(idCategoria, values.getFirstValue(),
                values.getSecondValue());

        if(produtos.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(produtos);
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/search/products/price")
    public ResponseEntity<List<Produto>> findAllProductsByPriceRange(@RequestBody RangeValues values){
        List<Produto> produtos = todosProdutos.findAllProductsByPriceRange(values.getFirstValue(), values.getSecondValue());
        if(produtos.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(produtos);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
