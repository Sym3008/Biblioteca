package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.service.ConsegneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ConsegneController {

    @Autowired
    private ConsegneService consegneService;

    @GetMapping("/get-consegne")
    public List<Consegne> getConsegne(){
        return consegneService.getConsegne();
    }

    @GetMapping("/get-consegna/{id}")
    public Consegne getConsegnaById(@PathVariable("id") Integer id){
        return consegneService.getConsegnaById(id);
    }

    @PostMapping("/save-consegne")
    public void saveConsegne(@RequestBody @NotNull List<Consegne> consegne){
        consegneService.saveOrUpdateConsegne(consegne);
    }

    @PutMapping("/update-consegne")
    public void updateCaseEditrici(@RequestBody @NotNull List<Consegne> consegne){
        consegneService.saveOrUpdateConsegne(consegne);
    }

    @DeleteMapping("/canella-consegne")
    public void deleteCaseEditrici(@RequestBody @NotNull List<Consegne> consegne){
        consegneService.deleteConsegne(consegne);
    }

    @DeleteMapping("/canella-consegna/{id}")
    public void deleteConsegnaById(@PathVariable("id") Integer id){
        consegneService.deleteConsegnaById(id);
    }
}