package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
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

    @Temporal(TemporalType.DATE)
    @Column(name = "data_consegna")
    private Date dataConsegna;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_restituzione")
    private Date dataRestituzione;

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
