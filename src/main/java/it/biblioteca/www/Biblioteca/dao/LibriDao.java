package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.model.Libri;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class LibriDao {

    @Autowired
    private EntityManager entityManager;

    public List<Libri> getLibri(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Libri", Libri.class).getResultList();
    }

    public Libri getLibroById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Libri.class, id);
    }

    public void saveOrUpdateLibri (List<Libri> libri){
        Session currentSession = entityManager.unwrap(Session.class);
        Session updateSession = entityManager.unwrap(Session.class);
        for (Libri l: libri){
            for (Consegne c: l.getConsegneList()){
                c.setLibriList(libri);
                updateSession.save(c);
            }
            currentSession.saveOrUpdate(l);
        }
    }

    public void deleteLibri(List<Libri> libri){
        Session currentSession = entityManager.unwrap(Session.class);
        for (Libri l: libri){
            currentSession.delete(currentSession.find(Libri.class, l.getIdLibro()));
        }
    }

    public void deleteLibroById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Libri.class, id));
    }
}
