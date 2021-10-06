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
    public void saveAnagrafiche(@RequestBody @NotNull List<Anagrafiche> anagrafiche){
        anagraficheService.saveOrUpdateAnagrafiche(anagrafiche);
    }

    @PutMapping ("/update-anagrafiche")
    public void updateAnagrafiche(@RequestBody @NotNull List<Anagrafiche> anagrafiche){
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
