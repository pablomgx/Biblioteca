/**
 * clase Biblioteca
 */

 import {Libro} from "./controladores/Libro.js";
 import {Usuario} from "./controladores/Usuario.js";
 import {Transaccion} from "./controladores/Transaccion.js";
 import {Bibliotecario} from "./controladores/Bibliotecario.js";
 
 class Biblioteca {

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

 }
  //crear un array de libros 
  let arrayLibros = []
  // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 0
  let libro0 = new Libro(arrayLibros.length,'El hobbit', 'Tolkien','SinMañana','1997',true,true)
  arrayLibros.push(libro0)
  let libro1 = new Libro(arrayLibros.length,'Fundacion', 'Asimov','Mañana','2001',true,true)
  arrayLibros.push(libro1)
  let libro2 = new Libro(arrayLibros.length,'Anillos', 'Tolkien','Sin','2010',true,true)
  arrayLibros.push(libro2)
  let libro3 = new Libro(arrayLibros.length,'Alatriste', 'Reverte','Sina','1987',true,true)
  arrayLibros.push(libro3)

  // crear un array de usuarios
   // creamos un array de objetos de tipo Usuario para guardar los datos de los usuarios  
   let arrayUsuarios =[]
   // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 0
   let usuario0 = new Usuario(arrayUsuarios.length,'A','perez')
   arrayUsuarios.push(usuario0)
   let usuario1 = new Usuario(arrayUsuarios.length,'B','perez')
   arrayUsuarios.push(usuario1)
   let usuario2 = new Usuario(arrayUsuarios.length,'C','perez')
   arrayUsuarios.push(usuario2)
   let usuario3 = new Usuario(arrayUsuarios.length,'D','perez')
   arrayUsuarios.push(usuario3)

   // crear un arry de bibliotecarios 
   let arrayBibliotecarios = []
   let bibliotecario0 = new Bibliotecario(arrayBibliotecarios.length,'BPablo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario0)
   let bibliotecario1 = new Bibliotecario(arrayBibliotecarios.length,'BYago','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario1)
   let bibliotecario2 = new Bibliotecario(arrayBibliotecarios.length,'BAnxo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario2)
   
  
    function prestarLibro(arrayTransacciones, idLibroPrestado, idUsuario, idBibliotecario){
        //se crea un objeto transacción que se  añade al arrayTransacciones
        //el id de la transaccion se genera a partir de la longitud del array
        let transaccion = new Transaccion(arrayTransacciones.length, idLibroPrestado, idUsuario, idBibliotecario, 7)
        arrayTransacciones.push(transaccion)
    }

 // crear el array de transacciones a partir de la funcion prestarLibro()
    let arrayTransacciones = []
    prestarLibro(arrayTransacciones,arrayLibros[1].id, arrayUsuarios[1].id,arrayBibliotecarios[1].id)


////////////////////////////////////////////////////////////////////

    // mostrar por pantalla los datos de la transaccion de id  = idTransaccion
   
    let idTransaccion = 0;

    console.log ('Primer Prestamo ', arrayTransacciones[idTransaccion])
    console.log('Id del préstamo : ', arrayTransacciones[idTransaccion].id)
    console.log('Libro del préstamo : ', arrayLibros[arrayTransacciones[idTransaccion].idLibroPrestado].titulo)
    console.log('Usuario del préstamo : ', arrayUsuarios[arrayTransacciones[idTransaccion].idUsuarioAdquerido].nombre)
    console.log('Bibliotecario del préstamo : ', arrayBibliotecarios[arrayTransacciones[idTransaccion].idFirmaBibliotecario].nombre)
    console.log('Fecha del préstamo : ', arrayTransacciones[idTransaccion].fechaTransaccion)
    console.log('Tipo de préstamo : ', arrayTransacciones[idTransaccion].tipoPrestamo)

///////////////////////////////////////////////////////////////////////////////////
