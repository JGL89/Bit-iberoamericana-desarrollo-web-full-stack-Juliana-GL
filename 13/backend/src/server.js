const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todosRouter = require('./routes/todos');

const server = express();
const port = 4000;

dotenv.config();

mongoose
  .connect(
    'mongodb+srv://JuliDev:031789bb@cluster0.9d1qn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
    .then(() =>console.log('conectado con la base de datos'))
    .catch((err) =>
    console.log('Error al conectarse a la base de datos, erro: ' + err)
    );

server.get('/', (request, response) => {
    response.send('Hola desde la raíz');
  });


  server.use('/api/v1', todosRouter);

  server.listen(port, () => {
    console.log(`Servidor corriendo en localhost, en el puerto ${port}`);
  });
