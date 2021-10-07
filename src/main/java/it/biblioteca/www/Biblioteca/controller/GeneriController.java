package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Generi;
import it.biblioteca.www.Biblioteca.service.GeneriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping
public class GeneriController {

    @Autowired
    private GeneriService generiService;

    @GetMapping("/get-generi")
    public List<Generi> getGeneri(){
        return generiService.getGeneri();
    }

    @GetMapping("/get-genere/{id}")
    public Generi getGeneriById(@PathVariable("id") Integer id){
        return generiService.getGenereById(id);
    }

    @PostMapping("/save-generi")
    public void saveGeneri(@RequestBody @NotNull Generi generi){
        generiService.saveOrUpdateGeneri(generi);
    }

    @PutMapping("/update-generi")
    public void updateGeneri(@RequestBody @NotNull Generi generi){
        generiService.saveOrUpdateGeneri(generi);
    }

    @DeleteMapping("/cancella-generi")
    public void deleteGeneri(@RequestBody @NotNull List<Generi> generi){
        generiService.deleteGeneri(generi);
    }

    @DeleteMapping("/cancella-genere/{id}")
    public void deleteGenereById(@PathVariable("id") Integer id){
        generiService.deleteGenereById(id);
    }
}
