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
        var cellText = document.createTextNode(data[j].titolo);
        cell.appendChild(cellText);
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

        // cell = document.createElement("td");
        // //cellText = document.createTextNode();
        // cell.appendChild(cellText);
        // row.appendChild(cell);


        tBody.appendChild(row);
    }

}
