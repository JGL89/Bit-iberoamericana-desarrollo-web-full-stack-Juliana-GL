const express = require('express');
const router = express.Router();

/* CRUD */
  router.post('/todos', (request, response) => {
    response.send('Crear una tarea');
  });

  router.get('/todos', (request, response) => {
    response.send('Leer todas las tareas');
  });

  router.get('/todos/:id', (request, response) => {
    response.send('Leer una tarea específica');
  });

  router.put('/todos/:id', (request, response) => {
    response.send('Actualizar una tarea específica');
  });

  router.delete('/todos/:id', (request, response) => {
    response.send('eliminar una tarea específica');
  });

  module.exports = router;

