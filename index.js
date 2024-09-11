//HANDLEBARS HELPERS

const express = require("express");
const app = express();

// capturar parametros de una solicitud post
app.use(express.urlencoded({extended:true}));

//Express, ahora anda a buscar las vistas a hbs (?), esto es para servir recursos dinamicos dentro del servidor
app.set('view engine', 'hbs');

app.get( "/", (req, res) => {
    res.render("INDEX")
})

app.post("/login", (req, res) => {
    const parametros = req.body;
    console.log(parametros);
    res.render("bienvenida", {
        nombreUsuario: parametros.txtNombreUsuario,
        cliente: [
            {
                nombre: "cliente 1",
                correo: "correo 1",
                direccion: "direccion 1"
            },

            {
                nombre: "cliente 2",
                correo: "correo 2",
                direccion: "direccion 2"
            },

            {
                nombre: "cliente 3",
                correo: "correo 3",
                direccion: "direccion 3"
            }
         ]
    })

})

app.listen(3000, (req, res) => {
    console.log("ESCUCHANDO POR PUERTO 3000")
})