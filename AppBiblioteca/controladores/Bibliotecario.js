/**
 * clase Bibliotecario
 */
import {Libro} from './Libro.js';
//import {Usuario} from './Usuario.js';
import {Transaccion} from './Transaccion.js';

 export class Bibliotecario {
    /**
     * Constructor de la clase Bibliotecarios
     * @param {int} id 
     * @param {string} nombre 
     * @param {string} primerApellido 
     * @param {string} segundoApellido 
     */
    constructor(id, nombre, primerApellido, segundoApellido) {
        this.id = id
        this.nombre = nombre
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido
        this.fechaAlta = Date()
        this.fechaBaja = this.fechaBaja
    }
    /**
     * función que modifica un usuario
     * no se puede modificar el id ni la fechaAlta
     * @param {array} arrayBibliotecarios, id, nombre, primerApellido, segundoApellido
     * @param {int} id
     * @param {string} nombre
     * @param {string} primerApellido
     * @param {string} segundoApellido
     */

    modificarBibliotecario(arrayBibliotecarios, id, nombre, primerApellido, segundoApellido, fechaBaja) {
        //arrayBibliotecario es un array de objetos Bibliotecarios
        //el id del bibliotecario será el indice del arrayBibliotecario donde se guarda
        arrayBibliotecarios[id].nombre = nombre
        arrayBibliotecarios[id].primerApellido = primerApellido
        arrayBibliotecarios[id].segundoApellido = segundoApellido
        arrayBibliotecarios[id].fechaBaja = fechaBaja
    }
    /**
     * función que borra los datos de cierta posición del array (dada por el id)
     * no borra los datos como tal, sino que cambia los datos por un null
     * @param {array} arrayBibliotecarios 
     * @param {int} id 
     */
    borrarBibliotecario(arrayBibliotecarios) {
        arrayBibliotecarios[this.id] = null
    }
    historialTransacciones(arrayTransaccion){
        for(let i=0;i<=arrayTransaccion.length;i++){
            if(arrayTransaccion[i].idFirmaBibliotecario===this.id){
                console.log(this.id)
                console.log(arrayTransaccion[i].idFirmaBibliotecario)
                console.log("i",i)
                return console.log(arrayTransaccion[this.id])
            }
            
        }

    }
}
//Array para los bibliotecarios
let arrayBibliotecarios = []

let arrayTransaccion = []
let trans1 = new Transaccion(arrayTransaccion.length,'1','1',0,Date(),'7')
arrayTransaccion.push(trans1)
console.log(trans1)
console.log(arrayTransaccion)
//Creación de bibliotecarios

let biblio1 = new Bibliotecario(arrayBibliotecarios.length, 'A', 'Míguez')
console.log(biblio1)
arrayBibliotecarios.push(biblio1)
biblio1.historialTransacciones(arrayTransaccion)
/*


let biblio1 = new Bibliotecarios(arrayBibliotecarios.length, 'A', 'Míguez')
let trans1 = new Transaccion(arrayTransaccion.length,'1','1','1','1',Date(),'7')
biblio1.historialTransacciones(arrayTransaccion,'A')
let biblio2 = new Bibliotecarios(arrayBibliotecarios.length, 'B', 'García')
biblio2.historialTransacciones(arrayTransaccion,1)
*/
