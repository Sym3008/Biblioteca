// let urlApi= "http://localhost:63342/Biblioteca/templates/show/AutoriShow.html?id=""+id.value
//         window.open(urlApi);


window.addEventListener("load", function (Event){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var mostra = urlParams.get('id')
    console.log(mostra);
    carica(mostra);
    let name=document.querySelector("#inputName")
    let link=document.querySelector("#richiesta")
    link.addEventListener("click",function (e){
        let urlApi= "http://localhost:63342/Biblioteca/templates/show/ProductShow.html?id="+name.value;
         window.open(urlApi);

    })
})
function carica (id){

    let urlApi= "http://localhost:8080/api/get-libri/"+id

    console.log(id)
    console.log(urlApi)
    fetch(urlApi,
        {method:"GET"
        }).then(function (response){
        return response.json()
    }).then(function (data){
        console.log(data)
        msg = document.querySelector('#copertina')
        msg.href = data.copertina
        msg = document.querySelector('#titolo')
        msg.innerHTML = data.titolo
        msg = document.querySelector('#id_autore')
        msg.innerHTML = data.autore
        msg = document.querySelector('#prefazione')
        msg.innerHTML = data.prefazione
        msg = document.querySelector('#id_editore')
        msg.innerHTML = data.editore
        msg = document.querySelector('#id_genere')
        msg.innerHTML = data.genere
        msg = document.querySelector('#pagine')
        msg.innerHTML = data.pagine
        msg = document.querySelector('#isbn')
        msg.innerHTML = data.isbn
        msg = document.querySelector('#quantita')
        msg.innerHTML = data.quantita
    })
}
