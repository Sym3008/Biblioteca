package it.biblioteca.www.Biblioteca.dao;

import it.biblioteca.www.Biblioteca.model.CaseEditrici;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CaseEditriciDao {

    @Autowired
    private EntityManager entityManager;

    public List<CaseEditrici> getCaseEditrici(){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.createQuery("FROM CaseEditrici", CaseEditrici.class).getResultList();
    }

    public CaseEditrici getCasaEditriceById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.find(CaseEditrici.class, id);
    }

    public void saveOrUpdateCaseEditrici(List<CaseEditrici> caseEditrici){
        Session currentSession = entityManager.unwrap(Session.class);
        for (CaseEditrici c: caseEditrici){
            currentSession.saveOrUpdate(c);
        }
    }

    public void deleteCaseEditrici(List<CaseEditrici> caseEditrici){
        Session currentSession = entityManager.unwrap(Session.class);
        for(CaseEditrici c: caseEditrici){
            currentSession.delete(currentSession.find(CaseEditrici.class, c.getIdCasaEditrice()));
        }
    }

    public void deleteCasaEditriceById(Integer id){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.delete(currentSession.find(CaseEditrici.class, id));
    }
}
