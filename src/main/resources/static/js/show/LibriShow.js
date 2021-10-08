window.addEventListener('load', function (Event) {
    let url = 'http://localhost:8080/api/get-libri';

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


    // searchDiv2.innerHTML = `${data.town}, ${data.state}`
    // searchImg1.src = "Static/IMG/Union.png"
    // searchSpan.innerHTML = ` $${data.price_per_square_foot}+ / ${data.beds_number} Beds / ${data.commodities}`
    // searchImg2.src = "Static/IMG/Line.png"
    //
    // let ponte = document.querySelector('#idReport')
    // ponte.appendChild(searchDiv1)
    //
    // searchDiv1.appendChild(searchDiv2)
    // searchDiv1.appendChild(searchDiv3)
    // searchDiv3.appendChild(searchImg1)
    // searchDiv3.appendChild(searchSpan)
    // searchDiv3.appendChild(searchImg2)
}
