package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Generi;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class GeneriDao {

    @Autowired
    private EntityManager entityManager;

    public List<Generi> getGeneri(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Generi", Generi.class).getResultList();
    }

    public Generi getGenereById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Generi.class, id);
    }

    public void saveOrUpdateGeneri(Generi generi){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(generi);
    }

    public void deleteGeneri(List<Generi> generi){
        Session currentSession = entityManager.unwrap(Session.class);
        for (Generi g: generi){
            currentSession.delete(currentSession.find(Generi.class, g.getIdGenere()));
        }
    }

    public void deleteGenereById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Generi.class, id));
    }
}
