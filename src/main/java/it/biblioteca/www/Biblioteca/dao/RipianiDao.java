package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Ripiani;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class RipianiDao {

    @Autowired
    private EntityManager entityManager;

    public List<Ripiani> getRipiani(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Ripiani", Ripiani.class).getResultList();
    }

    public Ripiani getRipianoById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Ripiani.class, id);
    }

    public void saveOrUpdateRipiani(List<Ripiani> ripiani){
        Session currentSession = entityManager.unwrap(Session.class);
        for (Ripiani r: ripiani){
            currentSession.saveOrUpdate(r);
        }
    }

    public void deleteRipiani(List<Ripiani> ripiani){
        Session currentSession = entityManager.unwrap(Session.class);
        for (Ripiani r: ripiani){
            currentSession.delete(currentSession.find(Ripiani.class, r.getIdRipiano()));
        }
    }

    public void deleteRipianoById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Ripiani.class, id));
    }
}
