## Método Array reduce() Javascript.
Reduce todos los valores de un array a un único valor. Aplica una función que se repite hasta completar la cantidad de elementos del array. 
reduce() acumula el resultado en el primer parámetro (total)

*Sintaxis*
*```array.reduce(function(total,valorEnCurso), valorInicial)```*

`total` (requerido) es el valor inicial(en el 1º llamado) y luego el acumulado.
`valorEnCurso` (requerido) el valor del elemento en curso del array .
`valorInicial` (opcional) es un valor inicial que se tomará como base. Si no lo ponemos el de primer elemento del array.

**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/9760523c52273b007b0e0f8e121f8c1c.js"></script>

<!-- Código del Gist:

var numeros = [6, 4, 5, 2];

function sumar(total, num) {
    return total + num;
}

var resultado = numeros.reduce(sumar)

console.log(resultado); 

// Resultado
// 17

-->

`reduce(sumar)` _**linea7**_ llama a la función sumar _**linea3**_  por cada elemento del array sin contar el primero (3 veces en el ejemplo).
`num` _**linea3y4**_ irá cambiando entre 4, 5 y 2.
`total` _**linea3y4**_ arranca por 6 y le siguen los resultado del llamado a la función anterior, (10, 15)
1º llamado: 6(total) + 4(num)
2º llamado: 10(total) + 5(num)
3º llamado: 15(total) + 2(num) (resultado final=17)

Si queremos que arranque con un valor específico hará un llamado más:
En la linea x  agregamos por ejemplo el 2(valor inicial):  `var resultado = numeros.reduce(sumar, 2)`.
1º llamado: 2(total) + 6(num)
2º llamado: 8(total) + 4(num)
3º llamado: 12(total) + 5(num)
4º llamado: 17(total) + 2(num) (resultado final=19)


**Podemos incorporar directamente la función sin tener que llamarla:**

<script src="https://gist.github.com/agustinpfs/c680ba08fb881e26984d6579a8d11d2f.js"></script>

<!-- Código del Gist:


var numeros = [6, 4, 5, 2];

var resultado = numeros.reduce(function(total, num) {
    return total + num;
})

console.log(resultado);

// Resultado
// 17

-->

[Prueba el código!](https://jsfiddle.net/Pandawebs/vx1qjcqg/){:target="_blank"}


**Ejemplo de reduce() aplicando el método _Math.round_:**

A un array con números decimales, deseamos redondearlos a números enteros para luego sumarlos.
Le agregaremos el valor inicial de 0 para que redondeé el primer elemento también.

<script src="https://gist.github.com/agustinpfs/e2427434d2a16238360c717154ce72d0.js"></script>

<!-- Código del Gist:

var numeros = [6.2, 4.7, 5.5, 2.3];

function sumar(total, num) {
    return total + Math.round(num);
}

var resultado = numeros.reduce(sumar,0)

console.log(resultado); 

// Resultado
// 19

-->

[Prueba el código!](https://jsfiddle.net/Pandawebs/3cqm0chr/){:target="_blank"}

<hr>

**En una página web:**

<script async src="https://jsfiddle.net/Pandawebs/qzmcyat1/embed/html,result/"></script>

<!-- Código del fiddle:

<!DOCTYPE html>
<html>
  <body>
  
    <p>Promedios</p>
    
    <ul>
      <li>2.3</li>
      <li>5.5</li>
      <li>4.7</li>
      <li>6.2</li>
    </ul>
    
    <button onclick="miFuncion()">Sumar notas como enteros</button>

    <p id="demo"></p>

    <script>
      var numeros = [6.2, 4.7, 5.5, 2.3];

      function sumar(total, num) {
        return total + Math.round(num);
      }

      function miFuncion() {

        var resultado = numeros.reduce(sumar, 0)
        document.getElementById("demo").innerHTML = resultado;
      }

    </script>

  </body>
</html>

-->

<hr>

[*`Lista de métodos nativos`*](#)

