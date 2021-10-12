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
@Table (name= "ripiani")
public class Ripiani {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ripiano")
    private Integer idRipiano;

    @Column(name = "descrizione")
    private String descrizione;

    @OneToMany (mappedBy = "ripiano",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
