package it.biblioteca.www.Biblioteca.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table (name= "ripiano")
public class Ripiani {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)  //lascia gestire l'autoincrement della primary key al DB
    @Column(name = "id_ripiano")
    private Integer idRipiano;

    @Column(name = "descrizione")
    private String descrizione;

    @OneToMany (mappedBy = "ripiano",fetch = FetchType.EAGER)
    private List<Libri> libri;
}
