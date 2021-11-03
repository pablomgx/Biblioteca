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

    historicoPrestamosLibros(arrayTransaccion){
        for(let i=0;i<=arrayTransaccion.length;i++){
            if(arrayTransaccion[i].idLibro===this.id){
                console.log(this.id)
                console.log(arrayTransaccion[i].idLibro)
                console.log("i",i)
                return console.log(arrayTransaccion[this.id])
            }
        }
    }
}

    let arrayLibros =[]
    let arrayTransaccion = []
    let trans1 = new Transaccion(arrayTransaccion.length,0,0,0,Date(),7)
    arrayTransaccion.push(trans1)

    let libro0 = new Libro(arrayLibros.length,'El hobbit', 'Tolkien','SinMañana','1997',true,true)
    arrayLibros.push(libro0)
} 

    let arrayLibros =[]

    let libro1 = new Libro(arrayLibros.length,'A','perez')
    arrayLibros.push(libro1)

    console.log(libro1)
    console.log(arrayLibros)

    //libro1.borrarlibro(arrayLibros,3)
    console.log(arrayLibros)
