<span class="hidden-excerpt">¿Qué es un Pull request?¿Cómo hacerlo? Ejemplo Pull request en 10 pasos. Repositorio de práctica.</span>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>
<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/pull-request.md " target="_blank)</strong>

<!-- Fin links índice y github -->

#Pull request

Pull request (PR) sirve para proponer un cambio, corregir algún error, 
agregar o mejorar el código en algún repositorio público.

A través de un PR podemos darnos a conocer en alguna organización 
y hasta conseguir unirnos si nuestras propuestas son de interés
para el desarrollo del proyecto.

##Cómo hacer un pull request

>Primero veremos una descripción de los pasos 
que tenemos que realizar y luego un ejemplo ilustrado para que lo puedas seguir y crear rapidamente un PR. [- saltar al ejemplo -](#head1)

##Descripción de los pasos a seguir:

Realizamos un [fork](http://localhost:2368/fork-un-repositorio) del proyecto que queremos colaborar. 

Lo clonamos en nuestra computadora:

`git clone [url HTTPS o SSH del repositorio fork]`

<small> Ver protocolos de conexión HTTPS y SSH [generar clave SSH](http://localhost:2368/ssh-https-conexion-github)- 
</small>

Conectamos con el repositorio original:

`git remote add upstream [url HTTPS o SSH del repositorio original]`

Conectamos con el repositorio fork:

`git remote add origin [url HTTPS o SSH del repositorio fork]`

Creamos una rama:

`git branch [nueva-rama]`

Nos cambiamos a la nueva rama:

`git checkout nueva-rama`

Hacemos los cambios y guardamos con:

`git add -A`

`git commit -m "descripción commit"`

Subimos la nueva rama con los cambios al fork:

`git push origin nueva-rama`


En GitHub:

Elegimos en el desplegable branch > branches y la rama en la que hicimos el cambio para proponer.

![alt](http://localhost:2368/assets/images/branches-github.png)

A la derecha del desplegable branch click a "new pull request".

Ponemos un título y una descripción a nuestro pull request y le damos click a
"Create pull request". 

Ahora quedará esperar que sea aceptado o no.

<br>

<a name="head1"></a>
##Ejemplo ilustrado de pull request en 10 pasos:
>Te animo que vayas haciendo los pasos mientras los lees. Modifica algún archivo y haz el pull request. (sin miedo! es un repositorio de práctica)

**En este ejemplo vamos a hacer un pull request a [nuestro repositorio de práctica(practicasGit)](https://github.com/Pandawebs/practicasGit " target="_blank) para proponer un index.html.**

_Nota_ <small> En este ejemplo usamos HTTPS como conexión. Para usar SSH [genera la clave](http://localhost:2368/ssh-https-conexion-github).</small>

<br>
<hr>

**Comencemos:**

**1)** Vamos a [la página del repositorio practicasGit](https://github.com/Pandawebs/practicasGit " target="_blank) y le hacemos un fork.

![alt](http://localhost:2368/assets/images/fork-git.png)

Automáticamente se nos redirige a la copia
del repositorio en nuestra cuenta.

![alt](http://localhost:2368/assets/images/forked-PR.png)

**2)** Abrimos la terminal y lo clonamos:

`git clone https://github.com/tuCuenta/practicasGit.git`

<small>Ver [Clonar un repositorio](http://localhost:2368/clonar-un-repositorio)</small>

**3)** Entramos a la carpeta clonada:

`cd practicasGit`

**4)** Conectamos:

`git remote add upstream https://github.com/Pandawebs/practicasGit.git`

`git remote add origin https://github.com/tuCuenta/practicasGit.git`

**5)** Creamos una rama. La llamaremos "propuesta-index":

`git branch propuesta-index`


**5)** Nos cambiamos a la nueva rama:

`git checkout propuesta-index`

**6)** Creamos un archivo index.html básico con un Hola Mundo!
>Si estás haciendo la práctica, agrega o modifica lo que sea.

```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Hola mundo!</h1>
</body>
</html>
```

y lo guardamos con:

`git add -A`

`git commit -m "creamos index.html"`

**7)** Subimos la nueva rama con los cambios al fork:

`git push origin propuesta-index`

Si usamos conexión HTTPS nos pedirá nombre de usuario y contraseña de GitHub.

<small>Usar SSH [genera la clave](http://localhost:2368/ssh-https-conexion-github).</small>



###En Github 

**8)** Elegimos la rama en la que hicimos el cambio para proponer.

![alt](http://localhost:2368/assets/images/PR-elegir-rama.png)



**9)** A la derecha del desplegable branch click a "new pull request"

![alt](http://localhost:2368/assets/images/PR-nuevo.png)



>Los 2 pasos anteriores(8 y 9) lo podemos hacer dándole al botón "Compare & pull request"

![alt](http://localhost:2368/assets/images/PR-compare.png)



**10)** Ponemos título y descripción(opcional) a nuestro pull request y le damos click a
"Create pull request". 

![alt](http://localhost:2368/assets/images/PR-final.png)


Aparece un mensje de que no hay conflictos. También una caja de comentarios por si queremos dejar uno.

![alt](http://localhost:2368/assets/images/PR-confirmacion.png)


Ahora quedará esperar que sea aceptado o no.


<br>
<br>

<!-- Inicio links índice y github -->

<span class="link-to-index-git">Git & Github elemental [ ver índice](http://localhost:2368/git-github-elemental/)</span>

<strong class="link-to-github">[Editar este artículo](https://github.com/Pandawebs/Git-y-GitHub-elemental/edit/master/pull-request.md " target="_blank)</strong>

<!-- Fin links índice y github -->

<hr>
<div class="post-content_next">
  <a href="http://localhost:2368/fork-un-repositorio">
    <div class="post-content_next-left">
      <p>anterior</p>
      <span>Fork un repositorio</span>
  </div>
  <a href="http://localhost:2368/git-github-elemental/">
    <div class="post-content_next-right">
      <p>siguiente</p>
      <span>Git y GitHub elemental. índice</span>
    </div>
  </a>
</div>
<br>

**Enlaces relacionados:**

[Git. Concepto - repositorios](http://localhost:2368/git-concepto-repositorios)

[Ramas (branches)](http://localhost:2368/trabajar-con-ramas-git)

