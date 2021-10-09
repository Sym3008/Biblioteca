window.addEventListener('load', function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var mostra = urlParams.get('nominativo')
    // console.log(mostra);

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")

    link.addEventListener("click", function (e) {
        let url ="LibriShow.html?titolo=" + name.value;
        if (autor.value!=""){
            url = "AutoriShow.html?nominativo=" + autor.value;
        }else if (casa_editrice.value!=""){
            url = "CaseEditriciShow.html?nominativo=" + casa_editrice.value;
        }
        close();
        open(url);
    })

    let url = 'http://localhost:8080/api/get-autori';

    if (mostra!="") {
        url = 'http://localhost:8080/api/get-autore-nominativo/'+mostra;
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
        cellText = document.createTextNode(data[j].dataNascita);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].luogoNascita);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].dataMorte);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(data[j].luogoMorte);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        let div = document.createElement("div");
        div.classList.add("BoxText");
        cellText = document.createTextNode(data[j].biografia);
        div.appendChild(cellText);
        cell.appendChild(div);
        row.appendChild(cell);

        cell = document.createElement("td");
        let btn = document.createElement("a");
        btn.classList.add("btn")
        btn.classList.add("btn-primary")
        btn.classList.add("mb-1")
        btn.href="LibriShow.html?idAu="+data[j].idAutore
        cellText = document.createTextNode("Libri");
        let btn2 = document.createElement("a")
        btn2.classList.add("btn")
        btn2.classList.add("btn-secondary")
        let cellText2 = document.createTextNode("Modifica");

        btn.appendChild(cellText);
        btn2.appendChild(cellText2);
        cell.appendChild(btn);
        cell.appendChild(btn2);
        row.appendChild(cell);

        tBody.appendChild(row);
    }

}

