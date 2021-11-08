/**
 * clase Bibliotecarios
 */
import {Libro} from './Libro.js';
import {Usuario} from './Usuario.js';
import { Transaccion } from './Transaccion.js';

 export class Bibliotecario{
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
        arrayBibliotecarios[this.id-1] = null
    }
    historialTransaccionesExpiradas(arrayTransacciones){

        console.log("\nPRESTAMOS EXPIRADOS DEL BIBLIOTECARIO : ",this.id, '\n')
        for(let i=0; i<arrayTransacciones.length; i++){
           
            if(arrayTransacciones[i].idFirmaBibliotecario === this.id){
                //console.log("this.id",this.id)
                //console.log("array",arrayTransacciones[i].idFirmaBibliotecario)
                //console.log("i",i)
                //console.log("coincide biliotecario: ",arrayTransacciones[this.id])
                if(arrayTransacciones[i].fechaLimitePrestamo.getTime() < Date.now()){
                    console.log('\n', arrayTransacciones[i])
                }
            }
            
        }
    }
}
/*
//Array para los bibliotecarios
let arrayBibliotecarios = []

//Creación de bibliotecarios
let biblio1 = new Bibliotecario(arrayBibliotecarios.length, 'A', 'Míguez')
arrayBibliotecarios.push(biblio1)

*/