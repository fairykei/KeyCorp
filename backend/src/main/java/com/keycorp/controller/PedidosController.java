package com.keycorp.controller;

import com.keycorp.domain.*;
import org.apache.tomcat.jni.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PedidosController {
    TodosPedidos todosPedidos;
    private LicencasController licencasController;
    private TodosUsuarios todosUsuarios;
    private TodasLicencas todasLicencas;
    private TodosProdutos todosProdutos;
    private JavaMailSender javaMailSender;
    SimpleMailMessage msg = new SimpleMailMessage();


    @Autowired
    public PedidosController(TodosPedidos todosPedidos, TodosUsuarios todosUsuarios, TodasLicencas todasLicencas,
                             JavaMailSender javaMailSender, TodosProdutos todosProdutos) {
        this.todosPedidos = todosPedidos;
        this.todosUsuarios = todosUsuarios;
        this.todasLicencas = todasLicencas;
        this.javaMailSender = javaMailSender;
        this.todosProdutos = todosProdutos;
    }

    public PedidosController() {}

    @PostMapping("/insert/order/{userId}")
    public ResponseEntity<String> insertProduct(@PathVariable("userId") int idUsuario, @RequestBody Pedido pedido) {
        Licenca licenca = new Licenca();
    private TodosUsuarios todosUsuarios;

    @Autowired
    public PedidosController(TodosPedidos todosPedidos, TodosUsuarios todosUsuarios) {
        this.todosPedidos = todosPedidos;
        this.todosUsuarios = todosUsuarios;
    }

    @PostMapping("/insert/order/{userId}")
    public ResponseEntity<String> insertProduct(@PathVariable("userId") int idUsuario, @RequestBody Pedido pedido) {

        if (pedido != null) {
            Usuario user = todosUsuarios.getUserById(idUsuario);
            if (user != null) {
                pedido.setIdUsuario(idUsuario);
                licenca.setIdProduto(pedido.getIdProduto());
                try{
                    todosPedidos.save(pedido);
                    //TimeUnit.SECONDS.sleep(10);
                }
                catch (Exception err){
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro no processamento do pedido!");
                }

                if (verifyLicenceExistence(licenca, idUsuario, pedido.getIdProduto()).getStatusCode().value() != 200){
                        deleteOrder(pedido).getBody();
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro no processamento do pedido!");
                }
                else{
                    try{
                        Produto produto = todosProdutos.findProductsById(pedido.getIdProduto());
                        Usuario usuario = todosUsuarios.getUserById(idUsuario);
                        Licenca userLicence = todasLicencas.getKey(produto.getIdProduto(), usuario.getIdUsuario());

                        System.out.println("SAGHBJSKLMASVHBJNKLMVSAHBJ KN\n" + usuario.getEmail());

                        msg.setTo(usuario.getEmail());
                        msg.setSubject("Sua chave de acesso chegou!");
                        msg.setText("Olá, " + usuario.getNome() + "! \n" +
                                "Você realizou a compra de um produto em nossa loja e aqui está sua chave: " +
                                "\n KEY: " + userLicence.getChave() +
                                "\n\n Obrigado por comprar conosco!");

                        javaMailSender.send(msg);
                        return ResponseEntity.status(HttpStatus.OK).body("Sucesso");
                    }
                    catch (Exception err){
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro!");
                    }
                }

            }
            else {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Usuário não encontrado!");
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro no processamento do pedido!");
    }

    @DeleteMapping("/remove/order")
    public ResponseEntity<String> deleteOrder(@RequestBody Pedido pedido){

        try {
            Pedido pedidoToDelete = todosPedidos.findTop1Order(pedido.getIdUsuario());
            todosPedidos.deleteById(pedidoToDelete.getIdPedido());
        }
        catch (Exception err){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao remover pedido!");

        }
        return ResponseEntity.status(HttpStatus.OK).body("Pedido Removido com sucesso!");
                todosPedidos.save(pedido);
                return ResponseEntity.status(HttpStatus.OK).body("Pedido adicionado com sucesso!");
            } else {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Usuário não encontrado!");
            }

        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao adicionar pedido!");
    }

    @GetMapping("/search/orders/{userId}")
    public ResponseEntity<List<Pedido>> findAllOrdersByUserId(@PathVariable("userId") int idUsuario){
        List<Pedido> pedidos = todosPedidos.findAllOrdersByUserId(idUsuario);
        if(pedidos.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(pedidos);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


    @GetMapping("/search/orders/date")
    public ResponseEntity<List<Pedido>> findAllOrdersByDate(@RequestBody RangeValues values){
        List<Pedido> pedidos = todosPedidos.findAllOrdersByDate(values.getFirstValue(), values.getSecondValue());
        if(pedidos.size() > 0){
            return ResponseEntity.status(HttpStatus.OK).body(pedidos);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    public ResponseEntity<String> verifyLicenceExistence(Licenca licencas, int idUsuario, int idProduto){
        Licenca licenca =  todasLicencas.getLicenceTop1(licencas.getIdProduto());
        if(todasLicencas.findById(licencas.getIdProduto()) != null){

            if(todasLicencas.getLicenceTop1(licencas.getIdProduto()) != null){

                licenca.setKeyStatus("true");


//                licenca.setIdUsuario(idUsuario);

                todasLicencas.save(licenca);

//                Produto produto = todosProdutos.findProductsById(idProduto);
//                Usuario usuario = todosUsuarios.getUserById(idUsuario);
////                        Licenca userLicence = todasLicencas.
//                System.out.println("SAGHBJSKLMASVHBJNKLMVSAHBJ KN\n" + usuario.getEmail());
//                msg.setTo(usuario.getEmail());
//                msg.setSubject("Sua chave de acesso chegou!");
//                msg.setText("Olá, " + usuario.getNome() + "! \n" +
//                        "Você realizou a compra do produto ' " + produto.getNomeProduto() + "' e aqui está sua chave: " +
//                        "\n KEY: " + licenca.getChave() +
//                        "\n\n Obrigado por comprar conosco!");
//
//                javaMailSender.send(msg);

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

}
