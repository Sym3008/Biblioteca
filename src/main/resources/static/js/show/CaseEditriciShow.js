window.addEventListener('load', function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var mostra = urlParams.get('nominativo')
    console.log(mostra);

    let url = 'http://localhost:8080/api/get-case-editrici';

    if (mostra!="") {
        url = 'http://localhost:8080/api/get-casa-editrice-nominativo/'+mostra;
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

    for (var j = 0; j < data.length; j++) {
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        var cellText = document.createTextNode(data[j].nominativo);
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
        cellText = document.createTextNode(data[j].sito_web);
        cell.appendChild(cellText);
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
