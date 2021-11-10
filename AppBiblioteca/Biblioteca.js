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
     * @param {number} id 
     * @param {strin} nombre 
     * @param {string} direccion 
     * @param {string} codigoPostal 
     * @param {string} pais 
     */
    constructor(id, nombre, direccion, codigoPostal, pais){
        this.id = id
        this.nombre = nombre 
        this.direccion = direccion
        this.codigoPostal = codigoPostal
        this.pais = pais
    }

    /**
     * muestra información de los libros cuyo préstamo está vencido
     * @param {*} arrayTransaccion 
     * @param {*} arrayLibros 
     */
    librosConPrestamoExpirado(arrayTransaccion,arrayLibros){

        console.log('\nLIBROS DE LA BIBLIOTECA CON PRESTAMO VENCIDO\n')
        arrayTransaccion.forEach(transaccion => {
            if (transaccion.fechaLimitePrestamo.getTime() < Date.now()){ //prestamo vencido
                console.log('Libros de la biblioteca con prestamo Vencido : ', arrayLibros[transaccion.idLibroPrestado-1].titulo) 
            }  
        });
    }

 }
    /**
     * funcion que muestra por consola los datos de un préstamo cuyo id coincide con el enviado por parámetro
     * @param {entero} idTransaccion 
     */
    function visualizarPrestamo(idTransaccion){
        let indiceArray = idTransaccion-1
        console.log('Id del préstamo : ', arrayTransacciones[indiceArray].id)
        console.log('Libro del préstamo : ', arrayLibros[arrayTransacciones[indiceArray].idLibroPrestado-1].titulo)
        console.log('Usuario del préstamo : ', arrayUsuarios[arrayTransacciones[indiceArray].idUsuarioAdquerido-1].nombre)
        console.log('Bibliotecario del préstamo : ', arrayBibliotecarios[arrayTransacciones[indiceArray].idFirmaBibliotecario-1].nombre)
        console.log('Fecha del préstamo : ', arrayTransacciones[indiceArray].fechaTransaccion)
        console.log('Tipo de préstamo : ', arrayTransacciones[indiceArray].tipoPrestamo)
        console.log('Fecha Limite de Préstamo : ', arrayTransacciones[indiceArray].fechaLimitePrestamo,'\n')
    }


    /**
     * función que inserta un objeto transaccion en el arrayTransacciones con los datos pasados por parámetro
     * del libro prestado, el usuario al que se lo prestan, el bibliotecario que firma el prestamo y el tipo de prestamo
     * @param {} arrayTransacciones 
     * @param {*} idLibroPrestado 
     * @param {*} idUsuario 
     * @param {*} idBibliotecario 
     * @param {*} tipoPrestamo 
     */
    function prestarLibro(arrayTransacciones, idLibroPrestado, idUsuario, idBibliotecario,tipoPrestamo){
        //se crea un objeto transacción que se  añade al arrayTransacciones
        //el id de la transaccion se genera a partir de la longitud del array
        let transaccion = new Transaccion(arrayTransacciones.length+1, idLibroPrestado, idUsuario, idBibliotecario, tipoPrestamo)
        //solo permite presar un libro que no este prestado
        if (arrayLibros[idLibroPrestado-1].prestado === false){
            //función que calcula si el usuario no tiene aun 5 libros prestados
            if (arrayUsuarios[idUsuario-1].librosPrestados(arrayTransacciones,arrayLibros) < 5) {
                arrayTransacciones.push(transaccion)

                // mostrar por pantalla los datos de la transaccion que se acaba de realizar
                // de id  = idTransaccion = arrayTransacciones.length - 1
        
                console.log('\nPRESTAMO REALIZADO\n')
        
                visualizarPrestamo(arrayTransacciones.length)
                let posicionArray = arrayTransacciones.length - 1

                //se actualiza la propiedad prestado del objeto libro a true
                arrayLibros[arrayTransacciones[posicionArray].idLibroPrestado-1].prestado = true
            }else{
                console.log("No se pueden prestar mas de 5 libros")
            }    
        }else{
            console.log("Este libro ya está prestado")
        }
    }

     /**
     * función que lista todos los libros que hay en la bibioteca a partir de la información contenida en arrayLibros
     * @param {*} arrayLibros 
     */
    function listarLibros(arrayLibros){
        console.log ("\nLISTA DE LIBROS\n")

        console.log('Titulo    //  Autor    //  Editorial //F.Prim.Edicion//Prestado//A la venta','\n')
        arrayLibros.forEach(element => {
           
            console.log(element.titulo,'    ',element.autor,'    ',element.editorial,'    ',element.fechaPrimeraEdicion
                      ,'    ',  element.prestado,'    ',element.venta,'\n')

                    });
    }

    /**
     * funcion que muestra el total de préstamos actuales, indicando cuantos de ellos se encuentran en vigor
     * @param {*} arrayTransacciones 
     * @returns 
     */
    function totalPrestamosActuales(arrayTransacciones){
        let totalPrestamosEnVigor = 0
        console.log('\nTOTAL DE PRESTAMOS ACTUALES\n')
        arrayTransacciones.forEach(transaccion =>{
            visualizarPrestamo(transaccion.id)
   
            if (transaccion.fechaLimitePrestamo.getTime() > Date.now()){
                totalPrestamosEnVigor = totalPrestamosEnVigor + 1
            }
        });
        console.log('Total de préstamos en vigor :: \n', totalPrestamosEnVigor)
        return totalPrestamosEnVigor
    }

    /**
     * función que envía un aviso al usuario cuyo préstamo ha superado el tiempo permitido
     * @param {} arrayTransacciones 
     */
    function  enviarAviso(arrayTransacciones){
        console.log('\n AVISOS POR EMAIL A USUARIOS QUE SE HAN PASADO DE LA FECHA LIMITE DE PRÉSTAMO\n')
        for(let i=0;i<arrayTransacciones.length;i++){
            if(arrayTransacciones[i].fechaLimitePrestamo.getTime() < Date.now()){
                console.log('El usuario con id '+ arrayTransacciones[i].idUsuarioAdquerido +
                ' ',arrayUsuarios[arrayTransacciones[i].idUsuarioAdquerido-1].nombre,
                ' \ncon el id del libro '+arrayTransacciones[i].idLibroPrestado +
                ' ',arrayLibros[arrayTransacciones[i].idLibroPrestado-1].titulo,
                ' \ncon el email ' +' '+arrayUsuarios[arrayTransacciones[i].idUsuarioAdquerido-1].email+

                ' \nse ha pasado de la fecha limite: '+ arrayTransacciones[i].fechaLimitePrestamo+
                '\nFecha actual: '+ Date() +'\n')
            }
        }
    }

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//////////////// A PARTIR DE AQUÍ SON PRUEBAS DE LA FUNCIONES //////////////
 ///////////////////////////////   PRUEBAS    /////////////////////////////

  //CREAR UN ARRAY DE LIBROS
  let arrayLibros = []
  // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 1
  let libro1 = new Libro(arrayLibros.length+1,'El hobbit', 'Tolkien','SinMañana','1997',false,true)
  arrayLibros.push(libro1)
  let libro2 = new Libro(arrayLibros.length+1,'Fundacion', 'Asimov','Mañana','2001',false,true)
  arrayLibros.push(libro2)
  let libro3 = new Libro(arrayLibros.length+1,'Anillos', 'Tolkien','Sin','2010',false,true)
  arrayLibros.push(libro3)
  let libro4 = new Libro(arrayLibros.length+1,'Alatriste', 'Reverte','Sina','1987',false,true)
  arrayLibros.push(libro4)
  let libro5 = new Libro(arrayLibros.length+1,'Falcó', 'Perez-Reverte','Sina','1987',false,true)
  arrayLibros.push(libro5)

  console.log(arrayLibros)

  // CREAR UN ARRAY DE USUARIOS
   // creamos un array de objetos de tipo Usuario para guardar los datos de los usuarios  
   let arrayUsuarios =[]
   // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 1
   let usuario1 = new Usuario(arrayUsuarios.length+1,'Alberto','perez','gomez','Aperez@gmail.com')
   arrayUsuarios.push(usuario1)
   let usuario2 = new Usuario(arrayUsuarios.length+1,'Benito','perez','gomez','Bperez@gmail.com')
   arrayUsuarios.push(usuario2)
   let usuario3 = new Usuario(arrayUsuarios.length+1,'Carlos','perez','gomez','Cperez@gmail.com')
   arrayUsuarios.push(usuario3)
   let usuario4 = new Usuario(arrayUsuarios.length+1,'Dorotea','perez','gomez','Dperez@gmail.com')
   arrayUsuarios.push(usuario4)
   let usuario5 = new Usuario(arrayUsuarios.length+1,'Elena','perez','gomez','Eperez@gmail.com')
   arrayUsuarios.push(usuario5)

   console.log(arrayUsuarios)

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

   console.log(arrayBibliotecarios)
   
  ///////////////////////////////////////////////////////////////////////////////////////

 // crear el array de transacciones a partir de la funcion prestarLibro()
    let arrayTransacciones = []
    
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[2].id,arrayBibliotecarios[0].id,14)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[1].id,arrayBibliotecarios[0].id,7)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[0].id,arrayBibliotecarios[0].id,7)
    prestarLibro(arrayTransacciones,arrayLibros[3].id, arrayUsuarios[3].id,arrayBibliotecarios[3].id,14)

    //se crean dos objetos de tipo Transaccion donde la fecha de devolución es mayor que la fecha de hoy 
    // poniendo en último de los parámetros a -1
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[3].id,arrayBibliotecarios[0].id,-1)
    prestarLibro(arrayTransacciones,arrayLibros[2].id, arrayUsuarios[4].id,arrayBibliotecarios[0].id,-1)

    console.log(arrayTransacciones)
  ///////////////////////////////////////////////////////////////////////////////////
  // PRUEBAS DE LA FUNCION CREADA EN LA CLASE BIBLIOTECA
  // creación de la biblioteca

   // let biblioteca1 = new Biblioteca(1,'Gonzalez Garces','Coruña','14001','España')
   // biblioteca1.librosConPrestamoExpirado(arrayTransacciones,arrayLibros)
 
  /////////////////////////////////////////////////////////////////////
  // PRUEBAS DE LA FUNCION CREADA EN LA CLASE BIBLIOTECARIO

    bibliotecario1.historialTransaccionesExpiradas(arrayTransacciones)

  //////////////////////////////////////////////////////////////////////
   // PRUEBAS DE LA FUNCION CREADA EN LA CLASE USUARIO

     usuario3.librosPrestados(arrayTransacciones,arrayLibros)

   //////////////////////////////////////////////////////////////////////
   // PRUEBAS DE LA FUNCION CREADA EN LA CLASE LIBRO

   libro3.historicoPrestamos(arrayTransacciones)

    //////////////////////////////////////////////////////////////////////
   // PRUEBAS DE LAS FUNCIONES CREADAS DETRÁS DE LA CLASE BIBLIOTECA

   // prestarLibro(arrayTransacciones,arrayLibros[4].id, arrayUsuarios[3].id,arrayBibliotecarios[3].id,14)
   
  //  listarLibros(arrayLibros)

  //  totalPrestamosActuales(arrayTransacciones)

   // enviarAviso(arrayTransacciones)

   /////////////////////////////////////////////////////////////
