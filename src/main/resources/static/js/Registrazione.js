window.addEventListener('load', function(event){
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

        let passWord=document.querySelector('#Password');
        let passWordC=document.querySelector('#Conferma-Password');
        if (passWord.value==="" || passWord.value !== passWordC.value){
            console.log("Errore re-inserisci correttamente la tua password!");
            formValido = false;
            InErr(passWord, "Password");
        }else{
            console.log("Le password corrispondono!");
            TogErr(passWord);
        }

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
    let n=document.querySelector('#Nome');
    let c=document.querySelector('#Cognome');
    let dN=document.querySelector('#DataNascita');
    let i=document.querySelector('#Indirizzo');
    let cap=document.querySelector('#Cap');
    let loc=document.querySelector('#Località');
    let provincia=document.querySelector('#Provincia');
    let tel=document.querySelector('#Telefono');
    let cf=document.querySelector('#CodiceFiscale');
    let e=document.querySelector('#Email');
    let p=document.querySelector('#Password');

    let prov = provincia.value.toUpperCase();

    let newRecord ={
        idAnagrafica: '',
        nome: n.value,
        cognome:c.value,
        dataNascita:dN.value,
        indirizzo:i.value,
        cap:cap.value,
        localita:loc.value,
        provincia:prov,
        telefonoCellulare: tel.value,
        codiceFiscale:cf.value,
        email:e.value,
        password:p.value};

    console.log(newRecord);

    let urlApi= "http://localhost:8080/api/save-anagrafiche";

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
            alert("Anagrafica inserita correttamente")
            // return response.json()
        }).then(data => {
            console.log('Success:', data);
        });
}