package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.AnagraficheDao;
import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AnagraficheService {

    @Autowired
    private AnagraficheDao anagraficheDao;

    public List<Anagrafiche> getAnagrafiche(){
        return anagraficheDao.getAnagrafiche();
    }
    public Anagrafiche getAnagraficaById(Integer id){
        return anagraficheDao.getAnagraficaById(id);
    }
    public void saveOrUpdateAnagrafiche(Anagrafiche anagrafiche){
        anagraficheDao.saveOrUpdateAnagrafiche(anagrafiche);
    }
    public void deleteAnagrafiche(List<Anagrafiche> anagrafiche){
        anagraficheDao.deleteAnagrafiche(anagrafiche);
    }
    public void deleteAnagraficaById(Integer id){
        anagraficheDao.deleteAnagraficaById(id);
    }
}
