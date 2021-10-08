// let urlApi= "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html?id=""+id.value
//         window.open(urlApi);


window.addEventListener("load", function (Event) {

    let name = document.querySelector("#inputName")
    let autor = document.querySelector("#inputAutor")
    let casa_editrice= document.querySelector("#inputCasaEditrice")


    let link = document.querySelector("#richiesta")
    let urlApi
    link.addEventListener("click", function (e) {

        if (name.value!=""){
            console.log("ciao come stati");
            let urlLibro="http://localhost:8080/api/get-libro-titoli/"+name.value;
            fetch(urlLibro,
                {
                    method: "GET"
                }).then(function (response) {
                console.log(response)
                return response.json()
            }).then(function (listLibri) {
                console.log(listLibri)
                //urlApi = "http://localhost:63342/Biblioteca/templates/show/ProductShow.html?id=" + dati.idLibro;

            });

        } else if (autor.value!=""){

            urlApi = "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html";
            //urlApi = "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html?id=" + autor.value;

        }else if (casa_editrice.value!=""){

            urlApi = "http://localhost:63342/Biblioteca/templates/CaseEditrici.html?id=" + casa_editrice.value;

        }
        //close();
        //open(urlApi);
    })

})

function carica(id) {
    let urlApi = "http://localhost:8080/api/get-libro/" + id

    console.log(id)
    console.log(urlApi)
    fetch(urlApi,
        {
            method: "GET"
        }).then(function (response) {
        console.log(response)
        return response.json()
    }).then(function (data) {
        console.log(data)

        let div1 = document.querySelector('#copertina')
        div1.src = `${data.urlCopertina}`
        let div2 = document.querySelector('#titolo')
        div2.innerHTML = `${data.titolo}`
        let div3 = document.querySelector('#autore')
        div3.innerHTML = `${data.autore.nominativo}`
        let div4 = document.querySelector('#prefazione')
        div4.innerHTML = `${data.prefazione}`
        let div5 = document.querySelector('#id_editore')
        div5.innerHTML = `${data.casaEditrice.nominativo}`
        let div6 = document.querySelector('#id_genere')
        div6.innerHTML = `${data.genere.descrizione}`
        let div7 = document.querySelector('#pagine')
        div7.innerHTML = `${data.numeroPagine}`
        let div8 = document.querySelector('#lingua')
        div8.innerHTML = `${data.lingua}`
        let div9 = document.querySelector('#isbn')
        div9.innerHTML = `${data.isbn}`
        let div10 = document.querySelector('#quantita')
        div10.innerHTML = `${data.quantita}`


    })
}
