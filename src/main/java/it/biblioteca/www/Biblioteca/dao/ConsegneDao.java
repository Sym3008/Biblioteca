package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.model.Libri;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ConsegneDao {

    @Autowired
    private EntityManager entityManager;

    public List<Consegne> getConesgne(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Consegne", Consegne.class).getResultList();
    }

    public Consegne getConsegnaById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Consegne.class, id);
    }

    public void saveOrUpdateConsegne(List<Consegne> consegne){
        Session currentSession = entityManager.unwrap(Session.class);
        Session updateSession = entityManager.unwrap(Session.class);
        for (Consegne c: consegne){
            for(Libri l: c.getLibriList()){
                l.setConsegneList(consegne);
                updateSession.saveOrUpdate(l);
            }
            currentSession.saveOrUpdate(c);
        }
    }

    public void deleteConsegne(List<Consegne> consegne){
        Session currentSession = entityManager.unwrap(Session.class);
        for(Consegne c: consegne){
            currentSession.delete(currentSession.find(Consegne.class, c.getIdConsegna()));
        }
    }

    public void deleteConsegnaById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Consegne.class, id));
    }
}

