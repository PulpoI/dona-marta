//Variables
const nombre = document.getElementById("nombre");
let formulario = document.getElementById("formulario");
let nombreCliente;
let mailCliente;
let telCliente;
const mensaje = document.getElementById("mensaje");
const btnComprar = document.querySelector(".btn-comprar");
const detalleCarrito = document.querySelector("#detalle-carrito");

//Evento del boton Realizar Pedido
formulario.addEventListener("submit", validarFormulario);
btnComprar.addEventListener("click", detallarCarrito);

//Funcion para capturar nombre del cliente y devolver mensaje de compra. Al final se limpia el Local Storage
function validarFormulario(e) {
  e.preventDefault();
  let form = e.target;
  nombreCliente = form.children[2].value.toUpperCase();
  mailCliente = document.getElementById("email").value;
  telCliente = document.getElementById("telefono").value;
  tomarDatos()
  envioCorreo(nombreCliente, JSON.stringify(data), total, mailCliente, telCliente)
  swal({
    title: "Pedido realizado",
    text: "Muchas gracias " + nombreCliente + " pronto nos pondremos en contacto!",
    icon: "success",
    button: "Aceptar",
  }).then(function () {
    window.location.href = "//doñamarta.com";
    limpiarLs();
  });
}



// Funcion para detallar la compra
function detallarCarrito() {
  detalleCarrito.innerHTML = "";
  carrito.map((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("itemCarrito");
    const Content = `
            <td class="table__productos">
            <img src=${item.img}  alt="">
            <p class="table__cantidad">${item.cantidad} -  </p>
            <h6 class="title"> ${item.title}</h6>
            </td>
    `;
    tr.innerHTML = Content;
    detalleCarrito.append(tr);
  });
}


