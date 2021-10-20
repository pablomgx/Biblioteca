/**
 * clase Usuario
 */

class Usuario{
    constructor(id, nombre, primerApellido, segundoApellido){
        this.id = id
        this.nombre = nombre 
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido
        this.fechaAlta = Date()
        this.fechaBaja = null
    }

    /**
     * funcion que crea un usuario a partir de un id
     * para crear un usuario se utiliza el constructor de arriba
     */
 /*   crearUsuario(id){
    
    }
*/ 
    /**
     * funcion que modifica un usuario, 
     * no se puede modificar el id ni la fechaAlta
     * @param {*} arrayUsuario, id, nombre, primerApellido, segundoApellido 
     */
    modificarUsuario(arrayUsuario, id, nombre, primerApellido, segundoApellido, fechaBaja){
        //arrayUsuario es un array de objetos usuario
        // el id del usuario será el índice del arrayUsuario donde se guarda
        arrayUsuario[id].nombre = nombre
        arrayUsuario[id].primerApellido = primerApellido
        arrayUsuario[id].segundoApellido =segundoApellido
        arrayUsuario[id].fechaBaja = fechaBaja
    }
    
    borrarUsuario(arrayUsuario, id){
        // la funcion splice(a,b) del array elimina b elementos del array
        // a partir del elemneto a
        // para eliminar un elemento en la posicion a sería array.splice(a,1)
        //arrayUsuario.splice(id,1)

        //si usamos el método splice los índices del array cambian, como no queremos
        //que cambien, porque tienen que coincidir con el id, asignamos el valor undefined
        // a la posicion que queremos borrar, pero sigue existiendo esa posicion del array
        arrayUsuario[id] = undefined
    }
    
    librosPrestados(){

    }

    prestamosVencidos(){

    }
} 

    let arrayUsuarios =[]

    let usuario1 = new Usuario(arrayUsuarios.length,'A','perez')
    arrayUsuarios.push(usuario1)

    let usuario2 = new Usuario(arrayUsuarios.length,'B','perez')
    arrayUsuarios.push(usuario2)

    let usuario3 = new Usuario(arrayUsuarios.length,'C','perez')
    arrayUsuarios.push(usuario3)

    let usuario4 = new Usuario(arrayUsuarios.length,'D','perez')
    arrayUsuarios.push(usuario4)
    
    console.log(usuario1)
    console.log(usuario2)
    console.log(usuario3)
    console.log(usuario4)
    console.log(arrayUsuarios)

    usuario1.borrarUsuario(arrayUsuarios,3)
    console.log(arrayUsuarios)
