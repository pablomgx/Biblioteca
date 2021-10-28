/* clase Libro*/

import {Bibliotecario} from './Bibliotecario.js';
import {Usuario} from './Usuario.js';


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

 *   crearUsuario(id){
    
    }

    modificarUsuario(arrayUsuario, titulo, autor, editorial, prestado){

        arrayUsuario[id].nombre = nombre
        arrayUsuario[id].titulo = titulo
        arrayUsuario[id].autor = autor
        arrayUsuario[id].editorial = editorial
        arrayUsuario[id].prestado = prestado
    }

    borrarLibro(arrayLibro, id){

    arrayLibro[id] = undefined
    }

    librosPrestados(){

    }

    prestamosVencidos(){

    }
} 

    let arrayLibros =[]

    let libro1 = new Libro(arrayLibros.length,'A','perez')
    arrayLibros.push(libro1)

    console.log(libro1)
    console.log(arrayLibros)

    //libro1.borrarlibro(arrayLibros,3)
    console.log(arrayLibros)
