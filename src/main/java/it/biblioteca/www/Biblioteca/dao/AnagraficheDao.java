package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class AnagraficheDao {

    @Autowired
    private EntityManager entityManager;

    public List<Anagrafiche> getAnagrafiche(){
        System.out.println("richiesta get-anagrafica -> "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Anagrafiche", Anagrafiche.class).getResultList();
    }

    public Anagrafiche getAnagraficaById(Integer id){
        System.out.println("richiesta get-anagrafica by id -> "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Anagrafiche.class, id);
    }

    public void saveOrUpdateAnagrafiche(Anagrafiche anagrafiche){
        System.out.println("richiesta save or update anagrafica -> "+ anagrafiche.getNome());
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(anagrafiche);
    }

    public void  deleteAnagrafiche(List<Anagrafiche> anagrafiche){
        Session currentSession = entityManager.unwrap(Session.class);
        for(Anagrafiche a: anagrafiche){
            currentSession.delete(currentSession.find(Anagrafiche.class, a.getIdAnagrafica()));
        }
    }

    public void deleteAnagraficaById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Anagrafiche.class, id));
    }
}
