
const agregarTodoBoton = document.querySelectorAll(".btn-agregar");
agregarTodoBoton.forEach((agregarBotonUnico) => {
  agregarBotonUnico.addEventListener("click", agregarItemClickeado);
});

const botonComprar = document.querySelector(".btn-comprar");
botonComprar.addEventListener("click", comprarClickeado);

const carritoContenedorItems = document.querySelector(".container-items");
inicializar();

function agregarItemClickeado(event) {
  alert("Se agregó un producto al carrito");
  const botonClickeado = event.target;
  const item = botonClickeado.closest(".card-book");
  const itemTitulo = item.querySelector(".titulo-libro").textContent;
  console.log(itemTitulo);

  const itemImagen = item.querySelector(".img-libro").src;

  console.log(itemImagen);
  const itemPrecio = item.querySelector(".precio-libro").textContent;
  console.log(itemPrecio);

  agregarItemAlCarrito(itemImagen, itemPrecio, itemTitulo);
};

function agregarItemAlCarrito(itemImagen, itemPrecio, itemTitulo) {
  const elementosTitulos = carritoContenedorItems.getElementsByClassName("titulo");
  for (i = 0; i < elementosTitulos.length; i++) {
    if (elementosTitulos[i].innerHTML === itemTitulo) {
      let elementoCantidad = elementosTitulos[i].parentElement.parentElement.querySelector(".cantidadLibros");
      elementoCantidad.value++;
      alert("se aumentó la cantidad de un mismo libro");
      precioTotal();
      return;
    }

  };


  const filaCarrito = document.createElement("div");
  const contenidoCarrito = `
    
<div class="shoppingCartItem">
  <div class="col-titulo">
    <img src=${itemImagen} style="height: 50px;">
    <p class="titulo">${itemTitulo}</p>
  </div>
  <div class="col-precio">
    <p class="shoppingCartItemPrice ">${itemPrecio}</p>
  </div>
  <div class="col-cantidad">
    <input type="number" class="cantidadLibros" min="1" value="1">
  </div>
  <div class="col-borrar">
    <button class="btn-borrar">X</button>
  </div>
</div>
    `
  filaCarrito.innerHTML = contenidoCarrito;
  carritoContenedorItems.append(filaCarrito);

  filaCarrito.querySelector(".btn-borrar").addEventListener("click", borrarfilaCarrito);
  filaCarrito.querySelector(".cantidadLibros").addEventListener("change", cambiarCantidadLibros);

  precioTotal();

}

function precioTotal() {
  let total = 0;
  const totalBox = document.querySelector(".precio-total");
  const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

  shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(".shoppingCartItemPrice");
    const shoppingCartItemPrice = parseInt(shoppingCartItemPriceElement.textContent.replace("$", ""));

    const cantidadLibrosElement = shoppingCartItem.querySelector(".cantidadLibros");
    const cantidadLibros = parseInt(cantidadLibrosElement.value);
    console.log(cantidadLibros);

    total = total + shoppingCartItemPrice * cantidadLibros;
    console.log(total);
  });
  totalBox.innerHTML = `${total.toFixed(2)}$`;
}



function borrarfilaCarrito(event) {
  const botonClickeado = event.target;
  const item = botonClickeado.closest(".shoppingCartItem").remove();
  precioTotal();
}

function cambiarCantidadLibros(event) {
  const input = event.target;
  precioTotal();
}

function comprarClickeado() {
  carritoContenedorItems.innerHTML = "";
  precioTotal();
  alert("¡Gracias por su compra! El pedido se envia, una vez recibido el comprobante de pago al mail de contacto.");

}

function inicializar() {
  carritoContenedorItems.innerHTML = "";
  precioTotal();
}