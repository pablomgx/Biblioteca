/**
 * clase Biblioteca
 */

 import {Libro} from "./controladores/Libro.js";
 import {Usuario} from "./controladores/Usuario.js";
 import {Transaccion} from "./controladores/Transaccion.js";
 import {Bibliotecario} from "./controladores/Bibliotecario.js";
 
 export class Biblioteca {

    /**
     * constructor, funcion que se utiliza para crear un objeto de tipo Biblioteca
     * 
     * @param {*} id 
     * @param {*} nombre 
     * @param {*} direccion 
     * @param {*} codigoPostal 
     * @param {*} pais 
     */
    constructor(id, nombre, direccion, codigoPostal, pais){
        this.id = id
        this.nombre = nombre 
        this.direccion = direccion
        this.codigoPostal = codigoPostal
        this.pais = pais
    }

    librosConPrestamoExpirado(arrayTransaccion,arrayLibros){

        console.log('\nLIBROS DE LA BIBLIOTECA CON PRESTAMO VENCIDO\n')
        arrayTransaccion.forEach(transaccion => {
            if (transaccion.fechaLimitePrestamo.getTime() > Date.now()){ //prestamo vencido
                console.log('Libros de la biblioteca con prestamo Vencido : ', arrayLibros[transaccion.idLibroPrestado-1].titulo) 
            }  
        });
    }

 }

    function prestarLibro(arrayTransacciones, idLibroPrestado, idUsuario, idBibliotecario,tipoPrestamo){
        //se crea un objeto transacción que se  añade al arrayTransacciones
        //el id de la transaccion se genera a partir de la longitud del array
        let transaccion = new Transaccion(arrayTransacciones.length+1, idLibroPrestado, idUsuario, idBibliotecario, tipoPrestamo)
        arrayTransacciones.push(transaccion)

        // mostrar por pantalla los datos de la transaccion que se acaba de realizar
        // de id  = idTransaccion = arrayTransacciones.length - 1
       // console.log( 'longitud del array transacciones: ',arrayTransacciones.length)
       console.log('\nPRESTAMO REALIZADO\n') 
       let idTransaccion = arrayTransacciones.length-1
        console.log('Id del préstamo : ', arrayTransacciones[idTransaccion].id)
        console.log('Libro del préstamo : ', arrayLibros[arrayTransacciones[idTransaccion].idLibroPrestado-1].titulo)
        console.log('Usuario del préstamo : ', arrayUsuarios[arrayTransacciones[idTransaccion].idUsuarioAdquerido-1].nombre)
        console.log('Bibliotecario del préstamo : ', arrayBibliotecarios[arrayTransacciones[idTransaccion].idFirmaBibliotecario-1].nombre)
        console.log('Fecha del préstamo : ', arrayTransacciones[idTransaccion].fechaTransaccion)
        console.log('Tipo de préstamo : ', arrayTransacciones[idTransaccion].tipoPrestamo)
        console.log('Fecha Limite de Préstamo : ', arrayTransacciones[idTransaccion].fechaLimitePrestamo)

        //se actualiza la propiedad prestado del objeto libro a true
        arrayLibros[arrayTransacciones[idTransaccion].idLibroPrestado-1].prestado = true
    }

    function listarLibros(arrayLibros){
        console.log ("\nLISTA DE LIBROS\n")

        console.log('Titulo    //  Autor    //  Editorial //F.Prim.Edicion//Prestado//A la venta','\n')
        arrayLibros.forEach(element => {
           
            console.log(element.titulo,'    ',element.autor,'    ',element.editorial,'    ',element.fechaPrimeraEdicion
                      ,'    ',  element.prestado,'    ',element.venta,'\n')

                    });
    }

    function totalPrestamosActuales(arrayTransacciones){
        let totalPrestamosEnVigor = 0
        console.log('\nTOTAL DE PRESTAMOS ACTUALES\n')
        arrayTransacciones.forEach(transaccion =>{
            console.log('Id del préstamo :: ', transaccion.id)
            console.log('Libro del préstamo :: ', arrayLibros[transaccion.idLibroPrestado-1].titulo)
            console.log('Usuario del préstamo :: ', arrayUsuarios[transaccion.idUsuarioAdquerido-1].nombre)
            console.log('Bibliotecario del préstamo :: ', arrayBibliotecarios[transaccion.idFirmaBibliotecario-1].nombre)
            console.log('Fecha del préstamo :: ', transaccion.fechaTransaccion)
            console.log('Tipo de préstamo :: ', transaccion.tipoPrestamo)
            console.log('Fecha Limite de Préstamo :: ', transaccion.fechaLimitePrestamo,'\n')
         
            if (transaccion.fechaLimitePrestamo.getTime() > Date.now()){
                totalPrestamosEnVigor = totalPrestamosEnVigor + 1
            }
        });
        console.log('Total de préstamos en vigor :: \n', totalPrestamosEnVigor)
        return totalPrestamosEnVigor
    }

    function  enviarAviso(arrayTransacciones){
        console.log('\n AVISOS POR EMAIL A USUARIOS QUE SE HAN PASADO DE LA FECHA LIMITE DE PRÉSTAMO\n')
        for(let i=0;i<arrayTransacciones.length;i++){
            if(arrayTransacciones[i].fechaLimitePrestamo.getTime() < Date.now()){
                console.log('El usuario con id '+ arrayTransacciones[i].idUsuarioAdquerido +
                ' ',arrayUsuarios[arrayTransacciones[i].idUsuarioAdquerido-1].nombre,
                ' \ncon el id del libro '+arrayTransacciones[i].idLibroPrestado +
                ' ',arrayLibros[arrayTransacciones[i].idLibroPrestado-1].titulo,
                ' \ncon el email ' +' ',arrayUsuarios[arrayTransacciones[i].idUsuarioAdquerido-1].email,

                ' \nse ha pasado de la fecha limite./nFecha actual: '+ Date() +
                '\nFecha límite: '+ arrayTransacciones[i].fechaLimitePrestamo,'\n')
            }
        }
    }

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

 //////////////   PRUEBAS    ////////////////////

  //CREAR UN ARRAY DE LIBROS
  let arrayLibros = []
  // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 1
  let libro1 = new Libro(arrayLibros.length+1,'El hobbit', 'Tolkien','SinMañana','1997',true,true)
  arrayLibros.push(libro1)
  let libro2 = new Libro(arrayLibros.length+1,'Fundacion', 'Asimov','Mañana','2001',true,true)
  arrayLibros.push(libro2)
  let libro3 = new Libro(arrayLibros.length+1,'Anillos', 'Tolkien','Sin','2010',true,true)
  arrayLibros.push(libro3)
  let libro4 = new Libro(arrayLibros.length+1,'Alatriste', 'Reverte','Sina','1987',true,true)
  arrayLibros.push(libro4)
  let libro5 = new Libro(arrayLibros.length+1,'Falcó', 'Perez-Reverte','Sina','1987',true,true)
  arrayLibros.push(libro5)

console.log(arrayLibros)

  // CREAR UN ARRAY DE USUARIOS
   // creamos un array de objetos de tipo Usuario para guardar los datos de los usuarios  
   let arrayUsuarios =[]
   // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 1
   let usuario1 = new Usuario(arrayUsuarios.length+1,'A','perez','Aperez@gmail.com')
   arrayUsuarios.push(usuario1)
   let usuario2 = new Usuario(arrayUsuarios.length+1,'B','perez','Bperez@gmail.com')
   arrayUsuarios.push(usuario2)
   let usuario3 = new Usuario(arrayUsuarios.length+1,'C','perez','Cperez@gmail.com')
   arrayUsuarios.push(usuario3)
   let usuario4 = new Usuario(arrayUsuarios.length+1,'D','perez','Dperez@gmail.com')
   arrayUsuarios.push(usuario4)
   let usuario5 = new Usuario(arrayUsuarios.length+1,'E','perez','Dperez@gmail.com')
   arrayUsuarios.push(usuario5)

   // CREAR UN ARRAY DE BIBLIOTECARIOS
    // creamos un array de objetos de tipo Bibliotecario para guardar los datos de los bibliotecarios 
   let arrayBibliotecarios = []
    // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 1
   let bibliotecario1 = new Bibliotecario(arrayBibliotecarios.length+1,'BPablo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario1)
   let bibliotecario2 = new Bibliotecario(arrayBibliotecarios.length+1,'BYago','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario2)
   let bibliotecario3 = new Bibliotecario(arrayBibliotecarios.length+1,'BAnxo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario3)
   let bibliotecario4 = new Bibliotecario(arrayBibliotecarios.length+1,'BLaura','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario4)
   let bibliotecario5 = new Bibliotecario(arrayBibliotecarios.length+1,'BAndrea','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario5)
   
  ///////////////////////////////////////////////////////////////////////////////////////

 // crear el array de transacciones a partir de la funcion prestarLibro()
    let arrayTransacciones = []
    //se crean dos objetos de tipo Transaccion donde la fecha de devolución es mayor que la fecha de hoy 
    // poniendo en último de los parámetros a -1
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[3].id,arrayBibliotecarios[0].id,-1)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[4].id,arrayBibliotecarios[0].id,-1)

    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[2].id,arrayBibliotecarios[0].id,14)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[1].id,arrayBibliotecarios[0].id,7)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[0].id,arrayBibliotecarios[0].id,7)
    prestarLibro(arrayTransacciones,arrayLibros[3].id, arrayUsuarios[3].id,arrayBibliotecarios[3].id,14)

  ///////////////////////////////////////////////////////////////////////////////////
  // PRUEBAS DE LA FUNCION CREADA EN LA CLASE BIBLIOTECA
  // creación de la biblioteca

    let biblioteca1 = new Biblioteca(1,'Gonzalez Garces','Coruña','14001','España')
    biblioteca1.librosConPrestamoExpirado(arrayTransacciones,arrayLibros)
 
  /////////////////////////////////////////////////////////////////////
  // PRUEBAS DE LA FUNCION CREADA EN LA CLASE BIBLIOTECARIO

  //  bibliotecario1.historialTransaccionesExpiradas(arrayTransacciones)

  //////////////////////////////////////////////////////////////////////
   // PRUEBAS DE LA FUNCION CREADA EN LA CLASE USUARIO

   //   usuario3.librosPrestados(arrayTransacciones,arrayLibros)

   //////////////////////////////////////////////////////////////////////
   // PRUEBAS DE LA FUNCION CREADA EN LA CLASE LIBRO

   //libro3.historicoPrestamos(arrayTransacciones)

    //////////////////////////////////////////////////////////////////////
   // PRUEBAS DE LAS FUNCIONES CREADAS EN EL MAIN 

   // prestarLibro(arrayTransacciones,arrayLibros[4].id, arrayUsuarios[3].id,arrayBibliotecarios[3].id,14)
   
   // listarLibros(arrayLibros)

   // totalPrestamosActuales(arrayTransacciones)

    enviarAviso(arrayTransacciones)

   //////////////////////////////////////////////////////////////////
  