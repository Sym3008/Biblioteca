window.addEventListener('load', function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var mostra = urlParams.get('nominativo')
    console.log(mostra);

    let url = 'http://localhost:8080/api/get-libri';

    if (mostra!="") {
        url = 'http://localhost:8080/api/get-libro-titoli/'+mostra;
    }

    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        // console.log(data)
        carica(data);
    })

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")
    let urlApi
    link.addEventListener("click", function (e) {

        if (name.value!=""){
            urlApi = "http://localhost:63342/Biblioteca/templates/show/LibriShow.html?nominativo=" + name.value;

        } else if (autor.value!=""){
            urlApi = "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html?nominativo=" + autor.value;

        }else if (casa_editrice.value!=""){
            urlApi = "http://localhost:63342/Biblioteca/templates/show/CaseEditriciShow.html?nominativo=" + casa_editrice.value;

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


function carica(data){

    let tBody = document.querySelector("#tabellaBody")

    console.log(data.length)
    console.log(data)
    console.log(data[0])
    for (var j = 0; j < data.length; j++) {
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        var link = document.createElement("a");
        link.href= "http://localhost:63342/Biblioteca/templates/show/ProductShow.html?idLib=" + data[j].idLibro;
        var cellText = document.createTextNode(data[j].titolo);
        link.appendChild(cellText);
        cell.appendChild(link);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].autore.nominativo);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].casaEditrice.nominativo);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].genere.descrizione);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].numeroPagine);
        cell.appendChild(cellText);
        row.appendChild(cell);

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

        cell = document.createElement("td");
        let btn = document.createElement("button")
        cellText = document.createTextNode("Elimina");
        let btn2 = document.createElement("button")
        cellText2 = document.createTextNode("Modifica");

        btn.appendChild(cellText);
        btn2.appendChild(cellText2);
        cell.appendChild(btn);
        cell.appendChild(btn2);
        row.appendChild(cell);


        tBody.appendChild(row);
    }

}
