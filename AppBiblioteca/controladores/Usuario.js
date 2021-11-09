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
        // el id-1 del usuario será el índice del arrayUsuario donde se guarda
        // se utiliza this.id porque se hace referencia al id del usuario que llama al método

        // con la opción ||, si no pasamos argumentos para algun campo, conservaría los anteriores
        arrayUsuario[this.id-1].nombre = nombre || this.nombre    
        arrayUsuario[this.id-1].primerApellido = primerApellido || this.primerApellido
        arrayUsuario[this.id-1].segundoApellido =segundoApellido || this.segundoApellido
        arrayUsuario[this.id-1].email =email || this.email
        arrayUsuario[this.id-1].fechaBaja = fechaBaja || this.fechaBaja
    }

///////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * funcion para borrar Usuarios, borra el usuario que llama al método
     *
     * no usamos el método splice porque los índices del array cambian, como no queremos
     * que cambien, porque tienen que coincidir con el id-1, asignamos el valor null
     * a la posicion que queremos borrar, pero sigue existiendo esa posicion del array
     * 
     * @param {array} arrayUsuario 
     */
    borrarUsuario(arrayUsuario){
        // utiliza el id del objeto al que estamos haciendo referencia
        // de esta manera no tenemos que pasarle la información del id por parámetro
        arrayUsuario[this.id-1] = null 
    }
    
    /**
     * función que devuelve los libros que han sido prestados al usuario que llama a la funcion
     * los divide en libros prestados y libros con préstamo vencido
     * @param {array} arrayTransaccion 
     * @param {array} arrayLibros 
     */
    librosPrestados(arrayTransaccion,arrayLibros){
        let arrayLibrosPrestados = []  // tipo id de Libro
        let arrayLibrosVencidos = []  // tipo id de Libro
        // Accede al array de transaccion a través del campo idUsuarioAdquerido = Usuario.id 
        // Obtiene la lista de objetos de tipo transaccion que hay en dicho array
        arrayTransaccion.forEach(element => {
            
            if (element.idUsuarioAdquerido = this.id){
                //esta transacción la ha hecho nuestro usuario
                // se calcula que el prestamo no esté vencido con la funcion prestamoVencido(element)
                if (!this.prestamoVencido(element)){
                    //prestamo en vigor, se contabiliza este libro
                    arrayLibrosPrestados.push(element.idLibroPrestado)
                }else{
                    arrayLibrosVencidos.push(element.idLibroPrestado)
                }
            }
        });
        // se muestra un listado de los libros prestados y otro de los libros con prestamo vencido
        console.log('\nLIBROS PRESTADOS\n')
        arrayLibrosPrestados.forEach(prestado =>{
            console.log('Libro Prestado : ', arrayLibros[prestado-1].titulo)
           
        });
        console.log('\nLIBROS PRESTAMO VENCIDO\n')
        arrayLibrosVencidos.forEach(vencido =>{
            console.log('Libro con prestamo Vencido : ', arrayLibros[vencido-1].titulo)
        });

    }

    /**
     * función que se utiliza para saber si un préstamo está o no vencido,
     * devuleve verdadero o falso
     * @param {objeto} transaccion 
     * @returns vencido
     */
    prestamoVencido(transaccion){
        let vencido = false
        // con los datos de la transaccion se devuelve true si el prestamo esta vencido
        // y false si no está vencido
        // hay un campo fechaLimitePrestamo que indica el día que vence el préstamo
        if (transaccion.fechaLimitePrestamo.getTime() < Date.now()){
            vencido = true
        }  
        return vencido
    }
} 
