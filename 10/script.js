/* CALLBACKS */
function saludar(callback) {
    console.log('hola');
    callback();
  }
  
  function despedir() {
    console.log('chao');
  }
  
  //saludar(despedir);
  
  /* SIMULANDO PROMESA */
  function simulaPromesa() {
    if (false) {
      console.log('si cumple condición');
    } else {
      console.log('no se cumple la condición');
    }
  }
  //simulaPromesa();
  
  /* PROMESA */
  const promesa = new Promise(function (resolve, reject) {
    //console.log('pendiente...');
    if (true) {
      resolve('terminó y todo salió bien'); // then
    } else {
      reject('terminó y algo salió mal'); // catch
    }
  });
  
  //promesa.then('success').catch('fail');
  
  /* API
  1. Build-In (JS, Browser) API
  2. Third API
  3. Own API
  */
  
  // Fetch - API de JS es una promesa y es propia de JS 
  // jsonplaceholder - Third API
  
  /* Sincrónico y Asincrónico */
  
  async function obtenerUsuarios() {
    const resultado = await fetch('https://jsonplaceholder.typicode.com/users');
    //console.log('resultado:', resultado);
    if (resultado.ok === true) {
      //console.log('se cumplió la condición');
      const datos = await resultado.json();
      //console.log('datos:', datos);
      return datos;
    } else {
      console.log('hubo un error');
    }
  }
  
  //obtenerUsuarios();
  
  /* ========================================================================= */
  
  /* ESTRUCTURAS DE DATOS */
  const d = document;
  const $btn = d.querySelector('button');
  const $ol = d.querySelector('ol');
  
  /* FUNCIONES */
  // let html =´´ me va mostrando cada nombre cada que de la vuelta 
  //creo una variable con let, inicia vacia y en cada iteración o vuelta con el += le agrega un elemento a la lista
  const mostrarUsuarios = async () => {
    //console.log('...mostrar usuarios...');
    const respuesta = await obtenerUsuarios();
    console.log(respuesta);
    let html = '';
    respuesta.forEach((item) => {
      //console.log('item:', item.name);
      //$ol.innerHTML = `<li>${item.name}</li>`;
      html += `<li>${item.name}</li>`;
    });
    $ol.innerHTML = html;
  };
  
  const eventListener = () => {
    $btn.addEventListener('click', mostrarUsuarios);
  };
  
  /* EVENTOS */
  d.addEventListener('DOMContentLoaded', () => {
    eventListener();
  });