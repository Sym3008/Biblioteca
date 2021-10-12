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
@Table (name="Scaffali")
public class Scaffali {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_scaffale")
    private Integer idScaffale;

    @Column(name="descrizione")
    private String descrizione;

    @OneToMany (mappedBy = "scaffale",fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Libri> libri;
}
