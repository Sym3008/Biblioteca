package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table (name= "ripiani")
public class Ripiani {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)  //lascia gestire l'autoincrement della primary key al DB
    @Column(name = "id_ripiano")
    private Integer idRipiano;

    @Column(name = "descrizione")
    private String descrizione;

    @OneToMany (mappedBy = "ripiano",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
