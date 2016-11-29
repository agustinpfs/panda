<span class="hidden-excerpt"> Veamos las 3 principales áreas donde se desarrolla el trabajo con Git. Directorio de trabajo (working directory). Área intermedia o de preparación(index - staging area). Confirmación (Git directory)</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/flujo-de-trabajo-basico-con-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->

##Flujo de trabajo básico con Git (basic Git workflow)

Se compone de tres pasos y son la base para trabajar con Git.
Se las conoce también como los tres estados.

1. <i class="color-title">Directorio de trabajo (working directory)</i>. Es donde trabajamos con nuestros archivos,
creándolos, modificándolos o borrándolos.

2. <i class="color-title">Área intermedia o de preparación(index - staging area)</i>. Es un área donde se envían todos los cambios que se hicieron en el working directory y se encuentran listos para confirmarlos.
Al staging area se envían los cambios que afectarán el próximo commit. Se utiliza el comando `git add` seguido de algunas de sus variaciones, tales como:
`git add -A`(envía todos los cambios) ó `git add [nombre de archivo]`(envía un archivo en particular).

3. <i class="color-title">Confirmación (Git directory)</i>. Es la última versión del proyecto hasta el último commit.
Se crea cuando hacemos un commit usando el comando `git commit -m "Descripción de los cambios"`
Con este último paso se crea una versión hasta esos cambios de manera permanente con la descripción que le hayamos puesto.

Repetiremos los pasos luego de volver a editar el proyecto y creamos conveniente que Git guarde una versión hasta esos cambios.

> Para ver una lista y descripción de las versiones de nuestro proyecto escribimos `git log`

<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://pandawebs.net/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/flujo-de-trabajo-basico-con-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://pandawebs.net/crear-un-repositorio">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Cómo crear un repositorio</span>
  </div>
  <a href="http://pandawebs.net/ejemplo-de-flujo-de-trabajo-con-git/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Ejemplo de flujo de trabajo con Git</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Git fetch - git pull](http://pandawebs.net/git-fetch-git-pull/)

[Ejemplo de flujo de trabajo con Git](http://pandawebs.net/ejemplo-de-flujo-de-trabajo-con-git)

