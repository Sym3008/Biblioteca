let host="localhost"

window.addEventListener('load', function (event) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idLibropassato = urlParams.get('idLb');
    let idAnagraficaPassato = urlParams.get('idAn');

    let lH = document.querySelector('#lHome')
    lH.href="Index.html?idAn="+idAnagraficaPassato

    let lgn = document.querySelector("#lgn")
    if (idAnagraficaPassato>0){
        lgn.innerHTML=""
        let a = document.createElement("a")
        a.href="../Registrazione.html?idAn="+idAnagraficaPassato
        let url= "http://"+host+":8080/api/get-anagrafica/"+idAnagraficaPassato
        fetch(url,
            {
                method: "GET"
            }).then(function (response) {
            // console.log(response)
            return response.json()
        }).then(function (data) {
            a.innerHTML = "Benvenuto\n" +data.nome+"\n clicca per modificare i tuoi dati"
            lgn.appendChild(a);

            let m=document.querySelector('#menu')
            let carSpan=document.createElement("span");
            carSpan.classList.add("mScelta")
            carSpan.classList.add("px-5")
            let aSpan=document.createElement("a")
            aSpan.href="show/CarrelloShow.html?idAn="+idAnagraficaPassato;
            aSpan.innerHTML="Prenotazioni"
            carSpan.appendChild(aSpan)
            m.appendChild(carSpan)
        })
    }

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")
    let urlApi
    link.addEventListener("click", function (e) {

        urlApi = "show/LibriShow.html?titolo=" + name.value+"&idAn="+idAnagraficaPassato;
        if (autor.value!==""){
            urlApi = "show/AutoriShow.html?nominativo=" + autor.value+"&idAn="+idAnagraficaPassato;

        }else if (casa_editrice.value!==""){
            urlApi = "show/CaseEditriciShow.html?nominativo=" + casa_editrice.value+"&idAn="+idAnagraficaPassato;

        }
        close();
        open(urlApi);
    })

    if (idLibropassato === "" || idLibropassato === null || idLibropassato === "null") {

    } else {
        riempiCampi(idLibropassato)
    }
    let form = document.querySelector('#registrationForm')
    form.addEventListener('submit', function (event) {
        formValido = true;
        text = document.querySelectorAll('.textInput.richiesto');
        text.forEach(function (elT, ind, ar) {
            if (elT.value === "") {
                console.log("-> " + elT.id + " = NON E' PRESENTE!!");
                formValido = false;
                InErr(elT, elT.id);
            } else {
                console.log("-> " + elT.id + " = " + elT.value);
                TogErr(elT);
            }
        })

        function InErr(elemento, text) {
            if (elemento !== null) {
                let mess = elemento.closest('.boxIn').querySelector('.messErr');
                mess.innerHTML = "---" + text + " obbligatorio---";

            }
        }

        function TogErr(elemento) {
            if (elemento !== null) {
                let mess = elemento.closest('.boxIn').querySelector('.messErr');
                mess.innerHTML = "";
            }
        }

        if (formValido === false) {
            console.log("ERRORE!!!");
            event.preventDefault();
        } else {
            inserisciRecord(idLibropassato);
        }
    })
})

function inserisciRecord(idLibropassato) {
    let t = document.querySelector('#Titolo');
    let iA = document.querySelector('#Autore');
    let p = document.querySelector('#Prefazione');
    let iCE = document.querySelector('#Casa-editrice');
    let iG = document.querySelector('#Genere');
    let isbn = document.querySelector('#ISBN');
    let nP = document.querySelector('#Numero-pagine');
    let lan = document.querySelector('#lingua');
    let qnt = document.querySelector('#Quantit??');
    let urlc = document.querySelector('#URLC');
    let scaf = document.querySelector('#Scaffale');
    let rip = document.querySelector('#Ripiano');

    let newRecord;

    fetch("http://"+host+":8080/api/get-autore/" + iA.value, {
        method: "Get"
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        let autore = data
        fetch("http://"+host+":8080/api/get-genere/" + iG.value, {
            method: "Get"
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            let genere = data
            fetch("http://"+host+":8080/api/get-casa-editrice/" + iCE.value, {
                method: "Get"
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                let casaEditrice = data
                fetch("http://"+host+":8080/api/get-scaffali/" + scaf.value, {
                    method: "Get"
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    let scaffale = data
                    fetch("http://"+host+":8080/api/get-ripiano/" + rip.value, {
                        method: "Get"
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        let ripiano = data

                        newRecord = {
                            idLibro: idLibropassato,
                            titolo: t.value,
                            autore: autore,
                            prefazione: p.value,
                            genere: genere,
                            casaEditrice:casaEditrice,
                            isbn: isbn.value,
                            numeroPagine: nP.value,
                            lingua: lan.value,
                            quantita: qnt.value,
                            urlCopertina: urlc.value,
                            scaffale: scaffale,
                            ripiano: ripiano
                        };
                        console.log(newRecord)

                        if (idLibropassato === "" || idLibropassato === "null" || idLibropassato === null) {
                            let urlApi = "http://"+host+":8080/api/save-libri";
                            fetch(urlApi, {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    "Accept": "*/*",
                                    "Accept-Encoding": "gzip,deflate,br",
                                    "Connection": "keep-live"
                                },
                                body: JSON.stringify(newRecord),
                            }).then(function (response) {
                                console.log("record inserito");
                                alert("Libro inserito correttamente")
                                // return response.json()
                            }).then(data => {
                                console.log('Success:', data);
                            });
                        } else {
                            let urlApi = "http://"+host+":8080/api/update-libri";
                            fetch(urlApi, {
                                method: "PUT",
                                headers: {
                                    "content-type": "application/json",
                                    "Accept": "*/*",
                                    "Accept-Encoding": "gzip,deflate,br",
                                    "Connection": "keep-live"
                                },
                                body: JSON.stringify(newRecord),
                            }).then(function (response) {
                                console.log("record inserito");
                                alert("Libro inserito correttamente")
                                // return response.json()
                            }).then(data => {
                                console.log('Success:', data);
                            });
                        }
                    })
                })
            })
        })
    })


}

function riempiCampi(idLb) {
    let t = document.querySelector('#Titolo');
    let iA = document.querySelector('#Autore');
    let p = document.querySelector('#Prefazione');
    let iCE = document.querySelector('#Casa-editrice');
    let iG = document.querySelector('#Genere');
    let isbn = document.querySelector('#ISBN');
    let nP = document.querySelector('#Numero-pagine');
    let lan = document.querySelector('#lingua');
    let qnt = document.querySelector('#Quantit??');
    let urlc = document.querySelector('#URLC');
    let scaf = document.querySelector('#Scaffale');
    let rip = document.querySelector('#Ripiano');

    let url = "http://"+host+":8080/api/get-libro/" + idLb;
    fetch(url,
        {
            method: "GET"
        }).then(function (response) {
        return response.json()
    }).then(function (data) {
        t.value = data.titolo;
        iA.value = data.autore.idAutore;
        p.value = data.prefazione;
        iCE.value = data.casaEditrice.idCasaEditrice;
        iG.value = data.genere.idGenere;
        isbn.value = data.isbn;
        nP.value = data.numeroPagine;
        qnt.value = data.quantita;
        urlc.value = data.urlCopertina;
        scaf.value = data.scaffale.idScaffale;
        rip.value = data.ripiano.idRipiano;
        lan.value = data.lingua;

    })

}