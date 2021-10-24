// Variables
const clickButton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
const contador = document.querySelector('.contador-carrito')
let total;
let carrito = []



// Evento click del boton añadir al carrito
clickButton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})

// Funcion para crear el producto en carrito
function addToCarritoItem(e) {
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }
  addItemCarrito(newItem)
}


// Funcion para agregar producto al carrito
function addItemCarrito(newItem) {
  // Alerta producto agregado
  const alert = document.querySelector('.alert')
  setTimeout(function () {
    alert.classList.add('hide')
  }, 0500)
  alert.classList.remove('hide')

  const inputElemento = tbody.getElementsByClassName('input__elemento')
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === newItem.title.trim()) {
      carrito[i].cantidad++;
      const inputValue = inputElemento[i]
      inputValue.value++;
      carritoTotal()
      return null;
    }
  }
  carrito.push(newItem)

  renderCarrito()
}

// Funcion para crear articulos en el carrito
function renderCarrito() {
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('itemCarrito')
    const Content = `
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">X</button>
            </td>
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })

  carritoTotal()
}

// TOTAL CARRITO
function carritoTotal() {
  total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    total = total + precio * item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${total}`


  // Contador de carrito
  let totalContador = 0;
  for (let i = 0; i < carrito.length; i++) {
    totalContador += carrito[i].cantidad
  }
  const contador = document.querySelector('.badge')
  if (totalContador == 0) {
    contador.classList.add('hide')
  } else {
    contador.classList.remove('hide')
  }
  contador.innerHTML = totalContador;

  addLocalStorage()
}

// Funcion para remover articulo del carrito
function removeItemCarrito(e) {
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".itemCarrito")
  const title = tr.querySelector('.title').textContent;
  for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].title.trim() === title.trim()) {
      carrito.splice(i, 1)
    }
  }

  // Alerta producto removido
  const alert = document.querySelector('.remove')
  setTimeout(function () {
    alert.classList.add('remove')
  }, 0500)
  alert.classList.remove('remove')

  tr.remove()
  carritoTotal()
}

// Funcion para sumar articulos desde el carrito 
function sumaCantidad(e) {
  const sumaInput = e.target
  const tr = sumaInput.closest(".itemCarrito")
  const title = tr.querySelector('.title').textContent;

  carrito.forEach(item => {
    if (item.title.trim() === title) {
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = Number(sumaInput.value);
      carritoTotal()
    }
  })
}



// Funcion para agregar productos al local storage
function addLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function () {
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if (storage) {
    carrito = storage;
    renderCarrito()
  }
}


let data = []
//Ciclo para obtener la informacion del pedido y enviarla por mail
function tomarDatos() {
  const storage = JSON.parse(localStorage.getItem('carrito'));
  let titulo = 'title'
  let cantidad = 'cantidad'
  let precio = 'precio'

  for (let index in storage) {
    const dato = storage[index]
    if (data.indexOf(dato[titulo]) === -1) {
      data.push(dato[titulo])
      data.push(dato[cantidad])
      data.push(dato[precio])
      data[dato[titulo]] = {}
      data[dato[titulo]][cantidad] = 0
      data[dato[titulo]][precio] = ''
    }
    data[dato[titulo]][cantidad] += dato[cantidad]
    data[dato[titulo]][precio] += dato[precio]
  }

}

// Limpiar Local Storage
function limpiarLs() {
  addLocalStorage(carrito);
  localStorage.clear()
}