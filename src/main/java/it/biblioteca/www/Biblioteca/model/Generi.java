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
@Table(name="generi")
public class Generi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_genere")
    private Integer idGenere;

    @Column(name="descrizione")
    private String descrizione;

    @OneToMany(mappedBy = "genere",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
