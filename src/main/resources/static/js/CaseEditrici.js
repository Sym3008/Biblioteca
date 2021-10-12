let host="localhost"

window.addEventListener('load', function(event){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idCe = urlParams.get('idCe')
    let idAnagraficaPassato = urlParams.get('idAn');


    let form = document.querySelector('#registrationForm')
    form.addEventListener('submit', function (event){
        formValido = true;
        text=document.querySelectorAll('.textInput.richiesto');
        text.forEach(function (elT,ind,ar){
            if (elT.value === ""){
                console.log("-> " + elT.id + " = NON E' PRESENTE!!");
                formValido = false;
                InErr(elT,elT.id);
            }else {
                console.log("-> " + elT.id + " = " + elT.value);
                TogErr(elT);
            }
        })

        function InErr(elemento,text){
            if(elemento!== null){
                let mess= elemento.closest('.boxIn').querySelector('.messErr');
                mess.innerHTML="---"+text+" obbligatorio---";

            }
        }
        function TogErr(elemento){
            if(elemento!== null){
                let mess= elemento.closest('.boxIn').querySelector('.messErr');
                mess.innerHTML="";
            }
        }

        if(formValido === false){
            console.log("ERRORE!!!");
            event.preventDefault();
        } else {
            inserisciRecord();
            event.preventDefault();
        }
    })
})

function inserisciRecord(){
    let N=document.querySelector('#Nominativo');
    let Città=document.querySelector('#Città');
    let cap=document.querySelector('#CAP');
    let Ind=document.querySelector('#Indirizzo');
    let Email=document.querySelector('#Email');
    let Tel=document.querySelector('#Telefono');
    let Sito=document.querySelector('#Sito-Web');

    let newRecord ={
        idCasaEditrice: '',
        nominativo: N.value,
        Città:Città.value,
        CAP:cap.value,
        Indirizzo:Ind.value,
        Email:Email.value,
        Telefono:Tel.value,
        SitoWeb:Sito.value
    };

    console.log(newRecord);

    let urlApi= "http://"+host+":8080/api/save-case-editrici";

    fetch(urlApi, {
        method: "POST",
        headers:{
            "content-type":"application/json",
            "Accept":"*/*",
            "Accept-Encoding":"gzip,deflate,br",
            "Connection":"keep-live"
        },
        body: JSON.stringify(newRecord),
    }).then(function (response){
        console.log("record inserito");
        // return response.json()
    }).then(data => {
        console.log('Success:', data);
    });
}