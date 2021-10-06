window.addEventListener("load", function (Event){

    let form=document.querySelector("#login")

    form.addEventListener("submit",function (e){
        e.preventDefault()
        let id=document.querySelector("#Email")
        let urlApi= "http://localhost:8080/api/get-anagrafica/"+id.value

        console.log(id.value)
        console.log(urlApi)
        fetch(urlApi,
        {method:"GET",
            mode:"no-cros"
        }).then(function (response){
            console.log(response)
            return response.json()
        }).then(function (data){
            console.log(data)
        })
    })
})