<span class="hidden-excerpt">Qué es HTML. Etiquetas. Head & Body. Semántica.</span>

<span class="link-to-index-git">Curso Práctico de Html, Css y JavaScript. [ ver índice](http://localhost:2368/curso-html-css-js/)</span>

<hr>

<div class="post-content_next">
  <a href="http://localhost:2368/consideraciones-preliminares/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>consideraciones preliminares</span>
  </div>
  <a href="http://localhost:2368/html/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>html</span>
    </div>
  </a>
</div>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/course-html-css-js/edit/master/articles/wireframes.md " target="_blank)</strong>


#HTML
(HyperText Markup Language)Lenguaje de Marcado para Hipertextos.

HTML es el archivo indispensable para hacer una página web. Se construye a través de etiquetas(apertura y cierre) que encierran elementos de la estructura de nuestra web o dotan de atributos y características para un determinado funcionamiento.

Las etiquetas de apertura se escriben entre los signos menor y mayor que. `<nombreEtiqueta>`.
Las de cierre se le agrega una barra `/` antes del nombre de la etiqueta. `</nombreEtiqueta>`.
Existen etiquetas que no necesitan la de cierre ya que no necesitan encerrar contenido y se valen del uso de atributos.

Atributos son valores adicionales que determinan un comportamiento. Se escriben en la etiqueta de apertura como pares de clave-valor `clave="valor"`.


La siguiente estructura es la base elemental con la que deberíamos comenzar nuestro proyecto independientemente del diseño.

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Curso HTML</title>
</head>
<body>
	
</body>
</html>

1- `DOCTYPE` indica al navegador web qué versión HTML está escrita la página. En este caso HTML5.
2- La etiqueta `html` encierra el resto de etiquetas que conformarán el sitio. El atributo `lang` determina el lenguaje en el que está escrito. EspaÑol en nuestro caso `es`.  
Es importante para los motores de búsqueda, navegadores, lectores de pantalla, etc.
3- La etiqueta `head` encierra etiquetas con información general. Se los conoce como metadatos. Incluye título del sitio, codificación, enlaces a scripts y hojas de estilos etc. Iremos ampliando mientras avancemos con el curso.
4- Las etiquetas `meta` indican información a tener en cuenta para los navegadores. Esta información no es visible para el usuario común. La etiqueta meta con el atributo `charset="UTF-8"` indica a los navegadores que la codificación de caracteres (charset) utiliza el formato "Unicode" que significa que podrá representar caracteres como la letra Ñ y acentos.
5- La etiqueta `title` indica el título del sitio. Es importante para los motores de búsqueda y es el título que se mostrará en la pestaÑa del navegador ![alt](http://localhost:2368/assets/images/wireframe.png).
7- La etiqueta `body` representa el cuerpo del sitio. Lo que se verá en la pantalla del navegador.Va a contener todos los objetos que son parte de la estructura del sitio.

##Semántica
Las etiquetas html tienen un significado semantico, es decir que transmiten cierta información sobre el tipo de contenido entre las etiquetas de apertura y cierre.
Una buena semántica ayuda a los navegadores y lectores de pantalla la correcta clasificación del contenido.
También hará que nuestro código sea más legible.
Hay casos que según la etiqueta, nos mostrará el contenido de cierta manera.
Por ejemplo la etiqueta `<h1>` Se utiliza para el título del encabezado principal. Y por defecto se mostrará con un tamaÑo mayor al resto de los encabezados.
Podríamos utilizar una etiqueta de párrafo para el mismo título y aumentarle el tamaÑo mediante CSS. El título se vería de la misma manera pero sería confuso para alguien que lea el código y también sería contraproducente para los motores de búsqueda ya que no interpretarían dicho contenido como el título principal.
La etiqueta `<section>` representa una sección de la página y puede encerrar una etiqueta `<article>`
 que encierra un artículo. Podríamos utilizar la etiqueta `<div>` (encierra un bloque de contenido) en ambos casos y tendríamos el mismo resultado. Pero la clasificación de los elementos en nuestro código se vería limitada en cuestion de órden y legibilidad.
 Por todo esto intentaremos utilizar las etiquetas que denoten que tipo de contenido encerrarán.

 A medida que avancemos con el curso y en la práctica entenderemos a la perfección estos conceptos.

##Trabjo Práctico
Investigar sobre las [principales etiquetas html](#).
No te preocupes por entenderlas a la perfección ya que las iremos profundizando en la práctica del desarrollo del sitio.

<br>

==**_Involucrate, comparte, ayuda, investiga en Internet, aporta tus conocimientos. Recuerda que tu beneficio es el beneficio de todos. Nuestro anhelo es que este curso nos aporte valor a lo que somos y sirva para ser mejores profesionales, profesores, estudiantes y personas._**==

<br>

<span class="links-external">[Repositorio](https://github.com/Pandawebs/Tutoriales-Javascript " target="_blank) [Video ](youtube.com " target="_blank)</span>

<hr>

<div class="post-content_next">
  <a href="http://localhost:2368/consideraciones-preliminares/">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>consideraciones preliminares</span>
  </div>
  <a href="http://localhost:2368/html/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>html</span>
    </div>
  </a>
</div>

<br>

<span class="link-to-index-git">Curso Práctico de Html, Css y JavaScript. [ ver índice](http://localhost:2368/curso-html-css-js/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/course-html-css-js/edit/master/articles/wireframes.md " target="_blank)</strong>
