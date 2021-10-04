package it.biblioteca.www.Biblioteca.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table (name="case_editrici")
public class CaseEditrici {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_casa_editrice")
    private Integer idCasaEditrice;

    @Column(name="nominativo")
    private String nominativo;

    @Column(name="citta")
    private String citta;

    @Column(name="cap")
    private String cap;

    @Column(name="indirizzo")
    private String indirizzo;

    @Column(name="telefono")
    private String telefono;

    @Column(name="email")
    private String email;

    @Column(name="sito_web")
    private String sitoWeb;

    @OneToMany (mappedBy = "casaEditrice")
    private List<Libri> libri;
}
