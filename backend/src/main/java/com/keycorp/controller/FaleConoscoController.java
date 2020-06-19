package com.keycorp.controller;

import com.keycorp.domain.Formulario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FaleConoscoController {

    SimpleMailMessage msg = new SimpleMailMessage();
    private JavaMailSender javaMailSender;

    @Autowired
    public FaleConoscoController(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @PostMapping("/faleconosco/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody Formulario form){

        msg.setTo(System.getenv("SMTP_USERNAME"));
        msg.setSubject(form.getAssunto());
        msg.setText(form.getMensagem() + "\n\n\n" + "Enviado por: " + form.getNome() + "\n" + "Email para contato: " +
                form.getEmail());

        try {
            javaMailSender.send(msg);
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        catch (Exception err){
            System.out.println(err);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
