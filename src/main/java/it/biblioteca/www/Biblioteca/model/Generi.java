package it.biblioteca.www.Biblioteca.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="Generi")
public class Generi {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_genere")
    private Integer idGenere;

    @Column(name="descrizione")
    private String descrisione;

    @OneToMany(mappedBy = "genere")
    private List<Libri> libri;
}
