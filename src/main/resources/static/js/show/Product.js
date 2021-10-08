// let urlApi= "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html?id=""+id.value
//         window.open(urlApi);


window.addEventListener("load", function (Event) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var mostra = urlParams.get('id')
    console.log(mostra);
    carica(mostra);

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

