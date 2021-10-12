package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@Table (name="consegne")
public class Consegne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_consegna")
    private Integer idConsegna;

    @Column(name="descrizione")
    private String descrizione;

    @JoinColumn(name = "id_anagrafica")
    @ManyToOne
    @JsonIgnoreProperties("consegne")
    private Anagrafiche anagrafica;

    @Column(name = "data_consegna")
    private LocalDate dataConsegna;

    @Column(name = "data_restituzione")
    private LocalDate dataRestituzione;

    @JoinColumn(name = "id_libro")
    @ManyToOne
    @JsonIgnoreProperties("consegne")
    private Libri libro;

//    @ManyToMany(targetEntity = Libri.class)
//    @JoinTable(name = "libri_consegnati",
//            joinColumns = @JoinColumn(name="id_consegna"),
//            inverseJoinColumns = @JoinColumn(name="id_libro"))
//    @JsonIgnoreProperties("consegneList")
//    private List<Libri> libriList;
}
