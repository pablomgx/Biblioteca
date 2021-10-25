/**
 * clase Usuario
 */
import {Libro} from "./Libro.js"
import {Transaccion} from "./Transaccion.js"
import {Bibliotecario} from "./Bibliotecario.js"

export class Usuario{

    /**
     * constructor, funcion que se utiliza para crear un objeto de tipo Usuario
     * @param {number} id 
     * @param {string} nombre 
     * @param {string} primerApellido 
     * @param {string} segundoApellido 
     */
    constructor(id, nombre, primerApellido, segundoApellido){
        this.id = id
        this.nombre = nombre 
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido
        this.fechaAlta = Date()
        this.fechaBaja = null
    }

///////////////////////////////////////////////////////////////////////////////////
    /**
     * funcion que modifica un usuario, 
     * no se puede modificar el id ni la fechaAlta
     * 
     * @param {array} arrayUsuario 
     * @param {string} nombre 
     * @param {string} primerApellido 
     * @param {string} segundoApellido 
     * @param {Date} fechaBaja 
     */
    modificarUsuario(arrayUsuario, nombre, primerApellido, segundoApellido, fechaBaja){
        //arrayUsuario es un array de objetos usuario
        // el id del usuario será el índice del arrayUsuario donde se guarda
        // se utiliza this.id porque se hace referencia al id del usuario que llama al método

        // con la opción ||, si no pasamos argumentos para algun campo, conservaría los anteriores
        arrayUsuario[this.id].nombre = nombre || this.nombre    
        arrayUsuario[this.id].primerApellido = primerApellido || this.primerApellido
        arrayUsuario[this.id].segundoApellido =segundoApellido || this.segundoApellido
        arrayUsuario[this.id].fechaBaja = fechaBaja || this.fechaBaja
    }

///////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * funcion para borrar Usuarios, borra el usuario que llama al método
     * 
     * una opción sería tener un campo para marcar si el objeto está activado o desactivado(borrado)
     *   
     * la opción de usar la funcion splice(a,b) del array elimina b elementos del array
     * a partir del elemneto a para eliminar un elemento en la posicion a sería array.splice(a,1)
     * arrayUsuario.splice(id,1)
     *
     * no usamos el método splice porque los índices del array cambian, como no queremos
     * que cambien, porque tienen que coincidir con el id, asignamos el valor undefined
     * a la posicion que queremos borrar, pero sigue existiendo esa posicion del array
     * 
     * @param {array} arrayUsuario 
     */
    borrarUsuario(arrayUsuario){
        // utiliza el id del objeto al que estamos haciendo referencia
        // de esta manera no tenemos que pasarle la información del id por parámetro
        arrayUsuario[this.id] = undefined 
    }
///////////////////////////////////////////////////////////////////////////////////////

    librosPrestados(){
        // accede al array de transaccion a través del campo libroId 
        // del objeto transaccion
        // recoge todos los datos 

    }

    prestamosVencidos(){

    }
} 

    // creamos un array de objetos de tipo Usuario para guardar los datos de los usuarios  
    let arrayUsuarios =[]

    // le asignamos como valor de id el de la siguiente posisión del array, empezando por el 0

    let usuario1 = new Usuario(arrayUsuarios.length,'A','perez')
    arrayUsuarios.push(usuario1)

    let usuario2 = new Usuario(arrayUsuarios.length,'B','perez')
    arrayUsuarios.push(usuario2)

    let usuario3 = new Usuario(arrayUsuarios.length,'C','perez')
    arrayUsuarios.push(usuario3)

    let usuario4 = new Usuario(arrayUsuarios.length,'D','perez')
    arrayUsuarios.push(usuario4)
    
    console.log( 'USUARIO1',usuario1)
   
    console.log('ARRAY USUARIOS',arrayUsuarios)

    usuario1.modificarUsuario(arrayUsuarios)
    usuario2.borrarUsuario(arrayUsuarios)
    console.log('ARRAY USUARIOS MODIFICADO',arrayUsuarios)
