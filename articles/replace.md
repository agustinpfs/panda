## Metodo String replace() JavaScript

El método replace() busca un valor o una [expresión regular(regex)](#) en un string y lo reemplaza con un valor nuevo o una [función](#) que modifique los valor buscados.

*Sintaxis*
*```string.replace(ValorAreemplazar, nuevoValor)```*

**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/17312a22e625d922d4ea3b941fdb7a9a.js"></script>

<!-- Código del Gist:
var texto = "Mi nombre es Agustín";
var resultado = texto.replace("Agustín", "Lucas");

console.log(resultado);

// Resultado:
// Mi nombre es Lucas

-->

Tengamos en cuenta que el primer argumento(buscarValor) si no es una [expresión regular(regex)](#) sólo reemplazará el **primer** elemento que coincida.

```
var texto = "Agustín. Mi nombre es Agustín";
var resultado = texto.replace("Agustín", "Lucas");

console.log(resultado);

// Resultado:
// Lucas. Mi nombre es Agustín


// Vemos que sólo reemplaza el 1º Agustín del string.
```

**Usando expresión regular(regex)**
Para que reemplaze todos los elementos que coincidan, usaremos una [expresión regular(regex)](#) con el modificador global(g).

<script src="https://gist.github.com/agustinpfs/17ff6d9722d0d3ec53d9084d26dedcca.js"></script>

**Usando una función para modificar los elementos de búsqueda**

<script src="https://gist.github.com/agustinpfs/8b370df053b1a6c952b242fc09239bcc.js"></script>

<!-- Código del Gist:

var frase = "No te des por vencido. jamás nunca";
var modifica = function myFuncion(x) {
  return x.toUpperCase() + "!!!";
};
var resultado = frase.replace(/jamás|nunca/g, modifica);

console.log(resultado);

// Resultado:
// No te des por vencido. JAMÁS!!! NUNCA!!!

-->








