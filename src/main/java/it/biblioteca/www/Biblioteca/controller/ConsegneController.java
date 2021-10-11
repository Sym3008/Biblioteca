package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.service.ConsegneService;
import it.biblioteca.www.Biblioteca.service.LibriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

@CrossOrigin
@RestController
@RequestMapping
public class ConsegneController {

    @Autowired
    private ConsegneService consegneService;

    @Autowired
    private LibriService libriService;

    @GetMapping("/get-consegne")
    public List<Consegne> getConsegne(){
        return consegneService.getConsegne();
    }

    @GetMapping("/get-consegna/{id}")
    public Consegne getConsegnaById(@PathVariable("id") Integer id){
        return consegneService.getConsegnaById(id);
    }

    @GetMapping("/get-consegne-libro/{id}")
    public List<Consegne> getConsegnaByIdLibro(@PathVariable("id") Integer id){
        return consegneService.getConsegneByIdLibro(id);
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
    public String updateConsegne(@RequestBody @NotNull List<Consegne> consegne){
        List<Consegne> listaCons=new ArrayList<>();
        String risposta= "";
        Boolean prenotabile=true;
        for (int i=0; i<consegne.size(); i++){
            int qnt = consegne.get(i).getLibro().getQuantita();
            if (qnt<1){
                risposta=risposta+" - " +consegne.get(i).getLibro().getTitolo();
                int indxLibro = consegne.get(i).getLibro().getIdLibro();
                for (int y=0;y<consegneService.getConsegneByIdLibro(indxLibro).size();y++){
                    LocalDate prenotato= consegneService.getConsegneByIdLibro(indxLibro).get(y).getDataConsegna();
                    LocalDate consegna = consegneService.getConsegneByIdLibro(indxLibro).get(y).getDataRestituzione();
                    System.out.println(prenotato);
                    System.out.println(consegna);
                    LocalDate dataPrenotazioneIn = consegne.get(i).getDataConsegna();
                    LocalDate dataConsegnaIn = consegne.get(i).getDataRestituzione();
                    System.out.println(dataPrenotazioneIn);
                    System.out.println(dataConsegnaIn);


                    if (dataConsegnaIn.isBefore(prenotato) || dataPrenotazioneIn.isAfter(consegna)){
                        prenotabile=true;
                    }else{
                        prenotabile=false;
                        risposta=risposta+" _ data occupata!";
                        break;
                    }
                }
            }
            if (qnt>0 && prenotabile){
                consegne.get(i).getLibro().setQuantita(qnt-1);
                libriService.saveOrUpdateLibri(consegne.get(i).getLibro());
                listaCons.add(consegne.get(i));
            }

        }
        if (listaCons.size()>0) {
            consegneService.updateConsegne(listaCons);
        }
        return risposta;
    }

    @DeleteMapping("/cancella-consegne")
    public void deleteConsegne(@RequestBody @NotNull List<Consegne> consegne){
        consegneService.deleteConsegne(consegne);
    }

    @DeleteMapping("/cancella-consegna/{id}")
    public void deleteConsegnaById(@PathVariable("id") Integer id){
        int qnt = consegneService.getConsegnaById(id).getLibro().getQuantita();
        if (consegneService.getConsegnaById(id).getDataConsegna()!=null) {
            consegneService.getConsegnaById(id).getLibro().setQuantita(qnt + 1);
            libriService.saveOrUpdateLibri(consegneService.getConsegnaById(id).getLibro());
        }
        consegneService.deleteConsegnaById(id);
    }
}
