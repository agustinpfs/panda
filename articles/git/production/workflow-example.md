<span class="hidden-excerpt">Ejemplo del flujo de trabajo con Git. Etapas elementales para ejecutar y controlar el control de versiones.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/ejemplo-de-flujo-de-trabajo-basico-con-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->

##Ejemplo de flujo de trabajo con Git.

Luego de crear una carpeta vacía e [iniciar Git](http://pandawebs.net/crear-un-repositorio). Vamos a crear el archivo README.md con algo de información(nombre del proyecto, autor, etc) que podremos ir editando y ampliando a lo largo del proyecto.

Archivo .md escrito en [markdown](#):
![alt](http://pandawebs.net/assets/images/README.md.png)

> **README** es un archivo generalmente .txt o .md(.md es la extensión de un archivo [markdown](#)). 
Un archivo README.md se utiliza comunmente para que se imprima en la página principal del proyecto en Github). Es el primer lugar que los usuarios potenciales y colaboradores van a buscar información sobre tu proyecto. Como nombre, instalación, colaboradores, licencia etc. 
Es importante y por lo general es el primer archivo de nuestro proyecto.

###Git status (working directory)

Una vez creado escribiremos en la terminal, en la carpeta principal del proyecto:
`git status`

Este comando corrobora que Git hizo el seguimiento de la creación del archivo README.md 

En terminal:
<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git status</p>
  <p>On branch master</p>
  <p>Initial commit</p>
  <p>Untracked files:</p>
    <p>(use "git add <file>..." to include in what will be committed)</p>
    <p style="color:#cc0000;margin-left: 5rem">README.md</p>
  <p>nothing added to commit but untracked files present (use "git add" to track)</p>
</div>
<br>

`git status` nos sirve para saber si hubo cambios en nuestro proyecto. Mostrará los nuevos archivos y/o los cambios realizados en archivos que hayan sido modificados.

###Git add (staging area)

Con el comando `git add -A` registraremos todos los cambios. Se agregaran al staging area los nuevos archivos y/o los archivos que han sido editados.

Otras opciones comunes para `git add`:

`git add NombreArchivo.txt`. Agrega sólo el archivo que le indiquemos.
`git add .` agrega todos los archivos que se hayan modificado(no creados).

###Git commit (confirmación)

Con el comando `git commit -m "Creamos README.md"` confirmamos y enviamos todos los cambios al historial del repositorio.

Repetiremos los pasos cuando hayamos creado, editado y/o borrado un archivo y creamos
conveniente que Git guarde una versión hasta ese cambio.

**Nuevos cambios en el proyecto:**

Supongamos que agregamos información al archivo README.md de nuestro ejemplo.

Agregamos contacto y lo guardamos.
![alt](http://pandawebs.net/assets/images/README.md-2.png)

Hacemos `git status`

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git status</p>  
  <p>(use "git add <file>..." to update what will be committed)</p>
  <p>(use "git checkout -- <file>..." to discard changes in working directory)</p>


    <p style="color:#cc0000;margin-left: 5rem">modified:  README.md</p>

  <p>no changes added to commit (use "git add" and/or "git commit -a")</p>

</div>
<br>


Vemos que nos indica que el archivo README.md ha sido modificado. **Aún este cambio no es seguido por Git**.

Agregamos los archivos que han sido editados al [staging area o área intermedia](http://pandawebs.net/flujo-de-trabajo-basico-con-git).

Veamos 2 ejemplos comunes de comandos para agrgar archivos al staging area:

`git add README.md` (Agrega el archivo especificado)
ó
`git add -A` (Agrega todos los archivos que han sido editados o creados)

Ahora realizamos el commit.

`git commit -m "Agregamos contacto a README.md"`

##Git log

Ya tenemos dos versiones. Para ver una lista y descripción de las versiones de nuestro
proyecto escribimos `git log`

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git log</p>  
  <p style="color:#ff9900">commit 57oc67af0e2d8d825a7c47b45c5adbea615170ed</p>  
  <p>Author: agustin <agustin@example.com></p>
  <p>Date:   Mon Oct 24 19:09:54 2016 -0300</p>

    <p style="margin-left: 5rem">Agregamos contacto a README.md</p>

  <p style="color:#ff9900">commit 57b46c2aaboc67af0e2d8c825a7c47ea915170fd</p>  
  <p>Author: agustin <agustin@example.com></p>
  <p>Date:   Mon Oct 24 19:15:14 2016 -0300</p>

    <p style="margin-left: 5rem">Creamos README.md</p>

</div>

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/ejemplo-de-flujo-de-trabajo-basico-con-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/flujo-de-trabajo-basico-con-git">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Flujo de trabajo básico con Git</span>
  </div>
  <a href="http://pandawebs.net/trabajar-con-ramas-git/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Ramas (branches)</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Git clone. Clonar un repositorio](http://pandawebs.net/clonar-un-repositorio)

[Ramas (branches)](http://pandawebs.net/trabajar-con-ramas-git)

