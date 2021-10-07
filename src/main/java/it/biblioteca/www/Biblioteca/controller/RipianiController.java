package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Ripiani;
import it.biblioteca.www.Biblioteca.service.RipianiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping
public class RipianiController {

    @Autowired
    private RipianiService ripianiService;

    @GetMapping("/get-ripiani")
    public List<Ripiani> getRipiani(){
        return ripianiService.getRipiani();
    }

    @GetMapping("/get-ripiano/{id}")
    public Ripiani getRipianiById(@PathVariable("id") Integer id){
        return ripianiService.getRipianoById(id);
    }

    @PostMapping("/save-ripiani")
    public void saveRipiani(@RequestBody @NotNull Ripiani ripiani){
        ripianiService.saveOrUpdateRipiani(ripiani);
    }

    @PutMapping("/update-ripiani")
    public void updateLibri(@RequestBody @NotNull Ripiani ripiani){
        ripianiService.saveOrUpdateRipiani(ripiani);
    }

    @DeleteMapping("/cancella-ripiani")
    public void deleteRipiani(@RequestBody @NotNull List<Ripiani> ripiani){
        ripianiService.deleteRipiani(ripiani);
    }

    @DeleteMapping("/cancella-ripiani/{id}")
    public void deleteRipianiById(@PathVariable("id") Integer id){
        ripianiService.deleteRipianoById(id);
    }
}
