$(document).ready(function() {
    // Buscar elementos con la clase "reloj" y actualizar su contenido con la hora
    $(".reloj").each(function() {
        var elementoReloj = $(this);
        
        // Actualizar el contenido del elemento con la hora actual
        function actualizarHora() {
            var horaActual = new Date();
            var horaFormateada = horaActual.getHours().toString().padStart(2, '0') + ":" +
                                 horaActual.getMinutes().toString().padStart(2, '0') + ":" +
                                 horaActual.getSeconds().toString().padStart(2, '0');
            elementoReloj.text("Hora actual: " + horaFormateada);
        }
        
        // Actualizar la hora cada segundo
        setInterval(actualizarHora, 1000);
        
        // Actualizar la hora inicialmente
        actualizarHora();
    });
});