let host="localhost"

window.addEventListener('load', function (Event) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let titolo = urlParams.get('titolo');
    let idAu = urlParams.get('idAu');
    let idAnagraficaPassato = urlParams.get('idAn');

    let lH = document.querySelector('#lHome');
    lH.href = "../Index.html?idAn=" + idAnagraficaPassato;

    let lgn = document.querySelector("#lgn");
    if (idAnagraficaPassato > 0) {
        lgn.innerHTML = "";
        let a = document.createElement("a");
        a.href = "../Registrazione.html?idAn=" + idAnagraficaPassato;
        let url = "http://"+host+":8080/api/get-anagrafica/" + idAnagraficaPassato;
        fetch(url,
            {
                method: "GET"
            }).then(function (response) {
            // console.log(response)
            return response.json();
        }).then(function (data) {
            a.innerHTML = "Benvenuto\n" + data.nome + "\n clicca per modificare i tuoi dati";
            lgn.appendChild(a);

            let m = document.querySelector('#menu')
            let carSpan = document.createElement("span");
            carSpan.classList.add("mScelta")
            carSpan.classList.add("px-5")
            let aSpan = document.createElement("a")
            aSpan.href = "CarrelloShow.html?idAn=" + idAnagraficaPassato;
            aSpan.innerHTML = "Prenotazioni"
            carSpan.appendChild(aSpan)
            m.appendChild(carSpan)

            if (idAnagraficaPassato < 4) {
                let agL = document.querySelector("#aggL")
                let aL = document.createElement("a")
                aL.href = ("../Libro.html?idAn=" + idAnagraficaPassato);
                aL.innerHTML = "Aggiungi nuovo libro";
                agL.appendChild(aL);
            }
        })
    }
    let urlA = "http://"+host+":8080/api/get-libri";
        console.log(titolo)
    console.log(titolo !== "" || titolo !== null || titolo !== "null")
    if (titolo !== null && titolo!=="null" && titolo!=="" ) {
        console.log(titolo);
        urlA = "http://"+host+":8080/api/get-libro-titoli/" + titolo;
    }

    console.log(urlA);
    fetch(urlA).then(function (response) {
        return response.json()
    }).then(function (data) {
        // console.log(data)
        carica(data, idAnagraficaPassato);
    })

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice = document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")
    let urlApi
    link.addEventListener("click", function (e) {

        urlApi = "LibriShow.html?titolo=" + name.value + "&idAn=" + idAnagraficaPassato;
        if (autor.value !== "") {
            urlApi = "AutoriShow.html?nominativo=" + autor.value + "&idAn=" + idAnagraficaPassato;

        } else if (casa_editrice.value !== "") {
            urlApi = "CaseEditriciShow.html?nominativo=" + casa_editrice.value + "&idAn=" + idAnagraficaPassato;

        }
        close();
        open(urlApi);
    })

})

function cerca() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ricerca");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabella");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function carica(data, idAnagraficaPassato) {

    let tBody = document.querySelector("#tabellaBody")
    let dimS= window.innerWidth;
    console.log(data.length)
    console.log(data)
    console.log(data[0])
    let tHead = document.querySelector("#tabellaHead")
    tHead.innerHTML=""
    let rowH = document.createElement("tr");
    let cellH = document.createElement("th");
    cellH.classList.add("intestBor")
    cellH.innerHTML="titolo"
    rowH.appendChild(cellH)
    if (dimS>767) {
        cellH = document.createElement("th");
        cellH.classList.add("intestBor")
        cellH.innerHTML = "autore"
        rowH.appendChild(cellH)

        cellH = document.createElement("th");
        cellH.classList.add("intestBor")
        cellH.innerHTML = "lingua"
        rowH.appendChild(cellH)

        cellH = document.createElement("th");
        cellH.classList.add("intestBor")
        cellH.innerHTML = "quantità"
        rowH.appendChild(cellH)

        cellH = document.createElement("th");
        cellH.classList.add("intestBor")
        cellH.innerHTML = "prefazione"
        rowH.appendChild(cellH)
    }
    if (idAnagraficaPassato < 4) {
        cellH = document.createElement("th");
        cellH.classList.add("intestBor")
        cellH.innerHTML = ""
        rowH.appendChild(cellH)
    }

    tHead.appendChild(rowH)

    if (data.length<1){
        let nntL= document.querySelector('#nessunLibro')
        nntL.innerHTML="Nessun Libro trovato"
    }

    for (let j = 0; j < data.length; j++) {
        let row = document.createElement("tr");

        let cell = document.createElement("td");
        let link = document.createElement("a");
        link.href = "ProductShow.html?idLib=" + data[j].idLibro+"&idAn="+idAnagraficaPassato;
        let cellText = document.createTextNode(data[j].titolo);
        link.appendChild(cellText);
        cell.appendChild(link);
        row.appendChild(cell);
        if (dimS>767) {
            cell = document.createElement("td");
            console.log(data[j].autore.nominativo)
            cellText = document.createTextNode(data[j].autore.nominativo);
            cell.appendChild(cellText);
            row.appendChild(cell);

            // cell = document.createElement("td");
            // cellText = document.createTextNode(data[j].casaEditrice.nominativo);
            // cell.appendChild(cellText);
            // row.appendChild(cell);
            //
            // cell = document.createElement("td");
            // cellText = document.createTextNode(data[j].genere.descrizione);
            // cell.appendChild(cellText);
            // row.appendChild(cell);
            //
            // cell = document.createElement("td");
            // cellText = document.createTextNode(data[j].numeroPagine);
            // cell.appendChild(cellText);
            // row.appendChild(cell);

            cell = document.createElement("td");
            cellText = document.createTextNode(data[j].lingua);
            cell.appendChild(cellText);
            row.appendChild(cell);

            cell = document.createElement("td");
            cellText = document.createTextNode(data[j].quantita);
            cell.appendChild(cellText);
            row.appendChild(cell);

            cell = document.createElement("td");
            let div = document.createElement("div");
            div.classList.add("BoxText");
            cellText = document.createTextNode(data[j].prefazione);
            div.appendChild(cellText);
            cell.appendChild(div);
            row.appendChild(cell);
        }
        if (idAnagraficaPassato < 4) {
            cell = document.createElement("td");
            let btnElimin = document.createElement("button")
            btnElimin.classList.add("btn")
            btnElimin.classList.add("btn-primary")
            btnElimin.classList.add("mb-1")
            cellText = document.createTextNode("Elimina");
            let btnModifica = document.createElement("button")
            btnModifica.classList.add("btn")
            btnModifica.classList.add("btn-secondary")
            cellText2 = document.createTextNode("Modifica");

            btnElimin.appendChild(cellText);
            btnModifica.appendChild(cellText2);
            cell.appendChild(btnElimin);
            cell.appendChild(btnModifica);
            row.appendChild(cell);

            tBody.appendChild(row);

            btnElimin.addEventListener("click", function (e) {
                console.log(e.currentTarget.value);
                let urlElm = "http://"+host+":8080/api/cancella-libro/" + data[j].idLibro;
                fetch(urlElm,
                    {
                        method: "DELETE"
                    }).then(function (response) {
                    console.log(response)
                    return response.json()
                }).then(function (data) {
                    console.log(data)
                })
                close();
                open("LibriShow.html?titolo=&idAn=" + idAnagraficaPassato)
            })
            btnModifica.addEventListener("click", function (e) {
                console.log(e.currentTarget.value);
                close();
                open("../Libro.html?idLb=" + data[j].idLibro)
            })
        } else {
            tBody.appendChild(row);
        }
    }

}
