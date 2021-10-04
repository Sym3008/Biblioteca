package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.GeneriDao;
import it.biblioteca.www.Biblioteca.model.Generi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class GeneriService {

    @Autowired
    private GeneriDao generiDao;

    public List<Generi> getGeneri(){
        return generiDao.getGeneri();
    }
    public Generi getGenereById(Integer id){
        return generiDao.getGenereById(id);
    }
    public void saveOrUpdateGeneri(List<Generi> generi){
        generiDao.saveOrUpdateGeneri(generi);
    }
    public void deleteGeneri(List<Generi> generi){
        generiDao.deleteGeneri(generi);
    }
    public void deleteGenereById(Integer id){
        generiDao.deleteGenereById(id);
    }
}
