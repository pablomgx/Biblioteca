/* clase Libro*/

import {Bibliotecario} from './Bibliotecario.js';
import {Usuario} from './Usuario.js';
import {Transaccion} from './Transaccion.js';

export class Libro{
    /**
     * constructor de la calse Libro
     * @param {*} id 
     * @param {*} titulo 
     * @param {*} autor 
     * @param {*} editorial 
     * @param {*} fechaPrimeraEdicion 
     * @param {*} prestado 
     * @param {*} venta 
     */
    constructor(id, titulo, autor, editorial, fechaPrimeraEdicion, prestado, venta){
        this.id = id
        this.titulo = titulo 
        this.autor = autor
        this.editorial = editorial
        this.fechaPrimeraEdicion = fechaPrimeraEdicion
        this.prestado = prestado
        this.venta = venta
    }

    /**
     * función que modifica un libro
     * @param {*} arrayLibro 
     * @param {*} titulo 
     * @param {*} autor 
     * @param {*} editorial 
     * @param {*} prestado 
     * @param {*} venta 
     */
    modificarLibro(arrayLibro, titulo, autor, editorial, prestado, venta){

        arrayLibro[this.id-1].nombre = nombre || this.nombre
        arrayLibro[this.id-1].titulo = titulo || this.titulo
        arrayLibro[this.id-1].autor = autor || this.autor
        arrayLibro[this.id-1].editorial = editorial || this.editorial
        arrayLibro[this.id-1].prestado = prestado || this.prestado
        arrayLibro[this.id-1].venta = venta || this.venta

    }

    /**
     * función que pone a null el objeto que se quiere borrar
     * @param {} arrayLibro 
     */
    borrarLibro(arrayLibro){

        arrayLibro[this.id-1] = null
    }

    /**
     * función que muestra los datos del histórico de los préstamos del libro que llama a la funcion
     * @param {} arrayTransaccion 
     */
    historicoPrestamos(arrayTransaccion){
        console.log("\nHISTORICO DE PRESTAMOS DEL LIBRO : ",this.titulo, '\n')
        for(let i=0; i<arrayTransaccion.length; i++){
         
            if(arrayTransaccion[i].idLibroPrestado === this.id){
                 console.log(arrayTransaccion[i])
            }
        }
    }
}
