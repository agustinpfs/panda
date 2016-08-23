## Método Map

El metodo map llama a una función por cada elemento de un array.

**Ejemplo:**
El metodo map crea un nuevo array *`dobles`* a partir de los resultados de una funcion que toma como argumento *`(num)`* por cada uno de los elementos de otro array original dado *`[1, 4, 9]`*.


<script src="https://gist.github.com/agustinpfs/a9c8acabb0bc4d4e760e61e4c6717985.js"></script>

<!-- Código del Gist:

var numeros = [1, 4, 9];
var dobles  = numeros.map(function (num) {
  return num * 2;
}); 

console.log(dobles);

// Resultado:
// [ 2, 8, 18 ] -->
En el ejemplo el nuevo array se construye de la siguiente manera:

* Primero `(num)` (fila 2) se convierte en el _primer_ elemento del array `numeros` que es 1.
Lo multiplica por 2 (linea 3) y el resultado(2) lo coloca en la _primera_ posisión del nuevo array.

* Segundo `(num)` (fila 2) se convierte en el _segundo_ elemento del array `numeros` que es 4.
Lo multiplica por 2 (linea 3) y el resultado(8) lo coloca en la _segunda_ posisión del nuevo array.

* Tercero `(num)` (fila 2) se convierte en el _tercero_ elemento del array `numeros` que es 9.
Lo multiplica por 2 (linea 3) y el resultado(18) lo coloca en la _tercera_ posisión del nuevo array.

<hr>

**Ejemplo con método nativo:**


En este ejemplo en vez de utilizar una función propia, utilizamos el [método nativo](#){:target="_blank"} [sqrt del Objeto Math](#) que se encarga de devolver la raíz cuadrada de un número. 
Gracias a map realizamos la operación a cada uno de los elementos del array([iteración](#){:target="_blank"}), creando uno nuevo con el resultado de cada uno:


<script src="https://gist.github.com/agustinpfs/0df82f0688ae2069b3e0305cb1df2eb7.js"></script>

<!-- Código del Gist:

var numeros = [4, 9, 16, 25];

var rc = numeros.map(Math.sqrt);

console.log(rc);

// Resultado:
// [ 2, 3, 4, 5 ] -->

<hr>

**Ejemplo con strings como elementos:**

<script src="https://gist.github.com/agustinpfs/c1b1959e8ef8bd317fb082cb384660f1.js"></script>

<!-- Código del Gist:

var misPalabras = ["casa", "auto", "mesa", "silla"];

var plural  = misPalabras.map(function(num) {
  return num + "s";
});

console.log(plural);

// Resultado:
// [ 'casas', 'autos', 'mesas', 'sillas' ] -->

**En una Página web:**
<iframe width="100%" height="600" src="https://jsfiddle.net/Pandawebs/xzpjbd0w/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


<hr>
**Ejemplo con [objetos](#){:target="_blank"} como elementos, unidos con el [método Array join()](#):**

<script src="https://gist.github.com/agustinpfs/efba475c5e15c6072084e50fe813ce2d.js"></script>

<!-- Código del Gist:

var persons = [
    {nombre : "Agustin", apellido: "Palmieri", edad: 39},
    {nombre : "Andrea", apellido: "Genero", edad: 40},
    {nombre : "Lucas", apellido: "Martignetti", edad: 45}
];

var nombreYedad = persons.map(function (item) {
    return [item.nombre,item.edad].join(", " ) + " años";
})

console.log(nombreYedad);

// Resultado:
// [ 'Agustin, 39 años', 'Andrea, 40 años', 'Lucas, 45 años' ] -->

**En una Página web:**
<iframe width="100%" height="800" src="https://jsfiddle.net/Pandawebs/Luaaa7u7/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<hr>
[*`Lista de métodos nativos`*](#)

