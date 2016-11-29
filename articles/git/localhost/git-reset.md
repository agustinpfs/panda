<span class="hidden-excerpt"> Como utilizar comandos con reset. Borrar código hasta un punto en la historia. Ejemplos.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/git-reset.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Git reset

==Lo que hace reset es reiniciar Git en el punto o estado que indiquemos.==

**Veremos:**

<div class="color-title">

- git reset <br>

- git reset --soft <br>

- git reset --mixed <br>

- git reset --hard <br>

</div>

<br>

**git reset** (quitar archivos del staging area)

Luego de enviar modificaciones al [staging area o área de preparación](http://localhost:2368/flujo-de-trabajo-basico-con-git) con
el comando `git add` en alguna de sus variaciones, tales como
`git add -A` o `git add [Nombre de archivo]`. 

Es posible que nos arrepintamos y querramos volver atrás y quitarlas del "staging area". Lo podemos hacer con el comando:

`git reset HEAD`

Si solo queremos quitar un archivo determinado del "staging area" lo hacemos con el comando:

`git reset HEAD [nombre del archivo]`

<br>

**git reset --soft**

Borra el commit pero los datos del [directorio de trabajo (working directory)](http://localhost:2368/flujo-de-trabajo-basico-con-git)  y el
[área de preparación (staging area)](http://localhost:2368/flujo-de-trabajo-basico-con-git) no se tocan.

`git reset --soft [numero de commit anterior al que se quiere borrar]`

<br>

**git reset --mixed**

Borra el commit y los archivos del [staging area](http://localhost:2368/flujo-de-trabajo-basico-con-git) pero no toca los datos del [working directory (directorio de trabajo)](http://localhost:2368/flujo-de-trabajo-basico-con-git)

`git reset --mixed [numero de commit anterior al que se quiere borrar]`

<br>

**git reset --hard** 

Elimina todo de [los tres estados](http://localhost:2368/flujo-de-trabajo-basico-con-git), del working area, del staging area y del area de confirmaciones(commit).
Hay que tener cuidado porque pueden llegar a ser irrecuperables.

`git reset --hard [numero de commit anterior al que se quiere borrar]`

<br>

[Revertir un `git reset --hard`](#)


<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/git-reset.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/trabajar-con-ramas-git">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Ramas (branches)</span>
  </div>
  <a href="http://localhost:2368/funcionamiento-de-github/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Github. Funcionamiento</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[revertir un git reset --hard](#)

[Ejemplo de flujo de trabajo con Git](http://localhost:2368/ejemplo-de-flujo-de-trabajo-con-git)

