let host="localhost"

window.addEventListener('load', function (event) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idAnagraficaPassato = urlParams.get('idAn')
    console.log(idAnagraficaPassato)

    let lH = document.querySelector('#lHome')
    lH.href="Index.html?idAn="+idAnagraficaPassato

    let lgn = document.querySelector("#lgn")
    if (idAnagraficaPassato>0){
        lgn.innerHTML=""

        let m=document.querySelector('#menu')
        let carSpan=document.createElement("span");
        carSpan.classList.add("mScelta")
        carSpan.classList.add("px-5")
        let aSpan=document.createElement("a")
        aSpan.href="show/CarrelloShow.html?idAn="+idAnagraficaPassato;
        aSpan.innerHTML="Prenotazioni"
        carSpan.appendChild(aSpan)
        m.appendChild(carSpan)
    }

    if (idAnagraficaPassato>0) {
        aggiornaDati(idAnagraficaPassato)
        btnReg= document.querySelector('#Registrati')
        btnReg.innerHTML="Aggiorna"
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

        let passWord = document.querySelector('#Password');
        let passWordC = document.querySelector('#Conferma-Password');
        if (passWord.value === "" || passWord.value !== passWordC.value) {
            console.log("Errore re-inserisci correttamente la tua password!");
            formValido = false;
            InErr(passWord, "Password");
        } else {
            console.log("Le password corrispondono!");
            TogErr(passWord);
        }

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
            inserisciRecord(idAnagraficaPassato);
            event.preventDefault();
        }
    })
})
function aggiornaDati(idAnagraficaPassato)
{
    let n = document.querySelector('#Nome');
    let c = document.querySelector('#Cognome');
    let dN = document.querySelector('#DataNascita');
    let i = document.querySelector('#Indirizzo');
    let cap = document.querySelector('#Cap');
    let loc = document.querySelector('#Località');
    let provincia = document.querySelector('#Provincia');
    let tel = document.querySelector('#Telefono');
    let cf = document.querySelector('#CodiceFiscale');
    let e = document.querySelector('#Email');
    let p = document.querySelector('#Password');
    let pc = document.querySelector('#Conferma-Password');
    let url = "http://"+host+":8080/api/get-anagrafica/" + idAnagraficaPassato
    fetch(url, {
        method: "GET"
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        n.value = data.nome;
        c.value = data.cognome;
        dN.value = data.dataNascita;
        i.value = data.indirizzo;
        cap.value = data.cap;
        loc.value = data.localita;
        provincia.value = data.provincia.toLowerCase();
        tel.value = data.telefonoCellulare;
        cf.value = data.codiceFiscale;
        e.value = data.email;
        p.value = data.password;
        pc.value = data.password;
    })

}

function inserisciRecord(idAnagraficaPassato) {
    let n = document.querySelector('#Nome');
    let c = document.querySelector('#Cognome');
    let dN = document.querySelector('#DataNascita');
    let i = document.querySelector('#Indirizzo');
    let cap = document.querySelector('#Cap');
    let loc = document.querySelector('#Località');
    let provincia = document.querySelector('#Provincia');
    let tel = document.querySelector('#Telefono');
    let cf = document.querySelector('#CodiceFiscale');
    let e = document.querySelector('#Email');
    let p = document.querySelector('#Password');
    let newRecord;

    let prov = provincia.value.toUpperCase();

    newRecord = {
        idAnagrafica: idAnagraficaPassato,
        nome: n.value,
        cognome: c.value,
        dataNascita: dN.value,
        indirizzo: i.value,
        cap: cap.value,
        localita: loc.value,
        provincia: prov,
        telefonoCellulare: tel.value,
        codiceFiscale: cf.value,
        email: e.value,
        password: p.value
    };

    if (idAnagraficaPassato >0) {

        let urlApi = "http://"+host+":8080/api/update-anagrafiche";

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
            alert("Anagrafica inserita correttamente")
            alert("Ti è stata inviata una mail per la registrazione\n-> "+e.value)
            // return response.json()
        }).then(data => {
            console.log('Success:', data);
            // close();
            open("Index.html?idAn="+idAnagraficaPassato)
        });
    }else {

        let urlApi = "http://"+host+":8080/api/save-anagrafiche";

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
            return response.text()
        }).then(data => {
            console.log(data)
            if(data==="") {
                console.log("record inserito");
                alert("Anagrafica inserita correttamente")
                alert("Ti è stata inviata una mail per la registrazione\n-> "+e.value)
                // close();
                open("Index.html")
            }else{
                alert("Errore" +data)
            }
        });
    }
}