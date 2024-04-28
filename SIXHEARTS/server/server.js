const express = require ('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"users":["usuarioUno", "usarioDos", "usuarioTres"] })
}) 

app.listen(5000,()=>{ console.log("El servidor ha sido inicializado en el puerto 5000")})