// let urlApi= "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html?id=""+id.value
//         window.open(urlApi);


window.addEventListener("load", function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var idLibroPassato = urlParams.get('idLib')
    var idAnagraficaPassato = urlParams.get('idAn')
// console.log(idAnagraficaPassato);
    carica(idLibroPassato);
// parte di codice in cui mi savo i possibili campi digitati e all'evento del click apre un url specifica per il risultato dell'interrogazione nel DB
    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")
    // let urlApi="http://localhost:63342/Biblioteca/templates/show/LibriShow.html?nominativo=" + name.value;
    let urlApi="LibriShow.html?nominativo=" + name.value;
    link.addEventListener("click", function (e) {

        if (autor.value!=""){
            urlApi = "AutoriShow.html?nominativo=" + autor.value;

        }else if (casa_editrice.value!=""){
            urlApi = "CaseEditriciShow.html?nominativo=" + casa_editrice.value;

        }
        close();
        open(urlApi);
    })

// al click del bottone prenota sarà aggiunta la prenotazione e verremo rimandati alla pagina di tutti gli ordini in carico all'utenza
    let prenota = document.querySelector("#prenota")
    prenota.addEventListener("click", function (e) {


        let anagraficaGen
        let libroGen

        fetch("http://localhost:8080/api/get-anagrafica/"+idAnagraficaPassato,
            {
                method: "GET"
            }).then(function (response) {
            console.log(response)
            return response.json()
        }).then(function (data) {
            anagraficaGen=data

            fetch("http://localhost:8080/api/get-libro/"+idLibroPassato,
                {
                    method: "GET"
                }).then(function (response) {
                console.log(response)
                return response.json()
            }).then(function (data) {
                libroGen=data
                let newRecord= {
                    idConsegna: '',
                    descrizione: '',
                    anagrafica: anagraficaGen,
                    dataConsegna:'',
                    dataRestituzione:'',
                    libro: libroGen,
                }
                console.log(newRecord);
                let urlApi= "http://localhost:8080/api/save-consegne";
                fetch(urlApi, {
                    method: "POST",
                    headers:{
                        "content-type":"application/json",
                        "Accept":"*/*",
                        "Accept-Encoding":"gzip,deflate,br",
                        "Connection":"keep-live"
                    },
                    body: JSON.stringify(newRecord),
                }).then(function (response){
                    console.log("record inserito");
                    alert("Prenotato correttamente")
                    // return response.json()
                    close();
                    open("CarrelloShow.html?idAn="+idAnagraficaPassato)
                }).then(data => {
                    console.log('Success:', data);
                });
            })
        })



    })
})

function carica(idLibroPassato) {
    let urlApi = "http://localhost:8080/api/get-libro/" + idLibroPassato

    // console.log(urlApi)
    fetch(urlApi,
        {
            method: "GET"
        }).then(function (response) {
        // console.log(response)
        return response.json()
    }).then(function (data) {
        // console.log(data)

        let div1 = document.querySelector('#copertina')
        div1.src = `${data.urlCopertina}`
        let div2 = document.querySelector('#titolo')
        div2.innerHTML = `${data.titolo}`
        let div3 = document.querySelector('#autore')
        div3.innerHTML = `${data.autore.nominativo}`
        let div4 = document.querySelector('#prefazione')
        div4.innerHTML = `${data.prefazione}`
        let div5 = document.querySelector('#id_editore')
        div5.innerHTML = `${data.casaEditrice.nominativo}`
        let div6 = document.querySelector('#id_genere')
        div6.innerHTML = `${data.genere.descrizione}`
        let div7 = document.querySelector('#pagine')
        div7.innerHTML = `${data.numeroPagine}`
        let div8 = document.querySelector('#lingua')
        div8.innerHTML = `${data.lingua}`
        let div9 = document.querySelector('#isbn')
        div9.innerHTML = `${data.isbn}`
        let div10 = document.querySelector('#quantita')
        div10.innerHTML = `${data.quantita}`

        if (data.quantita< 0) {
            div10.innerHTML= `${data.quantita= 0}`
        }


    })
}


