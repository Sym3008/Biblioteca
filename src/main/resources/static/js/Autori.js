window.addEventListener('load', function(event){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idAu = urlParams.get('idAu')
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
    let DdN=document.querySelector('#Data-di-Nascita');
    let LdN=document.querySelector('#Luogo-di-Nascita');
    let DdM=document.querySelector('#Data-di-Morte');
    let LdM=document.querySelector('#Luogo-di-Morte');
    let Biografia=document.querySelector('#Biografia');

    let newRecord ={
        idAutore: '',
        nominativo: N.value,
        DatadiNascita:DdN.value,
        LuogodiNascita:LdN.value,
        DatadiMorte:DdM.value,
        LuogodiMorte:LdM.value,
        Biografia:Biografia.value
       };

    console.log(newRecord);

    let urlApi= "http://localhost:8080/api/save-autori";

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