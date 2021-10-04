package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Scaffali;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ScaffaliDao {

    @Autowired
    private EntityManager entityManager;

    public List<Scaffali> getScaffali(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Scaffali", Scaffali.class).getResultList();
    }

    public Scaffali getScaffaleById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Scaffali.class, id);
    }

    public void saveOrUpdateScaffali(List<Scaffali> scaffali){
        Session currentSession = entityManager.unwrap(Session.class);
        for (Scaffali s: scaffali){
            currentSession.saveOrUpdate(s);
        }
    }

    public void deleteScaffali(List<Scaffali> scaffali){
        Session currentSession = entityManager.unwrap(Session.class);
        for(Scaffali s: scaffali){
            currentSession.delete(currentSession.find(Scaffali.class, s.getIdScaffale()));
        }
    }

    public void deleteScaffaleById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Scaffali.class, id));
    }
}
