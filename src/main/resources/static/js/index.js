window.addEventListener("load", function (Event) {

    carica(1, "#fantasy")
    carica (9,"#cucina")
    carica(4,"#horror")

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")

    let link = document.querySelector("#richiesta")

    link.addEventListener("click", function (e) {
        let url ="show/LibriShow.html?titoli=" + name.value;
        if (autor.value!=""){
            url = "show/AutoriShow.html?nominativo=" + autor.value;
        }else if (casa_editrice.value!=""){
            url = "show/CaseEditriciShow.html?nominativo=" + casa_editrice.value;
        }
        close();
        open(url);
    })

})

function carica(id, navId) {
    let urlApi = "http://localhost:8080/api/get-libri-by-id-genere/" + id

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
        for (let i=0; i<4; i++) {
            if (data[i] != null) {
                let a = document.createElement("a")
                a.classList.add("mx-2")
                a.href="show/ProductShow.html?idLib="+data[i].idLibro
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

// <div className="d-flex flex-row justify-content-center align-items-center">
//     <a className="mx-2"> <img src="../static/image/Harry_Potter_e_il_calice_di_fuoco.jpg"></a>
//     <a className="mx-2"> <img src="../static/image/Harry_Potter_e_il_prigioniero_di_Azkaban.jpg"></a>
//
// </div>
// <div className="d-flex flex-row justify-content-center align-items-center">
//     <a className="mx-2" target="_blank"
//        href="http://localhost:63342/Biblioteca/templates/Product.html?_ijt=6neo8baoi3n7rivconq9p8c5f4"> <img
//         src="../static/image/Harry_Potter_e_la_camera_dei_segreti.jpg"></a>
//     <a className="mx-2"> <img src="../static/image/harry_potter_e_la_pietra_filosofale.jpg"></a>
//
// </div>