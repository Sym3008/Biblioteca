package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table (name="Scaffali")
public class Scaffali {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_scaffale")
    private Integer idScaffale;

    @Column(name="descrizione")
    private String descrizione;

    @OneToMany (mappedBy = "scaffale",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
