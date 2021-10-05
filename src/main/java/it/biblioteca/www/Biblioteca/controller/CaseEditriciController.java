package it.biblioteca.www.Biblioteca.controller;

import com.sun.istack.NotNull;
import it.biblioteca.www.Biblioteca.model.CaseEditrici;
import it.biblioteca.www.Biblioteca.service.CaseEditriciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class CaseEditriciController {

    @Autowired
    private CaseEditriciService caseEditriciService;

    @GetMapping("/get-case-editrici")
    public List<CaseEditrici> getCaseEditrici(){
        return caseEditriciService.getCaseEditrici();
    }

    @GetMapping("/get-casa-editrice/{id}")
    public CaseEditrici getCasaEditriceById(@PathVariable("id") Integer id){
        return caseEditriciService.getCasaEditriceById(id);
    }

    @PostMapping("/save-case-editrici")
    public void saveCaseEditrici(@RequestBody @NotNull List<CaseEditrici> caseEditrici){
        caseEditriciService.saveOrUpdateCaseEditrici(caseEditrici);
    }

    @PutMapping("/update-case-editrici")
    public void updateCaseEditrici(@RequestBody @NotNull List<CaseEditrici> caseEditrici){
        caseEditriciService.saveOrUpdateCaseEditrici(caseEditrici);
    }

    @DeleteMapping("/cancella-case-editrici")
    public void deleteCaseEditrici(@RequestBody @NotNull List<CaseEditrici> caseEditrici){
        caseEditriciService.deleteCaseEditrici(caseEditrici);
    }

    @DeleteMapping("/cancella-casa-editrice/{id}")
    public void deleteCasaEditriceById(@PathVariable("id") Integer id){
        caseEditriciService.deleteCasaEditricieById(id);
    }
}
