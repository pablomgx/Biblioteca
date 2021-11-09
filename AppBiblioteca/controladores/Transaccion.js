
export class Transaccion{

    /**
     * constructor, funcion que se utiliza para crear un objeto de tipo Usuario
     * @param {number} id 
     * @param {string} idLibroPrestado //Id del libro prestado
     * @param {string} idUsuarioAdquerido  //Id del usuario que adquiere el prestamo
     * @param {string} idFirmaBibliotecario //Id del bibliotecario que firma la transacción
     * @param {string} fechaTransaccion 
     * @param {string} tipoPrestamo //Tipo de prestamo (a 7 , 14 o 31 días)
     * @param {string} fechaLimitePrestamo //suma fechaTransacción + tipoPrestamo
     */

    constructor(id, idLibroPrestado, idUsuarioAdquerido, idFirmaBibliotecario, tipoPrestamo){
        this.id = id
        this.idLibroPrestado = idLibroPrestado 
        this.idUsuarioAdquerido = idUsuarioAdquerido
        this.idFirmaBibliotecario = idFirmaBibliotecario
        this.fechaTransaccion = Date()
        this.tipoPrestamo = tipoPrestamo
        this.fechaLimitePrestamo = new Date(new Date().setDate(new Date().getDate() + this.tipoPrestamo))
    }

 }