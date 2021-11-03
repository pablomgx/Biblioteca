/**  *******
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
     * @param {string} email 
     */
  
    constructor(id, nombre, primerApellido, segundoApellido, email){
    
        this.id = id
        this.nombre = nombre 
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido
        this.email = email
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
     * @param {string} email 
     * @param {Date} fechaBaja 
     */
    modificarUsuario(arrayUsuario, nombre, primerApellido, segundoApellido, email, fechaBaja){
        //arrayUsuario es un array de objetos usuario
        // el id del usuario será el índice del arrayUsuario donde se guarda
        // se utiliza this.id porque se hace referencia al id del usuario que llama al método

        // con la opción ||, si no pasamos argumentos para algun campo, conservaría los anteriores
        arrayUsuario[this.id].nombre = nombre || this.nombre    
        arrayUsuario[this.id].primerApellido = primerApellido || this.primerApellido
        arrayUsuario[this.id].segundoApellido =segundoApellido || this.segundoApellido
        arrayUsuario[this.id].email =email || this.email
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

    librosPrestados(arrayTransaccion){
        let arrayLibrosPrestados = []  // tipo Libros
        // Accede al array de transaccion a través del campo idUsuarioAdquerido = Usuario.id 
        // Obtiene la lista de objetos de tipo transaccion que hay en dicho array
        arrayTransaccion.forEach(element => {
            
            if (element.idUsuarioAdquerido = this.id){
                //esta transacción la ha hecho nuestro usuario
                // se calcula que el prestamo no esté vencido con la funcion prestamoVencido(element)
                if (!this.prestamoVencido(element)){
                    //prestamo en vigor, se contabiliza este libro
                    arrayLibrosPrestados.push(element.idLibroPrestado)
                }
            }
        });

        // devuelve un array con los id de los libros prestados a ese usuario
        return arrayLibrosPrestados
    }

    prestamoVencido(transaccion){
        let vencido = false
        // con los datos de la transaccion se devuelve true si el prestamo esta vencido
        // y false si no está vencido
        // hay un campo fechaLimitePrestamo que indica el día que vence el préstamo
        if (transaccion.fechaLimitePrestamo > Date()){
            vencido = true
        }  
        return vencido
    }
} 
/*
    // se crea un array de objetos de tipo Usuario para guardar los datos de los usuarios  
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
*/
