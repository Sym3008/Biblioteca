package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Autori;
import it.biblioteca.www.Biblioteca.service.AutoriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping
public class AutoriController {

    @Autowired
    private AutoriService autoriService;

    @GetMapping("/get-autori")
    public List<Autori> getAutori(){
        return autoriService.getAutori();
    }

    @GetMapping("/get-autore/{id}")
    public Autori getAutoreById(@PathVariable("id") Integer id){
        return autoriService.getAutoreById(id);
    }

    @GetMapping("/get-autore-nominativo/{nominativo}")
    public List<Autori> getAutoreByNominativo(@PathVariable("nominativo") String nominativo){
        return autoriService.getAutoreByNominativo(nominativo);
    }

    @PostMapping("/save-autori")
    public void saveAutori(@RequestBody @NotNull Autori autori){
        autoriService.saveOrUpdateAutori(autori);
    }

    @PutMapping("/update-autori")
    public void updateAutori(@RequestBody @NotNull Autori autori){
        autoriService.saveOrUpdateAutori(autori);
    }

    @DeleteMapping("/cancella-autori")
    public void deleteAutori(@RequestBody @NotNull List<Autori> autori){
        autoriService.deleteAutori(autori);
    }

    @DeleteMapping("/cancella-autore/{id}")
    public void deleteAutoreById(@PathVariable("id") Integer id){
        autoriService.deleteAutoreById(id);
    }
}
