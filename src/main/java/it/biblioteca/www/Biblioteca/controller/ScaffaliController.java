package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Scaffali;
import it.biblioteca.www.Biblioteca.service.ScaffaliService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping
public class ScaffaliController {

    @Autowired
    private ScaffaliService scaffaliService;

    @GetMapping("/get-scaffali")
    public List<Scaffali> getScaffali(){
        return scaffaliService.getScaffali();
    }

    @GetMapping("/get-scaffali/{id}")
    public Scaffali getRipianiById(@PathVariable("id") Integer id){
        return scaffaliService.getScaffaleById(id);
    }

    @PostMapping("/save-scaffali")
    public void saveScaffali(@RequestBody @NotNull Scaffali scaffali){
        scaffaliService.saveOrUpdateScaffali(scaffali);
    }

    @PutMapping("/update-scaffali")
    public void updateScaffali(@RequestBody @NotNull Scaffali scaffali){
        scaffaliService.saveOrUpdateScaffali(scaffali);
    }

    @DeleteMapping("/cancella-scaffali")
    public void deleteScaffali(@RequestBody @NotNull List<Scaffali> scaffali){
        scaffaliService.deleteScaffali(scaffali);
    }

    @DeleteMapping("/cancella-scaffale/{id}")
    public void deleteScaffaleById(@PathVariable("id") Integer id){
        scaffaliService.deleteScaffaleById(id);
    }
}
