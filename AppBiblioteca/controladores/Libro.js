/* clase Libro*/

import {Bibliotecario} from './Bibliotecario.js';
import {Usuario} from './Usuario.js';
import {Transaccion} from './Transaccion.js';

export class Libro{
    constructor(id, titulo, autor, editorial, fechaPrimeraEdicion, prestado, venta){
        this.id = id
        this.titulo = titulo 
        this.autor = autor
        this.editorial = editorial
        this.fechaPrimeraEdicion = Date()
        this.prestado = prestado
        this.venta = venta
    }

    modificarLibro(arrayLibro, titulo, autor, editorial, prestado){

        arrayLibro[id-1].nombre = nombre
        arrayLibro[id-1].titulo = titulo
        arrayLibro[id-1].autor = autor
        arrayLibro[id-1].editorial = editorial
        arrayLibro[id-1].prestado = prestado
    }

    borrarLibro(arrayLibro, id){

        arrayLibro[id-1] = undefined
    }

    historicoPrestamos(arrayTransaccion){
        console.log("\nHISTORICO DE PRESTAMOS DEL LIBRO : ",this.titulo, '\n')
        for(let i=0; i<arrayTransaccion.length; i++){
         
            if(arrayTransaccion[i].idLibroPrestado === this.id){
              //  console.log(this.id)
              //  console.log(arrayTransaccion[i].idLibroPrestado)
              //  console.log("i",i)
                console.log(arrayTransaccion[this.id])
            }
        }
    }
}

