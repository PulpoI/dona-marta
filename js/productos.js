//Constructor de productos
class Producto {
  constructor(title, categoria, precio, id) {
    this.title = title;
    this.categoria = categoria;
    this.precio = precio;
    this.id = id;
  }
}

//Array de productos
let items = [];

//Productos creados
const p1 = new Producto("Mini Cake rosa", "Torta", 1200, 1);
const p2 = new Producto("Mini Cake con Macarons", "Torta", 1400, 2);
const p3 = new Producto("Mini Cake gold", "Torta", 1400, 3);
const p4 = new Producto("Oreos bañadas", "Box", 800, 4);
const p5 = new Producto("Tarta de banana", "Tarta", 1200, 5);
const p6 = new Producto("Budín Hamburgués", "Torta", 1400, 6);

//Productos pusheados al array
items.push(p1, p2, p3, p4, p5, p6);

// Filtrar productos por categoria
const btnTorta = document.querySelector("#cat-tortas");
// btnTorta.addEventListener('click' , catTortas())
const btnTarta = document.querySelector("#cat-tartas");

//Crear archivos en HTML
const itemId = document.getElementById("item");

for (const item of items) {
  const contenedor = document.createElement("div");
  contenedor.className = "product-item col d-flex justify-content-center mb-4";
  contenedor.setAttribute("category", `${item.categoria}`);
  contenedor.innerHTML = `
    <div class="card shadow mb-1 bg-light rounded"  style="width: 20rem;">
            <h5 class="card-title pt-2 text-center text-primary">${item.title}</h5>
            <img src="img/${item.id}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-dark-50 description">Categoria: ${item.categoria}</p>
              <h5 class="text-primary">Precio: <span class="precio">$${item.precio}</span></h5>
              <div class="d-grid gap-2">
                <button class="btn btn-secondary button">Añadir a Carrito</button>
              </div>
            </div>
          </div>
    `;
  itemId.append(contenedor);
}

