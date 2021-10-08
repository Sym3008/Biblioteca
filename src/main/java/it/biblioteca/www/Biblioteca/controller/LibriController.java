package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Libri;
import it.biblioteca.www.Biblioteca.service.LibriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping
public class LibriController {

    @Autowired
    private LibriService libriService;

    @GetMapping("/get-libri")
    public List<Libri> getLibri(){
        return libriService.getLibri();
    }

    @GetMapping("/get-libro/{id}")
    public Libri getLibroById(@PathVariable("id") Integer id){
        return libriService.getLibroById(id);
    }

    @GetMapping("/get-libro-titoli/{titolo}")
    public List<Libri> getLibroByTitolo(@PathVariable("titolo") String titolo){
        return libriService.getLibroByTitolo(titolo);
    }

    @PostMapping("/save-libri")
    public void saveLibri(@RequestBody @NotNull Libri libro){
        libriService.saveOrUpdateLibri(libro);
    }

    @PutMapping("/update-libri")
    public void updateLibri(@RequestBody @NotNull Libri libro){
        libriService.saveOrUpdateLibri(libro);
    }

    @DeleteMapping("/cancella-libri")
    public void deleteLibri(@RequestBody @NotNull List<Libri> libri){
        libriService.deleteLibri(libri);
    }

    @DeleteMapping("/cancella-libro/{id}")
    public void deleteLibroById(@PathVariable("id") Integer id){
        libriService.deleteLibroById(id);
    }
}