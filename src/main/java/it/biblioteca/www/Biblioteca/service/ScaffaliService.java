package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.ScaffaliDao;
import it.biblioteca.www.Biblioteca.model.Scaffali;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ScaffaliService {

    @Autowired
    private ScaffaliDao scaffaliDao;

    public List<Scaffali> getScaffali(){
        return scaffaliDao.getScaffali();
    }
    public Scaffali getScaffaleById(Integer id){
        return scaffaliDao.getScaffaleById(id);
    }
    public void saveOrUpdateScaffali(List<Scaffali> scaffali){
        scaffaliDao.saveOrUpdateScaffali(scaffali);
    }
    public void deleteScaffali(List<Scaffali> scaffali){
        scaffaliDao.deleteScaffali(scaffali);
    }
    public void deleteScaffaleById(Integer id){
        scaffaliDao.deleteScaffaleById(id);
    }
}
