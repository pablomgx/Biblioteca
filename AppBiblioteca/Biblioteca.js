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

 }

 ////////////////////////////////////////////////////////////////////////////
 // PRUEBAS
  //crear un array de libros 
  let arrayLibros = []
  // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 0
  let libro1 = new Libro(arrayLibros.length+1,'El hobbit', 'Tolkien','SinMañana','1997',true,true)
  arrayLibros.push(libro1)
  let libro2 = new Libro(arrayLibros.length+1,'Fundacion', 'Asimov','Mañana','2001',true,true)
  arrayLibros.push(libro2)
  let libro3 = new Libro(arrayLibros.length+1,'Anillos', 'Tolkien','Sin','2010',true,true)
  arrayLibros.push(libro3)
  let libro4 = new Libro(arrayLibros.length+1,'Alatriste', 'Reverte','Sina','1987',true,true)
  arrayLibros.push(libro4)
  let libro5 = new Libro(arrayLibros.length+1,'Alatriste', 'Reverte','Sina','1987',true,true)
  arrayLibros.push(libro5)

console.log(arrayLibros)
  // crear un array de usuarios
   // creamos un array de objetos de tipo Usuario para guardar los datos de los usuarios  
   let arrayUsuarios =[]
   // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 0
   let usuario1 = new Usuario(arrayUsuarios.length+1,'A','perez','Aperez@gmail.com')
   arrayUsuarios.push(usuario1)
   let usuario2 = new Usuario(arrayUsuarios.length+1,'B','perez','Bperez@gmail.com')
   arrayUsuarios.push(usuario2)
   let usuario3 = new Usuario(arrayUsuarios.length+1,'C','perez','Cperez@gmail.com')
   arrayUsuarios.push(usuario3)
   let usuario4 = new Usuario(arrayUsuarios.length+1,'D','perez','Dperez@gmail.com')
   arrayUsuarios.push(usuario4)
   let usuario5 = new Usuario(arrayUsuarios.length+1,'D','perez','Dperez@gmail.com')
   arrayUsuarios.push(usuario5)

   // crear un arry de bibliotecarios 
   let arrayBibliotecarios = []
   let bibliotecario1 = new Bibliotecario(arrayBibliotecarios.length+1,'BPablo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario1)
   let bibliotecario2 = new Bibliotecario(arrayBibliotecarios.length+1,'BYago','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario2)
   let bibliotecario3 = new Bibliotecario(arrayBibliotecarios.length+1,'BAnxo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario3)
   let bibliotecario4 = new Bibliotecario(arrayBibliotecarios.length+1,'BYago','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario4)
   let bibliotecario5 = new Bibliotecario(arrayBibliotecarios.length+1,'BAnxo','Parada','Pita')
   arrayBibliotecarios.push(bibliotecario5)
   
  /////////////////////////////////////////////////


    function prestarLibro(arrayTransacciones, idLibroPrestado, idUsuario, idBibliotecario){
        //se crea un objeto transacción que se  añade al arrayTransacciones
        //el id de la transaccion se genera a partir de la longitud del array
        let transaccion = new Transaccion(arrayTransacciones.length+1, idLibroPrestado, idUsuario, idBibliotecario, -1)
        arrayTransacciones.push(transaccion)

        // mostrar por pantalla los datos de la transaccion que se acaba de realizar
        // de id  = idTransaccion = arrayTransacciones.length - 1
        console.log(arrayTransacciones.length)
        let idTransaccion = arrayTransacciones.length-1
        console.log('Id del préstamo : ', arrayTransacciones[idTransaccion].id)
        console.log('Libro del préstamo : ', arrayLibros[arrayTransacciones[idTransaccion].idLibroPrestado].titulo)
        console.log('Usuario del préstamo : ', arrayUsuarios[arrayTransacciones[idTransaccion].idUsuarioAdquerido].nombre)
        console.log('Bibliotecario del préstamo : ', arrayBibliotecarios[arrayTransacciones[idTransaccion].idFirmaBibliotecario].nombre)
        console.log('Fecha del préstamo : ', arrayTransacciones[idTransaccion].fechaTransaccion)
        console.log('Tipo de préstamo : ', arrayTransacciones[idTransaccion].tipoPrestamo)
        console.log('Fecha Limite de Préstamo : ', arrayTransacciones[idTransaccion].fechaLimitePrestamo)

        //se actualiza la propiedad prestado del objeto libro a true
        arrayLibros[arrayTransacciones[idTransaccion].idLibroPrestado].prestado = true
    }

    function listarLibros(arrayLibros){
        console.log ("\nLISTA DE LIBROS\n")

        console.log('Titulo    //  Autor    //  Editorial //F.Prim.Edicion//Prestado//A la venta','\n')
        arrayLibros.forEach(element => {
           
            console.log(element.titulo,'    ',element.autor,'    ',element.editorial,'    ',element.fechaPrimeraEdicion
                      ,'    ',  element.prestado,'    ',element.venta,'\n')

                    });
    }

    function totalLibrosPrestados(arrayLibros){
        let totalPrestamosActuales = 0
        arrayLibros.forEach(element =>{
            if (element.prestado === true){
                totalPrestamosActuales = totalPrestamosActuales + 1
            }
        });
        return totalPrestamosActuales
    }


////////////////////////////////////////////////////////

 // crear el array de transacciones a partir de la funcion prestarLibro()
    let arrayTransacciones = []
    prestarLibro(arrayTransacciones,arrayLibros[1].id, arrayUsuarios[1].id,arrayBibliotecarios[1].id)

///////////////////////////////////////////////////////////////////////////////////

    // llamada a la funcion listarLibros con el arrayLibros
  
    //listarLibros(arrayLibros)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[2].id,arrayBibliotecarios[1].id)
    prestarLibro(arrayTransacciones,arrayLibros[3].id, arrayUsuarios[3].id,arrayBibliotecarios[1].id)
   //prestarLibro(arrayTransacciones,arrayLibros[3].id, arrayUsuarios[3].id,arrayBibliotecarios[3].id)

   bibliotecario1.historialTransacciones(arrayTransacciones)

