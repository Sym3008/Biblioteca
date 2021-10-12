window.addEventListener("load", function (Event) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idAnagraficaPassato = urlParams.get('idAn')
    console.log(idAnagraficaPassato)

    let lH = document.querySelector('#lHome')
    lH.href="Index.html?idAn="+idAnagraficaPassato

    let lgn = document.querySelector("#lgn")
    if (idAnagraficaPassato>0){
        lgn.innerHTML=""
        let a = document.createElement("a")
        a.href="Registrazione.html?idAn="+idAnagraficaPassato
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
        })
    }

    carica(1, "#fantasy",idAnagraficaPassato)
    carica (9,"#cucina",idAnagraficaPassato)
    carica(4,"#horror",idAnagraficaPassato)

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")

    link.addEventListener("click", function (e) {
        let url ="show/LibriShow.html?titolo=" + name.value+"&idAn="+idAnagraficaPassato;
        if (autor.value!=""){
            url = "show/AutoriShow.html?nominativo=" + autor.value+"&idAn="+idAnagraficaPassato;
        }else if (casa_editrice.value!=""){
            url = "show/CaseEditriciShow.html?nominativo=" + casa_editrice.value+"&idAn="+idAnagraficaPassato;
        }
        close();
        open(url);
    })

})

function carica(id, navId, idAn) {
    let urlApi = "http://localhost:8080/api/get-libri-by-id-genere/" + id

    console.log("id anagrafica__------___"+idAn)
    // console.log(id)
    // console.log(urlApi)
    fetch(urlApi,
        {
            method: "GET"
        }).then(function (response) {
        // console.log(response)
        return response.json()
    }).then(function (data) {
        // console.log(data)
        let nav = document.querySelector(navId)
        console.log(nav)
        console.log(navId)
        let div1 = document.createElement("div")
        div1.classList.add("d-flex")
        div1.classList.add("flex-row")
        div1.classList.add("justify-content-center")
        div1.classList.add("align-items-center")
        let div2 = document.createElement("div")
        div2.classList.add("d-flex")
        div2.classList.add("flex-row")
        div2.classList.add("justify-content-center")
        div2.classList.add("align-items-center")
        console.log("id anagrafica__!!!!___"+idAn)
        for (let i=0; i<4; i++) {
            if (data[i] != null) {
                let a = document.createElement("a")
                a.classList.add("mx-2")
                console.log("id anagrafica_______"+idAn)
                a.href="show/ProductShow.html?idLib="+data[i].idLibro+"&idAn="+idAn
                let img = document.createElement("img")
                img.src = data[i].urlCopertina
                a.appendChild(img)
                if (i<2){
                    div1.appendChild(a);
                }else{
                    div2.appendChild(a);
                }
            }
        }
        nav.appendChild(div1);
        nav.appendChild(div2);
    })
}
