package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.service.ConsegneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
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

    @GetMapping("/get-consegne-anagrafica/{id}")
    public List<Consegne> getConsegnaByIdAnagrafica(@PathVariable("id") Integer id){
        return consegneService.getConsegneByIdAnagrafica(id);
    }

    @GetMapping("/get-consegne-inattesa-anagrafica/{id}")
    public List<Consegne> getConsegnaInAttesaByIdAnagrafica(@PathVariable("id") Integer id){
        return consegneService.getConsegneInAttesaByIdAnagrafica(id);
    }

    @GetMapping("/get-consegne-ordinati-anagrafica/{id}")
    public List<Consegne> getConsegnaOrdinatiByIdAnagrafica(@PathVariable("id") Integer id){
        return consegneService.getConsegneOrdinatiByIdAnagrafica(id);
    }

    @PostMapping("/save-consegne")
    public void saveConsegne(@RequestBody @NotNull Consegne consegna){
        consegneService.saveConsegne(consegna);
    }

    @PutMapping("/update-consegne")
    public void updateConsegne(@RequestBody @NotNull List<Consegne> consegne){
        consegneService.updateConsegne(consegne);
    }

    @DeleteMapping("/cancella-consegne")
    public void deleteConsegne(@RequestBody @NotNull List<Consegne> consegne){
        consegneService.deleteConsegne(consegne);
    }

    @DeleteMapping("/cancella-consegna/{id}")
    public void deleteConsegnaById(@PathVariable("id") Integer id){
        consegneService.deleteConsegnaById(id);
    }
}
