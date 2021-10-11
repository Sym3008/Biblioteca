window.addEventListener('load', function(event){
    let form = document.querySelector('#login')
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
    let E=document.querySelector('#Email');
    let P=document.querySelector('#Password');

    let newRecord ={
        email:E.value,
        password:P.value};

    console.log(newRecord);

    let urlApi= "http://localhost:8080/api/save-login";

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
        alert("Login inserita correttamente")
        // return response.json()
    }).then(data => {
        console.log('Success:', data);
    });
}