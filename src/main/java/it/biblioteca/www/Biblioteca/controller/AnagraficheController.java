package it.biblioteca.www.Biblioteca.controller;


import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Anagrafiche;
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
