<span class="hidden-excerpt"> Instalación y configuración de Git. Configurar nombre y email para asociar los cambios del repositorio a una identidad. Reemplazar una confifuración
</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/instalacion-y-configuracion-de-git.md " target="_blank)</strong>

<!-- Fin links índice y github -->


#Instalación y configuración de Git

##Instalar Git

Descargar Git desde [https://git-scm.com/downloads](https://git-scm.com/downloads " target="_blank) y seguir las instrucciones de instalación.

Una vez instalado, abrir la terminal y verificar la instalación. Escribir:

`git --version`

Si Git se instaló correctamente, la terminal mostrará la versión de Git instalada.

Ejemplo: `git version 2.6.0`

En terminal:
<div class="console">
	<p>agustin@pandawebs-MacBook-Pro ~ $ git --version</p>
	<p>git version 2.6.0</p>
</div>
<br>



##Configurar Git

**Configuración de nombre y email para Git**

==Configuraremos nuestro nombre y email para asociar los cambios del repositorio a una identidad.==

###Configurar nombre:

**a)** GLOBAL: Utilizará por defecto el mismo nombre para todos los repositorios 
que vayas a crear en tu computadora. <br>
`git config --global user.name "Agustin"` <br><br>
De esta manera cada repositorio creado en cualquier directorio se le asignará este nombre.

En terminal(cualquier directorio):

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro $ git config --global user.name "Agustin"</p>
</div>

> Esta configuración global es la mas común ya que por lo general, los repositorios locales son del único dueño de la computadora.

**b)** LOCAL: Para un repositorio en particular.

`git config user.name "Agustin"` 


En terminal. En el directorio raíz del proyecto("practicasGit" en este ejemplo):

<div class="console">
  <p>agustin@pandawebs-MacBook-Pro practicasGit $ git config user.name "Agustin"</p>
</div>


> Podemos utilizar el comando anterior (local) aunque ya tengamos definido un usuario global. El nuevo nombre sobreescribirá el nombre definido globalmente en ese repositorio.

**Para ver el nombre de usuario de un repositorio Git.**

`git config user.name`

<div class="console">
	<p>agustin@pandawebs-MacBook-Pro ~ $ git config user.name</p>
	<p>agustin</p>
</div>

<br>

**Para cambiar el nombre de usuario en un repositorio Git** simplemente lo volvemos 
a crear y esta acción sbreescribirá el nombre anterior.

Global: `git config --global user.name [Otro Nombre]`

Local: `git config user.name [Otro Nombre]`

<br>

###Configurar email:

Global: `git config --global user.email "agustin@example.com"`

Local: `git config user.email "agustin@example.com"`

<br>

**Para ver el email de usuario de un repositorio Git.**

`git config user.email`

<div class="console">
	<p>agustin@pandawebs-MacBook-Pro ~ $ git config user.email</p>
	<p>agustin@example.com</p>
</div>

<br>

**Para cambiar el email de usuario en un repositorio Git** simplemente lo volvemos 
a crear y esta acción sbreescribirá el email anterior.

**Para ver todos los detalles de la configuración**

`git config --list`
<br>
<br>



<!-- Inicio links índice y github -->


<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/instalacion-y-configuracion-de-git.md " target="_blank)</strong>


<!-- Fin links índice y github -->
<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/git-concepto-repositorios">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Git. Concepto - repositorios</span>
  </div>
  <a href="http://localhost:2368/crear-un-repositorio/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>¿Cómo crear un repositorio?</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Flujo de trabajo básico con Git](http://localhost:2368/flujo-de-trabajo-basico-con-git)

[¿Cómo crear un repositorio?](http://localhost:2368/crear-un-repositorio/)

