window.addEventListener('load', function(event){
    console.log("ciao!!!")
    let form = document.querySelector('#registrationForm')
    form.addEventListener('submit', function (event){

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
            InErr(passWord, "Inserisci correttamente la tua password!<br/>");
        }else{
            console.log("Le password corrispondono!");
            TogErr(passWord);
        }

        function InErr(elemento,text){
            if(elemento!== null){
                let mess= elemento.closest('.boxIn').querySelector('.messErr');
                mess.innerHTML="---"+text+"---";

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
            // event.preventDefault();
        }
    })
})