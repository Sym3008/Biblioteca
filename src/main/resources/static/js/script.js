window.addEventListener("load", function (Event){

    let form=document.querySelector("#login")

    form.addEventListener("submit",function (e){
        e.preventDefault()
        let id=document.querySelector("#Email")
        let url= "http://localhost:8080/api/get-anagrafica/1"

        fetch(url,{method:"GET",mode: 'no-cors'
        }).then(function (response){
            //return response.json()
            console.log(response)
        }).then(function (data){
            console.log(data)
        })

    })
})