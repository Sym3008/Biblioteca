package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.AutoriDao;
import it.biblioteca.www.Biblioteca.model.Autori;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AutoriService {

    @Autowired
    private AutoriDao autoriDao;

    public List<Autori> getAutori(){
        return autoriDao.getAutori();
    }
    public Autori getAutoreById(Integer id){
        return autoriDao.getAutoreById(id);
    }
    public void saveOrUpdateAutori(Autori autori){
        autoriDao.saveOrUpdateAutori(autori);
    }
    public void deleteAutori(List<Autori> autori){
        autoriDao.deleteAutori(autori);
    }
    public void deleteAutoreById(Integer id){
        autoriDao.deleteAutoreById(id);
    }
}
