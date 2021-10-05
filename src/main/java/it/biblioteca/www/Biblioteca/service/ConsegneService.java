package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.ConsegneDao;
import it.biblioteca.www.Biblioteca.model.Consegne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ConsegneService {

    @Autowired
    private ConsegneDao consegneDao;

    public List<Consegne> getConsegne(){
        return consegneDao.getConesgne();
    }
    public Consegne getConsegnaById(Integer id){
        return consegneDao.getConsegnaById(id);
    }
    public void saveOrUpdateConsegne(List<Consegne> consegne){
        consegneDao.saveOrUpdateConsegne(consegne);
    }
    public void deleteConsegne(List<Consegne> consegne){
        consegneDao.deleteConsegne(consegne);
    }
    public void deleteConsegnaById(Integer id){
        consegneDao.deleteConsegnaById(id);
    }
}