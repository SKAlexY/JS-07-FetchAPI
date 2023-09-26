/*
Retomando las APIs...

   - APIs internas (API DOM, localStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador

   - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.


   Elemplo de la licuadora, donde la licuadora es el cliente, el enchuge es la API y el recurso que se solicita es la electricidad.


   Ventajas de utilizar APIs

      - Reestructurar y organizar los sistemas de forma que sean mas sensillos de usar 
      - Permiten que los sistemas sean mas robustos 
      - Reducen los costos de mantenimiento 
      - Permiten que los sistemas sean escalables 
*/

/*
Asincronia 

Por defecto, JS se comporta de una forma sincrona (arriba/abajo, izq/der), es decir, utilizamos JS de una forma autobloqueante (si hay un errar, lo que esta despues de ese error no se ejecuta).
*/

//Ejemplo de una operacion sincronica 
console.log("Inicia mi operacion sincrona");

function dosSincronica(){
    console.log("Dos");
}

function unoSincronico(){
    console.log("Uno");
    dosSincronica();
    console.log("Tres");
}
unoSincronico();
console.log("Finalizamos mi operacion sincrona")

//Los casos donde me conviene tener operacion sincronas, son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones"normales").


/*
Asincronia

es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar cirtos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada).
*/

//Ejemplo de JavaScript Asincrona

console.log("Inicia mi operacion asincronica");
function dosAsync(){
    console.log("Uno")
    setTimeout(function(){ //setTime para ejecutar esta funcion despues de 3 segundos 
        console.log("Dos");
    }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Finaliza mi operacion asincrona")

/*
Mecanismos para manejar la asincronia

Para controlar la asincronia en JS, podemos usar algunos de estos mecanismos:

    - callback: la forma mas clasica de manejar la asincronia. Se el conoce como (llamada de vuelta) , basicamente es pasar una funcion como parametro de otra funcion, y se ejecutan una vez que se cumpla la condicion esperada.
    //Metodo .map de los arrays 

    - promesas: son objetos que representan un valor al memento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tienen las primesas, es que no se anidan, en una sola fucion podemos manejar ambas situaciones.

    Las promesas tienen 3 estados posibles: 

        - pending: estado inicial, cuando se crea la promesa. Aqui aun no hay resultados.
        - fillfiled: cuando la operacion asincrona se resueve con exito (resolve)
        - rejected: cuando la operacion asincrona falla (reject)

    - async/await
*/

//Funcion especial para consumir APIs y manejar promesas 

//instruccion de la conexion a mi servido 
fetch ("https://fakestoreapi.com/products/1")

//dos escenarios (obtengo respuesta o no obtengo respuesta)

.then(datos => { //cuando la promesa se resuelve, ejecuto esta funcion
    console.log(datos);
    return datos.json(); //convertir la respuesta
})

.catch(error =>{
    console.log("Error, no encontramos el producto");
    console.log(error.message);
})

/*
Sintaxis del fetch (con promesas)

ferch (url a consumir)
    .then(response=> response.text()) //manejo de la respuesta
    .then (datos => console.log(datos)) //menejos del dato 

    .catch(error => console.log(error));
 */

//asigno el ferch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1")

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion 

//usar el metodo then par manejar la respuesta (lo relleno con la respuesta)
.then(function(resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})

//uso el metodo then para manejar el producto (lo relleno con la info del producto)
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
.catch(function(error){
    console.log("Error", error);
})


//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}


//profucto convertido a un objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }}

    //Revisar informacion de un objeto con texto plano
    console.log(productoServidor.category);

    //Revisar informacion de un objeto 
    console.log(productoJSON.price);


    //Objeto JSON que voy a mandar aun servidor
    let paciente = {
        nombre: "Felipe",
        edad: 31,
        estatus: "Registado"
    }

    console.log(paciente);

    //Necesito convertirlo a una cadena de texto para que el servidor lo lea

    let pacienteStringifeado = JSON.stringify(paciente);
    console.log(pacienteStringifeado);

    let pacienteServidor = '{"nombre":"Felipe","edad":31,"estatus":"Registado"}';
    
    let pacienteJSON = JSON.parse(pacienteServidor);
    console.log(pacienteJSON);

    //Si mando un JSON al servidor, lo stringifeo
    //Si recibo un string del servidor, lo parseo 

    function generarTarjetaProducto(producto){

        //crar elemento
        crateElement(img);
        img.src = producto.image;
    }



//Motodo POST para enviar un nuevo producto a nuestra BD de la FakeStoreAPI

buttonEnviarProducto.addEcentList("click", fetch)

fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para seralizar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImage.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber si mi producto llego con bien al servidor)
            .then(json=>console.log(json)) //impresion en consola para revisar la info 