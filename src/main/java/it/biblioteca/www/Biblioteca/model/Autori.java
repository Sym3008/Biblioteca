package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table (name="autori")
public class Autori {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_autore")
    private Integer idAutore;

    @Column (name="nominativo")
    private String nominativo;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_nascita")
    private Date dataNascita;

    @Column (name="luogo_nascita")
    private String luogoNascita;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_morte")
    private Date dataMorte;

    @Column (name="luogo_morte")
    private String luogoMorte;

    @Column(name="biografia")
    private String biografia;

    @OneToMany (mappedBy = "autore",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
