<span class="hidden-excerpt">Tutorial para la edición de los artículos de Pandawebs y práctica de pull request mediante Git y GitHub.</span>

<div class="post-content_next">
  <div style="visibility: hidden" class="post-content_next-left">
    <a href=""></a>
    <i>.</i>
  </div>
  <a href="http://pandawebs.net/git-github-elemental/">
    <div class="post-content_next-right">
      <p>Curso elemental de Git y GitHub</p>      
    </div>
  </a>
</div>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/edit-articlesPW/edit/master/editar-articulo.md " target="_blank)</strong>

>Tu colaboración en la mejora de los artículos ayuda al aprendizaje de todos y a
enriquecer la educación online con material de calidad.
Con tu aporte te unes a nuestra comunidad que tiene tus mismos intereses:
Compartir conocimiento, ser independiente y conocer gente dispuesta a escuchar y
colaborar en tus proyectos e ideas a través de lo que enseñas.

#Editar un artículo de Pandawebs
<span class="links-external">[Repositorio](https://github.com/Pandawebs/edit-articlesPW " target="_blank) [Video tutorial](youtube.com " target="_blank)</span>

La edición de los artículos se hacen mediante "pull requests" a través de Git y GitHub.
Un pull request es la forma de proponer un cambio en cualquier repositorio público.
La práctica del pull request es un arma poderosa para tu relación con programadores y
organizaciones.

>En este tutorial veremos paso a paso como proponer una edición para los artículos
de Pandawebs. 
Igualmente te animo que visites el [tutorial sobre pull request](http://pandawebs.net/pull-request/) en nuestro [curso elemental de Git y GitHub](http://pandawebs.net/git-github-elemental/).

Enseñaremos dos formas con las que podrás editar.

1. Directamente en GitHub.

2. Desde tu computadora.



##1.Directamente en GitHub.
[Video tutorial](youtube.com " target="_blank)

Este es el camino mas sencillo si aún no sabes Git.

Necesitaremos tener una cuenta en [GitHub](https://github.com/ " target="_blank)

Para editar un artículo en GitHub le daremos click al enlace "Editar este artículo", ubicado al principio y al final de los artículos.


![alt](http://pandawebs.net/assets/images/edit-pw-link.png)

Seremos redireccionados a la página de edición del artículo en GitHub.
Si es la primera edición que haces en el repositorio deberás hacer un [fork](http://pandawebs.net/fork-un-repositorio/) antes de editar.
GitHub pone un botón que hace el [fork](http://pandawebs.net/fork-un-repositorio/) y abre la página de edición del artículo directamente.

![alt](http://pandawebs.net/assets/images/fork-y-edicion.png)

Dándole click se abre la página de edición donde podremos hacer los cambios y el pull request fácilmente, dejando creada la propuesta para el análisis, debate y aceptación.

* Haremos los cambios deseados intentando mantener la estructura y respetando el [Markdawn](https://es.wikipedia.org/wiki/Markdown " target="_blank).
No te preocupes si dudas en cómo poner cierto concepto o en la sintaxis del Markdown, luego analizaremos juntos los cambios para que se publiquen de la manera óptima.

![alt](http://pandawebs.net/assets/images/edit-article1.png)

* Al final de la página encontramos un formulario con un campo para poner la descripción corta de los cambios (commit) y otro para extender la descripción (opcional).
Finalmente click en el botón verde "Commit changes" para enviar los cambios.

![alt](http://pandawebs.net/assets/images/edit-article2.png)

Seremos redirigidos a una página donde se nos muestra una comparación de los cambios y el botón para hacer el pull request.

![alt](http://pandawebs.net/assets/images/crear-pull-request.png)

Luego de darle click aparece una caja de comentarios para explicar e iniciar la discusión sobre los cambios efectuados.
Haciendo click en el botón "Create pull request" queda abierto publicamente a la discusión y/o aceptación de los cambios.

![alt](http://pandawebs.net/assets/images/comment-pull-request.png)

<hr>

##2.Desde tu computadora.
[Video tutorial](youtube.com " target="_blank)

Se requiere [instalar Git](#).

Se recomienda tener conocimientos básicos de Git y GitHub. [Curso elemental Git y GitHub](#).

Con esta forma de edición de artículos practicarás la colaboración en repositorios públicos ( [pull request](#) ).
Es fundamental que aprendas este concepto si deseas en algún momento trabajar con un equipo de desarrollo.


**1)** Click al enlace "Editar este artículo".

![alt](http://pandawebs.net/assets/images/edit-pw-link.png)

**2)** Hacemos un fork.

![alt](http://pandawebs.net/assets/images/fork-git.png)

Automáticamente se nos redirige a la copia
del repositorio en nuestra cuenta.

![alt](http://pandawebs.net/assets/images/forked-PR-2.png)

**3)** Copiamos la dirección url. Abrimos la terminal en el directorio que vayamos a trabajar y lo clonamos:

Copiamos la dirección HTTPS o SSH [generar la clave SSH](http://pandawebs.net/ssh-https-conexion-github/ " target="_blank).

![alt](http://pandawebs.net/assets/images/clonar-un-repositorio.png)

`git clone https://github.com/tuCuenta/Tutoriales-Javascript.git`

![alt](http://pandawebs.net/assets/images/clone-repo-pw.png)

<small>Ver [Clonar un repositorio](http://pandawebs.net/clonar-un-repositorio)</small>

*Continuamos en la terminal*

**4)** Entramos a la carpeta clonada:

`cd Tutoriales-Javascript`


**5)** Creamos una rama. La llamaremos "propuesta-js":

`git branch propuesta-js`


**6)** Nos cambiamos a la nueva rama:

`git checkout propuesta-js`

**7)** Abrimos el archivo del artículo en nuestro editor de código y lo editamos.

![alt](http://pandawebs.net/assets/images/editor-edit-pw.png)

Lo guardamos y volvemos a la terminal:

Escribimos:

`git add -A`

`git commit -m "actualizamos artículo javascript"`

**8)** Subimos la nueva rama con los cambios al fork:

`git push origin propuesta-js`

Si usamos conexión HTTPS nos pedirá nombre de usuario y contraseña de GitHub.

<small>Usar SSH [genera la clave](http://pandawebs.net/ssh-https-conexion-github).</small>

**Ver:** [Mantener actualizado nuestro repositorio fork con el original(upstream)](http://pandawebs.net/fork-un-repositorio/#ejemplo)

<br>

### Seguimos en GitHub 

**9)** Elegimos la rama en la que hicimos el cambio para proponer.

![alt](http://pandawebs.net/assets/images/PR-elegir-rama-2.png)



**10)** A la derecha del desplegable branch click a "new pull request"

![alt](http://pandawebs.net/assets/images/PR-nuevo-2.png)



>Los 2 pasos anteriores(8 y 9) lo podemos hacer dándole al botón "Compare & pull request"

![alt](http://pandawebs.net/assets/images/PR-compare.png)



**11)** Ponemos título y descripción(opcional) a nuestro pull request y le damos click a
"Create pull request". 

![alt](http://pandawebs.net/assets/images/comment-pull-request.png)


Aparece un mensje de que no hay conflictos. También una caja de comentarios por si queremos dejar uno.

![alt](http://pandawebs.net/assets/images/PR-confirmacion.png)


Ahora quedará esperar que sea aceptado o no.

<br>
<br>
<div class="post-content_next">
  <div style="visibility: hidden" class="post-content_next-left">
    <a href=""></a>
    <i>.</i>
  </div>
  <a href="http://pandawebs.net/git-github-elemental/">
    <div class="post-content_next-right">
      <p>Curso elemental de Git y GitHub</p>      
    </div>
  </a>
</div>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/edit-articlesPW/edit/master/editar-articulo.md " target="_blank)</strong>

