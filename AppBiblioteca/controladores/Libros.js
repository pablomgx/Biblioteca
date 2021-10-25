 * clase Libro

class Libro{
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

    borrarUsuario(arrayUsuario, id){

    arrayUsuario[id] = undefined
    }

    librosPrestados(){

    }

    prestamosVencidos(){

    }
} 

    let arrayLibros =[]

    let libro1 = new libro(arrayUsuarios.length,'A','perez')
    arraylibro.push(libro1)

    let libro2 = new libro(arrayUsuarios.length,'B','perez')
    arraylibros.push(libro2)

    let libro3 = new libro(arrayUsuarios.length,'C','perez')
    arraylibros.push(libro3)

    let usuario4 = new Usuario(arrayUsuarios.length,'D','perez')
    arraylibrs.push(libro4)

    console.log(libro1)
    console.log(libro2)
    console.log(libro3)
    console.log(libro4)
    console.log(arrayLibros)

    libro1.borrarlibro(arrayLibros,3)
    console.log(arrayLibros)