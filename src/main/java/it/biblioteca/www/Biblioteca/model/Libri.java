package it.biblioteca.www.Biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table (name = "libri")
public class Libri {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id_libro")
    private Integer idLibro;

    @Column(name = "titolo")
    private String titolo;

    @JoinColumn(name = "id_autore")
    @ManyToOne
    @JsonIgnoreProperties("libri")
    private Autori autore;

    @Column(name = "prefazione")
    private String prefazione;

    @JoinColumn(name = "id_casa_editrice")
    @ManyToOne
    @JsonIgnoreProperties("libri")
    private CaseEditrici casaEditrice;

    @JoinColumn(name = "id_genere")
    @ManyToOne
    @JsonIgnoreProperties("libri")
    private Generi genere;

    @Column(name = "isbn")
    private Integer isbn;

    @Column(name = "numero_pagine")
    private Integer numeroPagine;

    @Column(name = "lingua")
    private String lingua;

    @Column(name = "quantita")
    private Integer quantita;

    @Column(name = "url_copertina")
    private String urlCopertina;

    @JoinColumn(name = "id_scaffale")
    @ManyToOne
    @JsonIgnoreProperties("libri")
    private Scaffali scaffale;

    @JoinColumn(name = "id_ripiano")
    @ManyToOne
    @JsonIgnoreProperties("libri")
    private Ripiani ripiano;

    @OneToMany(mappedBy = "libro")
    @JsonIgnore
    private List<Consegne> consegneList;

//    @ManyToMany(mappedBy = "libriList", targetEntity = Consegne.class)
//    @JsonIgnoreProperties("libriList")
//    private List<Consegne> consegneList;
}
