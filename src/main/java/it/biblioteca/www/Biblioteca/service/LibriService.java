package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.LibriDao;
import it.biblioteca.www.Biblioteca.model.Libri;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LibriService {

    @Autowired
    private LibriDao libriDao;

    public List<Libri> getLibri(){
        return libriDao.getLibri();
    }
    public Libri getLibroById(Integer id){
        return libriDao.getLibroById(id);
    }
    public void saveOrUpdateLibri(Libri libro){
        libriDao.saveOrUpdateLibri(libro);
    }
    public void deleteLibri(List<Libri> libri){
        libriDao.deleteLibri(libri);
    }
    public void deleteLibroById(Integer id){
        libriDao.deleteLibroById(id);
    }
}
