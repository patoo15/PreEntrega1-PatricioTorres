const nombre = prompt("ingrese su Nombre");
console.log(nombre);
let edad = prompt("ingrese su edad");
let PrecioTotal = 0;
while (edad < 18) {
  alert("tienes que ser mayor de 18 años para comprar");
  edad = parseInt(prompt("ingrese su edad"));
}
if (edad >= 18) {
  const articulos = parseInt(prompt("ingrese numero de articulos"));
  console.log(articulos);
  for (let i = 0; i < articulos; i++) {
    let precio = parseInt(prompt("ingrese precio de los articulos"));
    PrecioTotal += precio;
  }
  alert(nombre + " El total de su compra es: " + PrecioTotal);
}
console.log(edad);
