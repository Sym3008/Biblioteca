package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.model.Libri;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class LibriDao {

    @Autowired
    private EntityManager entityManager;

    public List<Libri> getLibri(){
        System.out.println("richiesta get-libri -> "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM Libri", Libri.class).getResultList();
    }

    public Libri getLibroById(Integer id){
        System.out.println("richiesta get-libro -> "+id+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(Libri.class, id);
    }

    public List<Libri> getLibroByTitolo(String titolo){
        System.out.println("richiesta get-libro -> "+titolo+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
//        SELECT * FROM `libri` WHERE titolo LIKE "%potter%";\
        String sql="FROM Libri WHERE titolo LIKE '%"+titolo+"%'";
        Query<Libri> query = currentSession.createQuery(sql, Libri.class);

        return query.getResultList();
    }

    public List<Libri> getLibroByIdGenere(Integer id){
        System.out.println("richiesta get-libro by genere -> "+id+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        String sql="FROM Libri WHERE genere.idGenere = "+id;
        Query<Libri> query = currentSession.createQuery(sql, Libri.class);
        return query.getResultList();
    }

    public List<Libri> getLibroByIdAutore(Integer id){
        System.out.println("richiesta get-libro by autore -> "+id+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        String sql="FROM Libri WHERE autore.idAutore = "+id;
        Query<Libri> query = currentSession.createQuery(sql, Libri.class);
        return query.getResultList();
    }

    public void saveOrUpdateLibri (Libri libro){
        System.out.println("richiesta save or update -libro -> "+libro.getTitolo()+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(libro);
    }

    public void deleteLibri(List<Libri> libri){
        System.out.println("richiesta delete-libro -> "+libri.size()+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        for (Libri l: libri){
            currentSession.delete(currentSession.find(Libri.class, l.getIdLibro()));
        }
    }

    public void deleteLibroById(Integer id){
        System.out.println("richiesta get-libro by id -> "+id+" - "+ LocalDateTime.now());
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(Libri.class, id));
    }
}
