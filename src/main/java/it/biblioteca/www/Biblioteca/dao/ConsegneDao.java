package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.Anagrafiche;
import it.biblioteca.www.Biblioteca.model.Consegne;
import it.biblioteca.www.Biblioteca.model.Libri;
import org.hibernate.Session;
import org.hibernate.query.Query;
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

    public List<Consegne> getConesgneByIdLibro(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Consegne> query=currentSession.createQuery("FROM Consegne WHERE libro.idLibro = "+id+" AND dataConsegna IS NOT NULL ", Consegne.class);
        return query.getResultList();
    }

    public List<Consegne> getConesgneByIdAnagrafica(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Consegne> query=currentSession.createQuery("FROM Consegne WHERE anagrafica.idAnagrafica = "+id, Consegne.class);
        return query.getResultList();
    }

    public List<Consegne> getConesgneInAttesaByIdAnagrafica(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
//        SELECT * FROM `consegne` WHERE `id_anagrafica`= '2' AND `data_consegna` IS NULL;
        Query<Consegne> query=currentSession.createQuery("FROM Consegne WHERE anagrafica.idAnagrafica = "+id+" AND dataConsegna IS NULL", Consegne.class);
        return query.getResultList();
    }

    public List<Consegne> getConesgneOrdinatiByIdAnagrafica(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Consegne> query=currentSession.createQuery("FROM Consegne WHERE anagrafica.idAnagrafica = "+id+" AND dataConsegna IS NOT NULL", Consegne.class);
        return query.getResultList();
    }

    public void saveConsegne(Consegne consegna){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(consegna);
    }

    public void updateConsegne(List<Consegne> consegne){
        Session currentSession = entityManager.unwrap(Session.class);
        for (Consegne c : consegne) {
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

