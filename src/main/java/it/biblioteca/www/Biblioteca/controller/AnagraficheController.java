package it.biblioteca.www.Biblioteca.controller;


import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.Util.MailSenderComponent;
import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.service.AnagraficheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping
public class AnagraficheController {

    @Autowired
    private AnagraficheService anagraficheService;

    @Autowired
    private MailSenderComponent mailSenderComponent;

    @GetMapping("/get-anagrafiche")
    public List<Anagrafiche> getAnagrafiche(){
        return anagraficheService.getAnagrafiche();
    }

    @GetMapping("/get-anagrafica/{id}")
    public Anagrafiche getAnagraficaById(@PathVariable("id") Integer id){
        return anagraficheService.getAnagraficaById(id);
    }

    @PostMapping ("/save-anagrafiche")
    public String saveAnagrafiche(@RequestBody @NotNull Anagrafiche anagrafiche){
        String email = anagrafiche.getEmail();
        List<Anagrafiche>  anaList = anagraficheService.getAnagrafiche();
        for (Anagrafiche a: anaList){
            if (email.equals(a.getEmail())){
                return "e-mail già inserita";
            }
        }
        anagraficheService.saveOrUpdateAnagrafiche(anagrafiche);

        String dest=anagrafiche.getEmail();
        String ogg="REGISTRAZIONE FASTBOOK";
        String mess="FASTEBOOK è lieta accogliere nel miglio modo la Vs registrazione.\n\nDi seguito le elenco le credenziali che le permetto di prenotare i libri nel nostro sito\n\n  -> Email: "+anagrafiche.getEmail()+"   -> Password: "+anagrafiche.getPassword()+"\n\nEffettua subito la prima prenotazione :)\n\n\n\nFASTBOOK SPA";
        mailSenderComponent.send(dest,ogg,mess);
        return "";
    }

    @PutMapping ("/update-anagrafiche")
    public void updateAnagrafiche(@RequestBody @NotNull Anagrafiche anagrafiche){
        anagraficheService.saveOrUpdateAnagrafiche(anagrafiche);
    }

//    @DeleteMapping("/cancella-anagrafiche")
//    public void deleteAnagrafiche(@RequestBody @NotNull List<Anagrafiche> anagrafiche){
//        anagraficheService.deleteAnagrafiche(anagrafiche);
//    }
//
//    @DeleteMapping("/cancella-anagrafica/{id}")
//    public void deleteAnagraficaById(@PathVariable("id") Integer id){
//        anagraficheService.deleteAnagraficaById(id);
//    }
}
