window.addEventListener('load', function(event){
    let form = document.querySelector('#registrationForm')
    form.addEventListener('submit', function (event){

        let fields = form.querySelectorAll('.textInput-required');
        let formValido = true;


        fields.forEach(function(el, i, ar){
            if(el.value === ""){
                console.log(`TROVATO CAMPO VUOTO -> ${el.name}`)
                formValido = false;
            }

            if(formValido === false){
                console.log("Ho trovato degli errori, quindi non invio il form")
                event.preventDefault()
            } })}
    )})