<span class="hidden-excerpt"> Creación de un repositorio Git. Convertir cualquier proyecto en un repositorio Git. Ejemplos en terminal.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/crear-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->



##¿Cómo crear un repositorio?


Después de [instalar Git en nuestra computadora](http://pandawebs.net/instalacion-y-configuracion-de-git/) ya podremos iniciar Git en cualquier carpeta para que ésta se convierta en un repositorio.

Para iniciar Git. En la terminal, ir a la carpeta del proyecto(practicasGit) y escribir:

`git init`

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git init</p>
  <p>Initialized empty Git repository in /Users/agustinpfs/practicasGit/.git/
</p>
</div>

"Initialized empty Git repository" nos dice que ya tenemos un repositorio Git.


Lo que hace`git init` es crear un archivo .git que guardará las versiones del proyecto en los puntos que le indiquemos mientras se producen cambios en los archivos.


Para corroborar que realmente se ha creado el repositorio, tipeamos en la terminal:
`git status`

Si **no** devuelve algo como esto: `'fatal: Not a git repository...'`, está todo bien.
El repositorio ha sido creado.

> Esto funciona para cualquier proyecto por más que esté avanzado en el desarrollo.
A partir de que iniciamos Git ya se podran ir creando y controlando versiones.

[Crear un repositorio en GitHub](http://pandawebs.net/funcionamiento-de-github/)
<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/crear-un-repositorio.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/instalacion-y-configuracion-de-git">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Instalación y configuración</span>
  </div>
  <a href="http://pandawebs.net/flujo-de-trabajo-basico-con-git/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Flujo de trabajo básico con Git</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Git reset](http://pandawebs.net/git-reset)

[Crear un repositorio en GitHub](http://pandawebs.net/funcionamiento-de-github/)

