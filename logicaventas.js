// SIMULACION DE COMPRAS EN RAMBEDJEANS

/*

Los datos de ventas estaran declarados en un array con nombre y precios.
Los datos del usuario se guardaran en un array con nombre, email y password.

1. Presentar un menú permitiendo el registro de email y password al usuario.
2. Presentar un menú con las opciones de compra y mostar la factura de venta.

SOLO se emite una factura por estilo.


*/

//array con lista de jeans y precios

let listaJeans=[
                {id:1001, estilo: "slimA", precio: 40},
                {id:1002, estilo:"cargoA", precio:60},
                {id:1003, estilo: "regulaA", precio: 40},
                {id:1004, estilo:"slimB", precio:40},
                {id:1005, estilo: "cargoB", precio: 60},
                {id:1006, estilo:"oversizeA", precio:55}
                ]


//declaramos una coleccion para usuario y compras
//declaramos a usuario como clase

class Usuario{
    constructor(nombre, mail, password){

    
    this.nombre= nombre;
    this.mail=mail;
    this.password=password;
    }
}

// array para guardar datos de usuarios vacio.

let usuarios=[{nombre:"a", mail:"a", password:"a"}]; //usuario de ensayo
let carritoCompra=[];
let compras=[];

// declarmaos variables para usarlas con las funciones
//inicio de  numero de facturacion en 1000.

let nfactura=1000;

//FUNCIONES

function registrarse(){ //aca guardamos los registro de usuarios

    let nombreU=prompt("ingrese su nombre: ");
    let mailU=prompt("ingrese su email: ");
    let passwordU=prompt("ingrese su password: ");

    //creamos una colleccion de info del usuairo
    let usuario= new Usuario(nombreU, mailU, passwordU);

    //subimos el usuario al array de usuarios
    usuarios.push(usuario);

    confirm(`Usted ingresó
             \n nombre: ${usuario.nombre}
            \n email: ${usuario.mail}
            \n password: ${usuario.password} `);


    //verificano valores        
    console.log(usuarios);

}



    




function ingresar(){ //aca se loggea un usuario registrado
    
    let mailR=prompt("ingrese su email: ");
    let passwordR=prompt("ingrese su password: ");
    let loggin=false;
   
          //metodo find, recibe por paramentros una funcion para buscar el ususario  
        const usuarioEncontrado= usuarios.find(usuario =>{
            return mailR===usuario.mail && passwordR==usuario.password
        } )

        if(usuarioEncontrado){// si esto es true
            loggin=true;
            alert("LOGGIN EXITOSO")
            let usuarioActivo = usuarioEncontrado; 
        }
            
        //verificano valores
        console.log(loggin)

               
        if(loggin===true){

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

            alert("error en usuario y constraseña")

        }
    
   


}

function comprar(){ //listamos los jeans y compramos
   
     let totalFactura=0.0;   
    let mascompra=prompt("Desea comprar un jeans: ? S/N");

    do{ 
       
       
        if(mascompra.toLocaleLowerCase() !== "n"){

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

            //creamos un objeto compra 

            let compra={ id:listaJeans[opventa].id,
                        estilo: listaJeans[opventa].estilo, 
                        cantidad: cantidad,
                        valorTotal: valorCompra,
                        }
            
            totalFactura=totalFactura+valorCompra;
            
            carritoCompra.push(compra); //subimos la compra al array del carrito
        }
         
        mascompra=prompt("Desea comprar un jeans: ? S/N");

    }while (mascompra.toLowerCase() !== "n" );

       


        //luego de terminar el carrito emitimos factura

        let carritoFinal={factura:nfactura, compra: carritoCompra, valorTotal: totalFactura};
        nfactura++; //incrementamos el valor de la fact

        //guardamos la factura en un array de objets factura

        compras.push(carritoFinal);

        //vaciamos el carrito de compras
        carritoCompra=[];
        
        //para validar
        console.log(carritoFinal);
        console.log(compras);

}

 
function verFacturas(){ //listamos las facturas

    if(compras.length===0){
        alert("no hay compras resgistradas")
    }else{

        let mostrar="lista de tus compras: \n";

        for(let i=0; i<compras.length; i++){
            mostrar+=`\n factura n: ${compras[i].factura }- --valor total: ${compras[i].valorTotal} $ `
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


