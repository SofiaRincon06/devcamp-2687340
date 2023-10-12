const express =require('express')
//crear el objeto principal de la api

const app = express()

//url de prueba
app.get('/Prueba', function(request, response){
    response.send("Hola yesi")
})

//obtener el bootcamp por id 
app.get('/api/v1/bootcamps/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `obtener el bootcamp por id ${request.params.id}`
    })
}
)

//crear el bootcamp 
app.post('/api/v1/devcamp/bootcamps', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": "aqui se va a crear bootcamp"
    })
}
)

//actualizar bootcamp 
app.put('/api/v1/bootcamps/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `actualizar el bootcamp por id ${request.params.id}`
    })
}
)
//ELIMINAR bootcamp 
app.put('/api/v1/bootcamps1/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `eliminar el bootcamp por id ${request.params.id}`
    })
})


//obtener el USERS por id 
app.get('/api/v1/users/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `obtener el users por id ${request.params.id}`
    })
}
) 
//obtener el USERS por id 
app.get('/api/v1/users', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg":"Aqui estan todos los usuarios"
    })
}
) 
//crear el users
app.post('/api/v1/devcamp/users', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": "aqui se va a crear el users"
    })
}
)

//actualizar users
app.put('/api/v1/users/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `actulizar el users por id ${request.params.id}`
    })
}
)
//ELIMINAR users
app.delete('/api/v1/users1/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `eliminar el users por id ${request.params.id}`
    })
})

//obtener el reviews por id 
app.get('/api/v1/reviews/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `obtener el reviews por id ${request.params.id}`
    })
}
) 
//obtener el USERS por id 
app.get('/api/v1/reviews', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg":"Aqui estan todas las reviews"
    })
}
) 
//crear el reviews
app.post('/api/v1/devcamp/reviews', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": "aqui se va a crear el reviews"
    })
}
)

//actualizar reviews
app.put('/api/v1/reviews/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `actulizar el reviews por id ${request.params.id}`
    })
}
)
//ELIMINAR reviews
app.delete('/api/v1/reviews1/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `eliminar el reviews por id ${request.params.id}`
    })
})

//obtener el courses por id 
app.get('/api/v1/courses/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `obtener el courses por id ${request.params.id}`
    })
}
) 
//crear el courses
app.post('/api/v1/devcamp/courses', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": "aqui se va a crear el courses"
    })
}
)

//actualizar courses
app.put('/api/v1/courses/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `actulizar el courses por id ${request.params.id}`
    })
}
)
//ELIMINAR courses
app.delete('/api/v1/courses/:id', (request, response)=>{
    response
    .status(200)
    .json({
        "success":true,
        "msg": `eliminar el courses por id ${request.params.id}`
    })
})


//crear el servidor de la aplicacion :
app.listen( 5000 , 
    console.log('servidor ejecutando en puerto'+5000)
)