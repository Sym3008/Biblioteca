package it.biblioteca.www.Biblioteca.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table (name="anagrafiche")
public class Anagrafiche {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_anagrafica")
    private Integer idAnagrafica;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cognome")
    private String congome;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_nascita")
    private Date dataNascita;

    @Column(name = "indirizzo")
    private String indirizzo;

    @Column(name="cap")
    private String cap;

    @Column(name="localita")
    private String localita;

    @Column(name="provincia")
    private String provincia;

    @Column(name = "telefono_cellulare")
    private String telefonoCellulare;

    @Column(name="codice_fiscale")
    private String codiceFiscale;

    @Column(name="email")
    private String email;

    @OneToMany (mappedBy = "anagrafica")
    private List<Consegne> consegne;
}
