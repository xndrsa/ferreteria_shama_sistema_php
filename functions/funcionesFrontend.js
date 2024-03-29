/**
 * Formatea un número al formato de moneda Quetzal (GTQ).
 * 
 * @param {number} numero El número a formatear.
 * @return {string} El número formateado con el símbolo de Quetzal y dos decimales.
 */
function formatoQuetzal(numero) {
    return 'Q' + numero.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
/**
 * Función para ocultar o mostrar un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 */
function toggleElemento(id) {
    $("#" + id).toggle();
}

/**
 * Función para cambiar el contenido de un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} contenido El nuevo contenido del elemento.
 */
function cambiarContenido(id, contenido) {
    $("#" + id).html(contenido);
}

/**
 * Función para agregar una clase CSS a un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} clase La clase CSS que se desea agregar.
 */
function agregarClase(id, clase) {
    $("#" + id).addClass(clase);
}

/**
 * Función para eliminar una clase CSS de un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} clase La clase CSS que se desea eliminar.
 */
function quitarClase(id, clase) {
    $("#" + id).removeClass(clase);
}

/**
 * Función para verificar si un elemento tiene una clase CSS específica.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} clase La clase CSS que se desea verificar.
 * @return {boolean} True si el elemento tiene la clase, False en caso contrario.
 */
function tieneClase(id, clase) {
    return $("#" + id).hasClass(clase);
}

/**
 * Función para desplazarse suavemente hacia un elemento en la página.
 * 
 * @param {string} id El ID del elemento al que se desea desplazar.
 */
function desplazarseSuavemente(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}

/**
 * Función para cambiar el atributo 'src' de una imagen por su ID.
 * 
 * @param {string} id El ID del elemento de imagen.
 * @param {string} nuevaSrc La nueva URL o ruta de la imagen.
 */
function cambiarSrcImagen(id, nuevaSrc) {
    $("#" + id).attr("src", nuevaSrc);
}

/**
 * Función para agregar un evento a un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} tipoEvento El tipo de evento (por ejemplo, 'click', 'mouseover').
 * @param {Function} callback La función que se ejecutará cuando ocurra el evento.
 */
function agregarEvento(id, tipoEvento, callback) {
    $("#" + id).on(tipoEvento, callback);
}

/**
 * Función para eliminar un evento de un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} tipoEvento El tipo de evento que se desea eliminar.
 * @param {Function} callback La función que se había asignado al evento.
 */
function quitarEvento(id, tipoEvento, callback) {
    $("#" + id).off(tipoEvento, callback);
}

/**
 * Función para cambiar el estilo CSS de un elemento por su ID.
 * 
 * @param {string} id El ID del elemento.
 * @param {string} propiedad La propiedad CSS que se desea modificar.
 * @param {string} valor El nuevo valor para la propiedad CSS.
 */
function cambiarEstilo(id, propiedad, valor) {
    $("#" + id).css(propiedad, valor);
}

/**
 * Función para obtener el valor de un campo input por su ID.
 * 
 * @param {string} id El ID del campo input.
 * @return {string} El valor del campo input.
 */
function obtenerValorInput(id) {
    return $("#" + id).val();
}

/**
 * Función para establecer el valor de un campo input por su ID.
 * 
 * @param {string} id El ID del campo input.
 * @param {string} valor El valor que se desea establecer.
 */
function establecerValorInput(id, valor) {
    $("#" + id).val(valor);
}