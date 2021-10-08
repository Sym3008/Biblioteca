// window.addEventListener('load', function(event){
//     let form = document.querySelector('#registrationForm')
//     form.addEventListener('submit', function (event){
//         formValido = true;
//         text=document.querySelectorAll('.textInput.richiesto');
//         text.forEach(function (elT,ind,ar){
//             if (elT.value === ""){
//                 console.log("-> " + elT.id + " = NON E' PRESENTE!!");
//                 formValido = false;
//                 InErr(elT,elT.id);
//             }else {
//                 console.log("-> " + elT.id + " = " + elT.value);
//                 TogErr(elT);
//             }
//         })
//         function InErr(elemento,text){
//             if(elemento!== null){
//                 let mess= elemento.closest('.boxIn').querySelector('.messErr');
//                 mess.innerHTML="---"+text+" obbligatorio---";
//
//             }
//         }
//         function TogErr(elemento){
//             if(elemento!== null){
//                 let mess= elemento.closest('.boxIn').querySelector('.messErr');
//                 mess.innerHTML="";
//             }
//         }
//
//         if(formValido === false){
//         console.log("ERRORE!!!");
//         event.preventDefault();
//         } else {
//             inserisciRecord();
//             event.preventDefault();
//         }
//     })
// })
//
// function inserisciRecord(){
//     let t=document.querySelector('#Titolo');
//     let iA=document.querySelector('#Autore');
//     let p=document.querySelector('#Prefazione');
//     let iCE=document.querySelector('#Casa-editrice');
//     let iG=document.querySelector('#Genere');
//     let isbn=document.querySelector('#ISBN');
//     let nP=document.querySelector('#Numero-pagine');
//     let lan=document.querySelector('#Lingua');
//     let qnt=document.querySelector('#Quantità');
//     //let url=document.querySelector('#');
//     let scaf=document.querySelector('#Scaffale');
//     let rip=document.querySelector('#Ripiano');
//
//     let newRecord ={
//         idLibro: '',
//         titolo: t.value,
//         idAutore:iA.value,
//         prefazione:p.value,
//         idCasaEditrice:iCE.value,
//         isbn:isbn.value,
//         numeroPagine:nP.value,
//         lingua:lan.value,
//         quantita: qnt.value,
//         url:url.value,
//         scaffale:scaf.value,
//         ripiano:rip.value};
//
//     console.log(newRecord);
//
//     let urlApi= "http://localhost:8080/api/save-libri";
//
//     fetch(urlApi, {
//         method: "POST",
//         headers:{
//             "content-type":"application/json",
//             "Accept":"*/*",
//             "Accept-Encoding":"gzip,deflate,br",
//             "Connection":"keep-live"
//         },
//         body: JSON.stringify(newRecord),
//     }).then(function (response){
//         console.log("record inserito");
//         alert("Libro inserito correttamente")
//         // return response.json()
//     }).then(data => {
//         console.log('Success:', data);
//     });
// }