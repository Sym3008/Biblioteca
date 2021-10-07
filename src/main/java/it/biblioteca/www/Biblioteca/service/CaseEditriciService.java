package it.biblioteca.www.Biblioteca.service;

import it.biblioteca.www.Biblioteca.dao.CaseEditriciDao;
import it.biblioteca.www.Biblioteca.model.CaseEditrici;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CaseEditriciService {

    @Autowired
    private CaseEditriciDao caseEditriciDao;

    public List<CaseEditrici> getCaseEditrici(){
        return caseEditriciDao.getCaseEditrici();
    }
    public CaseEditrici getCasaEditriceById(Integer id){
        return caseEditriciDao.getCasaEditriceById(id);
    }
    public void saveOrUpdateCaseEditrici(CaseEditrici caseEditrici){
        caseEditriciDao.saveOrUpdateCaseEditrici(caseEditrici);
    }
    public void deleteCaseEditrici(List<CaseEditrici> caseEditrici){
        caseEditriciDao.deleteCaseEditrici(caseEditrici);
    }
    public void deleteCasaEditricieById(Integer id){
        caseEditriciDao.deleteCasaEditriceById(id);
    }
}
