package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table (name="case_editrici")
public class CaseEditrici {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @OneToMany (mappedBy = "casaEditrice",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
