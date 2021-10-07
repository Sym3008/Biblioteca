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

// window.addEventListener('load', function (Event) {
//     let url = 'http://localhost:8080/api/get-autori';
//     let triggered = document.querySelector('#ricerca')
//
//
//     fetch(url).then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         // console.log(data)
//         Trova(triggered.value, data);
//     })
//
//
//     // let form = document.querySelector('#ricerca')
//     // form.addEventListener('submit', function (event) {
//
//     if (triggered.value !== "") {
//
//         fetch(url).then(function (response) {
//             return response.json()
//         }).then(function (data) {
//             // console.log(data)
//             Trova(triggered.value, data);
//         })
//
//     }else {
//         triggered.placeholder = "Attenzione!!!  inserisci un nome di Città"
//     }
//
//     event.preventDefault()
// })
//
// function Trova(valore, data) {
//     if (valore==="") {
//         for (let i = 0; i < data.length; i++) {
//             // console.log(data[i])
//             Stampa(data[i]);
//
//         }
//     }else {
//         let svuota = document.querySelectorAll('.ContenitoreR');
//         for (let i=0; i<svuota.length;i++){
//             svuota[i].remove()
//         }
//         // for (let i = 0; i < data.length; i++) {
//         //     if (data[i].town===valore){
//         //         Stampa(data[i]);
//         //     }
//         // }
//         let arrF=[];
//         let y=0;
//         data.forEach(function (elD,iD,arrD){
//             // console.log(elD.town);
//             let eleDa= elD.town.toLowerCase();
//             if(eleDa.indexOf(valore.toLowerCase())>-1){
//                 arrF.push(elD);
//                 console.log(arrF[y]);
//                 Stampa(arrF[y]);
//                 y++;
//             }
//
//         });
//
//     }
// }
// function Stampa(data){
//     let searchDiv1 = document.createElement("div")
//     let searchDiv2 = document.createElement("div")
//     let searchDiv3 = document.createElement("div")
//     let searchImg1 = document.createElement("img")
//     let searchImg2 = document.createElement("img")
//     let searchSpan = document.createElement("span")
//
//     searchDiv1.classList.add("r2")
//     searchDiv1.classList.add("p0")
//     // searchDiv1.classList.add("Bord1")
//     searchDiv1.classList.add("d-flex")
//     searchDiv1.classList.add("flex-column")
//     searchDiv1.classList.add("flex-md-row")
//     searchDiv1.classList.add("justify-content-between")
//     searchDiv1.classList.add("align-items-center")
//     searchDiv1.classList.add("ContenitoreR")
//     // searchDiv2.classList.add("Bord1")
//     searchDiv2.classList.add("w5-1")
//     searchDiv2.classList.add("riga1")
//     // searchDiv3.classList.add("Bord1")
//     searchDiv3.classList.add("w5-1")
//     // searchDiv3.classList.add("Bord1")
//     searchDiv3.classList.add("s16DG")
//     searchDiv3.classList.add("d-flex")
//     searchDiv3.classList.add("justify-content-start")
//     searchDiv3.classList.add("justify-content-md-end")
//     searchDiv3.classList.add("align-items-center")
//     searchDiv3.classList.add("riga2")
//     searchImg1.classList.add("riga3")
//     searchSpan.classList.add("riga4")
//     searchImg2.classList.add("riga6")
//
//     searchSpan.classList.add("pLR5")
//     searchSpan.classList.add("risultatiTesto")
//
//
//     searchDiv2.innerHTML = `${data.town}, ${data.state}`
//     searchImg1.src = "Static/IMG/Union.png"
//     searchSpan.innerHTML = ` $${data.price_per_square_foot}+ / ${data.beds_number} Beds / ${data.commodities}`
//     searchImg2.src = "Static/IMG/Line.png"
//
//     let ponte = document.querySelector('#idReport')
//     ponte.appendChild(searchDiv1)
//
//     searchDiv1.appendChild(searchDiv2)
//     searchDiv1.appendChild(searchDiv3)
//     searchDiv3.appendChild(searchImg1)
//     searchDiv3.appendChild(searchSpan)
//     searchDiv3.appendChild(searchImg2)
// }
//})