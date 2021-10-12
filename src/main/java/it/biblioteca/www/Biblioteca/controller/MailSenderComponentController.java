package it.biblioteca.www.Biblioteca.controller;

import it.biblioteca.www.Biblioteca.Util.MailSenderComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping
public class MailSenderComponentController {

    @Autowired
    private MailSenderComponent mailSenderComponent;

    @PostMapping("/send-email/{dest}/{ogg}/{mess}")
    public void sendMail(@PathVariable("dest") String dest,@PathVariable("ogg") String ogg,@PathVariable("mess") String mess){
        mailSenderComponent.send(dest,ogg,mess);
    }
}
