## If - Else condicionales Javascript.

Controlan diferentes procesos que se basan en diferentes condiciones.

*Sintaxis*

	if (condición1)
   		sentencia1
	else if (condición2)  // opcional
   		sentencia2
	else if (condición3) // opcional
   		sentencia3
	else 				// opcional
   		sentenciaN



* Si una condición es verdadera se ejecuta su respectiva sentencia.

* Si es falsa pasa a la siguiente (else if).

* Si ninguna es verdadera se ejecuta la última sentencia(else)

> Recordemos que las condicionales else if y else son opcionales.

* Si no ponemos else al final y las anteriores condiciones son falsas no se ejecutará nada.

**Ejemplo:**

<script src="https://gist.github.com/agustinpfs/19b1a3f2464fa34bf34dd5be886f0825.js"></script>

<!-- Código del Gist:

if ( 7 < 3 )
	console.log('condición 1 verdadera');
else if ( 7 < 2 )
	console.log('condición 1 falsa, condición 2 verdadera');
else
	console.log('Todas las condiciones falsas');

// Resultado:
// Todas las condiciones falsas

-->

La 1º condición `( 7 < 3 )` en la linea 1 es falsa y pasa a la siguiente: `else if ( 7 < 2 )`. Cómo también es falsa se ejecuta la condición `else`.

[Prueba el código](https://jsfiddle.net/Pandawebs/9d0k41r6/){:target="_blank"}


**En una página web:**

<script async src="https://jsfiddle.net/Pandawebs/0myb8qo8/embed/html,result/"></script>