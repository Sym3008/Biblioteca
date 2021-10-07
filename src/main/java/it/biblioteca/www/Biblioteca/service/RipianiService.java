package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.RipianiDao;
import it.biblioteca.www.Biblioteca.model.Ripiani;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RipianiService {

    @Autowired
    private RipianiDao ripianiDao;

    public List<Ripiani> getRipiani(){
        return ripianiDao.getRipiani();
    }
    public Ripiani getRipianoById(Integer id){
        return ripianiDao.getRipianoById(id);
    }
    public void saveOrUpdateRipiani(Ripiani ripiani){
        ripianiDao.saveOrUpdateRipiani(ripiani);
    }
    public void deleteRipiani (List<Ripiani> ripiani){
        ripianiDao.deleteRipiani(ripiani);
    }
    public void deleteRipianoById(Integer id){
        ripianiDao.deleteRipianoById(id);
    }
}
