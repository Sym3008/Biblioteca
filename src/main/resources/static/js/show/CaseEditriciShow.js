window.addEventListener('load', function (Event) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let mostra = urlParams.get('nominativo')
    let idAnagraficaPassato = urlParams.get('idAn');
    console.log(mostra);

    let lH = document.querySelector('#lHome')
    lH.href="../Index.html?idAn="+idAnagraficaPassato

    let lgn = document.querySelector("#lgn")
    if (idAnagraficaPassato>0){
        lgn.innerHTML=""
        let a = document.createElement("a")
        a.href="../Registrazione.html?idAn="+idAnagraficaPassato
        let url= "http://localhost:8080/api/get-anagrafica/"+idAnagraficaPassato
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

    let url = 'http://localhost:8080/api/get-case-editrici';

    if (mostra!="") {
        url = 'http://localhost:8080/api/get-casa-editrice-nominativo/'+mostra;
    }
    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        // console.log(data)
        carica(data, idAnagraficaPassato);
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


function carica(data, idAnagraficaPassato){
    let tBody = document.querySelector("#tabellaBody")

    console.log(data.length)
    console.log(data)

    for (let j = 0; j < data.length; j++) {
        let row = document.createElement("tr");

        let cell = document.createElement("td");
        let cellText = document.createTextNode(data[j].nominativo);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].citta);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].cap);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].indirizzo);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].telefono);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].email);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].sitoWeb);
        cell.appendChild(cellText);
        row.appendChild(cell);

        if(idAnagraficaPassato<4) {
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
                let urlElm = "http://localhost:8080/api/cancella-casa-editrice/" + data[j].idCasaEditrice;
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
                open("CaseEditriciShow.html?titolo=&idAn=" + idAnagraficaPassato)
            })
            btnModifica.addEventListener("click", function (e) {
                console.log(e.currentTarget.value);
                close();
                open("../CaseEditrici.html?idCe=" + data[j].idCasaEditrice)
            })
        }else{
            tBody.appendChild(row);
        }
    }

}
