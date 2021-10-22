// Funcion para enviarle el pedido al mail del cliente y recibir una copia y los datos de contacto
function envioCorreo(nombreCliente, carritoNombres, precioTotal, mailCliente, telefono) {
    var data = {
      service_id: 'default_service',
      template_id: 'contact_form',
      user_id: 'user_eyJPTSBZiVSOf4CCPFCEA',
      template_params: {
        'from_name': 'Doña Marta',
        'to_name': nombreCliente,
        'data': carritoNombres,
        'ptotal': precioTotal,
        'email_cliente': mailCliente,
        'telefono': telefono
      }
    };
  
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      
      inputIntervaloHTML.value= "";
      console.log('Your mail is sent!');
    }).fail(function (error) {
      console.log('Oops... ' + JSON.stringify(error));
    })
  }

