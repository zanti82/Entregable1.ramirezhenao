// SIMULACION DE COMPRAS EN RAMBEDJEANS

/*

Los datos de ventas estaran declarados en un array con nombre y precios.
Los datos del usuario se guardaran en un array con nombre, email y password.

1. Presentar un menú permitiendo el registro de email y password al usuario.
2. Presentar un menú con las opciones de compra y mostar la factura de venta.

SOLO se emite una factura por estilo.


*/

//array con lista de jeans y precios

const listaJeans=[
                {estilo: "slimA", precio: 40}, {estilo:"cargoA", precio:60},
                {estilo: "regulaA", precio: 40},{estilo:"slimB", precio:40},
                {estilo: "cargoB", precio: 60},{estilo:"oversizeA", precio:55}
                ]

// array para guardar datos de usuarios vacio.

let usuarios=[{nombre:"a", mail:"a", pass:"a"}]; //usuario de ensayo
let compras=[];
//declaramos una coleecion para usuario

let usuario={};
let compra={};

// declarmaos variables para usarlas con las funciones
let nfactura=1000;

//FUNCIONES

function registrarse(){ //aca guardamos los registro de usuarios

    let nombreU=prompt("ingrese su nombre: ");
    let mailU=prompt("ingrese su email: ");
    let passwordU=prompt("ingrese su password: ");

    //creamos una colleccion de info del usuairo
    usuario={nombre:nombreU, mail:mailU, pass: passwordU};

    //subimos el usuario al array de usuarios
    usuarios.push(usuario);

    confirm(`Usted ingresó
             \n nombre: ${usuario.nombre}
            \n email: ${usuario.mail}
            \n password: ${usuario.pass} `);

}


function ingresar(){ //aca se loggea un usuario registrado
    
    let mailR=prompt("ingrese su email: ");
    let passwordR=prompt("ingrese su password: ");

    usuarios.forEach(usuario => {
        if(mailR===usuario.mail && passwordR==usuario.pass){

            alert("LOGGIN EXITOSO")
            let opjeans=0;
            do{
                opjeans=parseInt(prompt(`Qué deseas hacer hoy?
                                        \n 1. comprar
                                        \n 2. resumen de compra
                                        \n 0. salir`));
                
                switch (opjeans) {
                    case 1:
                        comprar();
                        break;
                    case 2:
                        verFacturas();
                    
                        break;
                    case 0:
                                           
                        break;
                
                    default: alert("opción errada");
                        break;
                }
                
            }while(opjeans!==0);

        }else{
            alert("EL mail o password son incorrectos")
    
        }
        
    });


}

function comprar(){ //listamos los jeans y compramos
    
    //para no reescribri el codigo si se ingresa mas opciones de compra
    //creamos una variable que nos guarde un string para mostrar por un prompt

    let mostrar="escoge la opcion que necesites: \n";
    for(let i=0; i<listaJeans.length; i++){
        mostrar+=`\n ${i}-${listaJeans[i].estilo}--${listaJeans[i].precio} $ `
    }

     
       
        let opventa=0;
        let cantidad=0;
        opventa=parseInt(prompt(mostrar));
        cantidad=parseInt(prompt("cuantas unidades? "));

        let valorjeans= listaJeans[opventa].precio;
        let valorCompra= valorjeans*cantidad;

        compra={factura:nfactura, jean: listaJeans[opventa].estilo, valorNeto:valorCompra}
        nfactura++;

        compras.push(compra)

        console.log(compras)


}

 
function verFacturas(){ //listamos las facturas

    if(compras.length===0){
        alert("no hay compras resgistradas")
    }else{

        let mostrar="lista de tus compras: \n";

        for(let i=0; i<compras.length; i++){
            mostrar+=`\n factura n: ${compras[i].factura}- estilo: -${compras[i].jean}--valor total: ${compras[i].valorNeto} $ `
        }
        
        alert(mostrar);
    }

}





//INICIO DEL PROGRAMA

alert("BIENVENIDO AL CARRITO DE COMPRAS DE RAMBED JEANS");

//variable global para que la lea el while.

let op=0;


do{

    op=parseInt(prompt(`ingresa una las siguientes opciones:
           \n 1. registrarse \n 2. ingresar \n 0. salir`));

    switch (op) {
        case 1:
            registrarse();
                        
            break;
        
        case 2:
            ingresar();
        
            break;
        
        case 0:
            confirm("gracias por usar rambedJeans");
                    
            break;
    
        default:
            alert("opción errada");
            break;
    }

}while(op!==0);


