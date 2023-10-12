const express =require('express')
//crear el objeto principal de la api

const app = express()

//url de prueba
app.get('/Prueba', function(request, response){
    response.send("Hola yesi")
})

app.get('/Prueba2', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true
    })
}
)




//crear el servidor de la aplicacion :
app.listen( 5000 , 
    console.log('servidor ejecutando en puerto'+5000)
)