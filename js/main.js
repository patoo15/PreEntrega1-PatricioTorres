const nombre = prompt("ingrese su Nombre");
console.log(nombre);
let edad = prompt("ingrese su edad");
let PrecioTotal = 0;
class productos {
  constructor(producto, precio) {
    this.producto = producto;
    this.precio = precio;

    this.generarstock();
  }
}
class stock {
  constructor(id, noStock) {
    this.id = id;
    this.noStock = noStock;
  }
}
generarstock();
{
  this.stocks = [];
  for (let i = 0; i < 10; i++) {
    const stock = new stock(i, false);
    this.stocks.push(stock);
  }
}

// LISTA DE PRODUCTOS
const ListaDeProductos = [new productos("Laptop", 30000), new productos("Tele", 50000), new productos("Teclado", 10000), new productos("Mouse", 5000)];
function seleccionarProducto(producto) {
  return ListaDeProductos.find((productos) => {
    return productos.producto === producto;
  });
}
while (edad < 18) {
  alert("tienes que ser mayor de 18 años para comprar"); // VERIFACION DE EDAD
  edad = parseInt(prompt("ingrese su edad"));
}
if (edad >= 18) {
  const nombreProducto = prompt("ingrese un producto de la lista( Laptop, Tele, Teclado, Mouse");
  console.log(nombreProducto);
  while (nombreProducto !== "SALIR")
    for (let i = 0; i < articulos; i++) {
      let precio = parseInt(prompt("ingrese precio de los articulos"));
      PrecioTotal += precio;
    }
  alert(nombre + " El total de su compra es: " + PrecioTotal);
}
console.log(edad);

// if (edad >= 18) {
//   const articulos = parseInt(prompt("ingrese numero de articulos"));
//   console.log(articulos);
//   for (let i = 0; i < articulos; i++) {
//     let precio = parseInt(prompt("ingrese precio de los articulos"));
//     PrecioTotal += precio;
//   }
//   alert(nombre + " El total de su compra es: " + PrecioTotal);
// }
// console.log(edad);
