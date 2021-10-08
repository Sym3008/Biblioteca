window.addEventListener("load", function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var idAnagraficaPassato = urlParams.get('idAn');

    let urlApi = "http://localhost:8080/api/get-consegne-anagrafica/" + idAnagraficaPassato
    console.log(urlApi)
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
            let divProdotti=document.querySelector('#prodotti');
            let div= document.createElement("div")
            div.classList.add("d-flex")
            div.classList.add("flex-row")
            div.classList.add("justify-content-between")
            div.classList.add("align-items-center")
            let img= document.createElement("img")
            img.src=data[i].libro.urlCopertina;
            let div1= document.createElement("div")
            let a= document.createElement("a")
            a.href="http://localhost:63342/Biblioteca/templates/show/ProductShow.html?idLib=" + data[i].libro.idLibro;
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






// <div className="d-flex flex-row justify-content-between align-items-center">
//
//     <img src="../../static/image/Harry_Potter_e_il_calice_di_fuoco.jpg">
//
//         <div className="">
//             <a href=""> Harry Potter e il Calice di Fuoco</a>
//         </div>
//         <div>N. 1</div>
//         <button className=" bObj" type="button" value="">Elimina</button>
// </div>
})