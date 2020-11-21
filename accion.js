var codigoQR = new QRCode("codigoQR");
$(document).ready(function() {
    $("#generarCodigo").on("click", function() {
        
        var nombre = $("#NombresyApellidos").val();
        var celular = $("#Celular").val();
        var correo = $("#Correo").val();
        var empresa = $("#Empresa").val();
        var cargo = $("#Cargo").val();


        if (nombre.length == 0) {
            $('.validacion p').remove();
            $('.validacion').html("<p>Este campo 'Nombres y Apellidos' Necesario</p>");
        } else if (empresa.length == 0) {
            $('.validacion p').remove();
            $('.validacion').html("<p>Este campo 'Empresa' Necesario</p>");
        } else if (cargo.length == 0) {
            $('.validacion p').remove();
            $('.validacion').html("<p>Este campo 'Cargo' Necesario</p>");
        } else if (celular.length == 0) {
            $('.validacion p').remove();
            $('.validacion').html("<p>Este campo 'Movil' Necesario</p>");
        } else if (correo.length == 0) {
            $('.validacion p').remove();
            $('.validacion').html("<p>Este campo 'correo' Necesario</p>");
        } else if (correo.length < 5) {
            $('.validacion p').remove();
            $("#Correo").val("");
            $('.validacion').html("<p>Correo No valido</p>");
        } else {
            $('.validacion p').remove();
            
            var cadena = $("#NombresyApellidos").val() +
                '\n' + $("#Empresa").val() +
                '\n' + $("#Cargo").val() +
                '\n' + $("#Telefono").val() +
                '\n' + $("#Celular").val() +
                '\n' + $("#Correo").val() +
                '\n' + $("#CorreoI").val();

            codigoQR.makeCode(cadena);

        }
    });
});