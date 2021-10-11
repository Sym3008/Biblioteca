package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.model.Libri;
import it.biblioteca.www.Biblioteca.service.ConsegneService;
import it.biblioteca.www.Biblioteca.service.LibriService;
import org.apache.tomcat.jni.Local;
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
    private LibriService lService;

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
        String risposta="";
        List<Consegne> consegneList = new ArrayList<Consegne>();
        for (Consegne c: consegne){
            Libri lDaPrestare=c.getLibro();
            System.out.println("Libro da prestare -> "+lDaPrestare);
            int idxL=lDaPrestare.getIdLibro();
            System.out.println("Libro idx-> "+idxL);
            int giacenza=lDaPrestare.getQuantita();
            System.out.println("Libro qnt -> "+giacenza);
            LocalDate dCpresunta= c.getDataConsegna();
            System.out.println("Data inmmessa HTML -> "+dCpresunta);
            LocalDate dRpresunta= dCpresunta.plusDays(30);
            c.setDataRestituzione(dRpresunta);
            System.out.println("Data calcolata  -> "+dRpresunta);

            if (giacenza>0){
                System.out.println("qnt > 0");
                giacenza--;
                lDaPrestare.setQuantita(giacenza);
                lService.saveOrUpdateLibri(lDaPrestare);
                consegneList.add(c);
                System.out.println("size list "+consegneList.size());
            }else{
                System.out.println("qnt NEGATIVA");
                List<Consegne> lPrenotati = getConsegnaByIdLibro(idxL);
                for(Consegne cXl: lPrenotati){
                    System.out.println(cXl);
                }
                System.out.println(lPrenotati);
                for (Consegne cLprenotati :lPrenotati){
                    LocalDate dCpren=cLprenotati.getDataConsegna();
                    LocalDate dRpren=cLprenotati.getDataRestituzione();
                    System.out.println("data da db -> "+ dCpren+" / "+dRpren);
                    if ((dRpresunta.isBefore(dCpren) && dRpresunta.isAfter(dRpren))||(dCpresunta.isBefore(dRpren) && dCpresunta.isAfter(dCpren))){
                        risposta=risposta+"\n"+cLprenotati.getLibro().getTitolo()+" non prenotabile";
                        System.out.println(risposta);
                        break;
                    }else{
                        System.out.println("prenotabile");
                        giacenza--;
                        lDaPrestare.setQuantita(giacenza);
                        lService.saveOrUpdateLibri(lDaPrestare);
                        consegneList.add(c);
                        System.out.println("size list "+consegneList.size());
                    }
                }
            }
        }
        System.out.println(consegneList);
        System.out.println(consegneList.size());
        if (consegneList.size()>0){
            consegneService.updateConsegne(consegneList);
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
            lService.saveOrUpdateLibri(consegneService.getConsegnaById(id).getLibro());
        }
        consegneService.deleteConsegnaById(id);
    }
}
