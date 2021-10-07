package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Autori;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class AutoriDao {

    @Autowired
    private EntityManager entityManager;

    public List<Autori> getAutori(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Autori", Autori.class).getResultList();
    }

    public Autori getAutoreById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Autori.class, id);
    }

    public void saveOrUpdateAutori(Autori autori){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(autori);
    }

    public void deleteAutori(List<Autori> autori){
        Session currentSession = entityManager.unwrap(Session.class);
        for(Autori a: autori){
            currentSession.delete(currentSession.find(Autori.class, a.getIdAutore()));
        }
    }

    public void deleteAutoreById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Autori.class, id));
    }

}
