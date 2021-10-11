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
            controllaDati();
            event.preventDefault();
        }
    })
})

function controllaDati(){
    let E=document.querySelector('#Email');
    let P=document.querySelector('#Password')

    let urlApi= "http://localhost:8080/api/get-anagrafiche";
    let trovato=false;
    fetch(urlApi, {
        method: "Get"
    }).then(function (response){
         return response.json()
    }).then(data => {
        for(let i=0; i<data.length; i++){
            if (data[i].email===E.value && data[i].password===P.value){
                console.log(data[i].idAnagrafica);
                trovato=true;
                close();
                open("Index.html?idAn="+data[i].idAnagrafica)
            }else{
                console.log("non trovato")
                trovato=false
            }
        }
        if (!trovato){
            alert("Anagrafica non trovata")
        }
    });
}