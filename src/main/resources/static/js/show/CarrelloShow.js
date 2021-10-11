window.addEventListener("load", function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var idAnagraficaPassato = urlParams.get('idAn');

    let urlApi = "http://localhost:8080/api/get-consegne-inattesa-anagrafica/" + idAnagraficaPassato
    carica(urlApi)

    let ordinati = document.querySelector('#ordinati')
    let inAttesa = document.querySelector('#inattesa')
    let etichetta = document.querySelector('#etichetta')
    ordinati.addEventListener("click", function (e){
        inAttesa.classList.remove("nascondi")
        ordinati.classList.add("nascondi")
        etichetta.innerHTML="Lista libri ordinati"
        urlApi = "http://localhost:8080/api/get-consegne-ordinati-anagrafica/" + idAnagraficaPassato
        carica(urlApi)
    })

    inAttesa.addEventListener("click", function (e){
        ordinati.classList.remove("nascondi")
        inAttesa.classList.add("nascondi")
        etichetta.innerHTML="Lista libri in attesa di prenotazione"
        urlApi = "http://localhost:8080/api/get-consegne-inattesa-anagrafica/" + idAnagraficaPassato
        carica(urlApi)
    })

    let conferma = document.querySelector('#conferma')
    conferma.addEventListener("click", function (e) {

        let dataConsegnaIn = document.querySelector('#dataConsegnaIn')
        if (dataConsegnaIn.value != "") {
            let d = dataConsegnaIn.value.split('-')
            let anno = parseInt(d[0])
            let mese = "" + (parseInt(d[1]) + 1)
            let giorno = parseInt(d[2])
            if (mese > 12) {
                mese = 1;
                anno++;
            }
            let dataR = anno + "-" + mese + "-" + giorno
            let recordDaAggiornare=[];
            console.log(urlApi)
            console.log(dataConsegnaIn.value)
            console.log(dataR)
            fetch(urlApi,
                {
                    method: "GET"
                }).then(function (response){
                return response.json()
            }).then(function (data) {
                for(let i=0;i<data.length;i++) {
                    let record = {
                        idConsegna: data[i].idConsegna,
                        descrizione: data[i].descrizione,
                        anagrafica: data[i].anagrafica,
                        dataConsegna: dataConsegnaIn.value,
                        dataRestituzione: dataR,
                        libro: data[i].libro
                    }
                    recordDaAggiornare[i] = record;
                    console.log(recordDaAggiornare)
                    let urlPut= 'http://localhost:8080/api/update-consegne'
                    fetch(urlPut,{
                        method:'PUT',
                        headers:{
                            "content-type":"application/json",
                            "Accept":"*/*",
                            "Accept-Encoding":"gzip,deflate,br",
                            "Connection":"keep-live"
                        },
                        body: JSON.stringify(recordDaAggiornare),
                    }).then(function (response){
                        console.log(response);
                        // return response.json()
                    }).then(data => {
                        console.log('Success:', data);
                    });
                }
            })


        } else {
            let mErrore= document.querySelector('#dataErrore')
            mErrore.classList.remove("nascondi")
        }

    })
})


function carica(urlApi){
    let divProdotti=document.querySelector('#prodotti');
    divProdotti.innerHTML="";
    fetch(urlApi,
        {
            method: "GET"
        }).then(function (response) {
        console.log(response)
        return response.json()
    }).then(function (data) {
        console.log(data)
        for (let i=0; i<data.length; i++){

            let nominativoOrdine=document.querySelector('#Nominativo');
            nominativoOrdine.innerHTML="Le prenotazioni di "+ data[i].anagrafica.nome
            let div= document.createElement("div")
            div.classList.add("d-flex")
            div.classList.add("flex-row")
            div.classList.add("justify-content-between")
            div.classList.add("align-items-center")
            let img= document.createElement("img")
            img.src=data[i].libro.urlCopertina;
            let div1= document.createElement("div")
            let a= document.createElement("a")
            a.href="ProductShow.html?idLib=" + data[i].libro.idLibro;
            a.innerHTML= data[i].libro.titolo
            let div2= document.createElement("div")
            div2.innerHTML ="N. 1"
            let bnt= document.createElement("button")
            bnt.classList.add("bObj")
            bnt.type="button"
            bnt.value=data[i].libro.idLibro
            bnt.innerHTML="Elimina"
            div.appendChild(img)
            div1.appendChild(a)
            div.appendChild(div1)
            div.appendChild(div2)
            div.appendChild(bnt)

            divProdotti.appendChild(div)

        }
    })
}