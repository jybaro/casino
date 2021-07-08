# La casa siempre paga

## Overview

El presente sistema es la solución al siguiente ejercicio:


### Detalle del Ejercicio

**Objetivo**

¡Has conseguido un trabajo de verano en Las Vegas! Desgraciadamente, estamos en 2020 y los casinos están cerrados debido al COVID-19. Tu jefe quiere trasladar parte del negocio a Internet y te pide que construyas una aplicación fullstack: un sencillo juego de máquinas tragamonedas con un pequeño giro: Debes construirla de manera que la casa siempre gane. 

**Brief**

Cuando un jugador comienza una partida/sesión, se le asignan 10 créditos. Tirar de la palanca de la máquina (hacer rodar las ranuras) cuesta 1 crédito. La pantalla de juego tiene 1 fila con 3 bloques. Para que el jugador gane la tirada, tiene que conseguir el mismo símbolo en cada bloque. Hay 4 símbolos posibles: cereza 🍒 (recompensa de 10 créditos), limón 🍋 (recompensa de 20 créditos), naranja 🍊 (recompensa de 30 créditos) y sandía 🍉 (recompensa de 40 créditos). El estado del juego (sesión) debe mantenerse en el servidor. Si el jugador sigue ganando, puede jugar para siempre, pero la casa tiene algo que decir al respecto... Hay un botón de CASH OUT (para retirar créditos) en la pantalla, pero también hay una vuelta de tuerca en eso...

**Tareas**

* Implementa la tarea utilizando cualquier lenguaje o framework con el que te sientas cómodo.
* Cuando un usuario abre la aplicación, se crea una sesión en el servidor, y tiene 10 créditos iniciales.
* Del lado del servidor:
    * Cuando un usuario tiene menos de 40 créditos en la sesión de juego, sus tiradas son realmente aleatorias.
    * Si un usuario tiene entre 40 y 60 créditos, entonces el servidor empieza a hacer un poco de trampa:
        * Por cada tirada ganadora, antes de comunicarla al cliente, el servidor hace una tirada de 30% de probabilidad que decide si el servidor volverá a tirar en esa ronda. 
        * Si eso es verdadero, el servidor vuelve a tirar y comunica el nuevo resultado. 
    * Si el usuario tiene más de 60 créditos, el servidor actúa igual, pero en este caso la probabilidad de repetir la ronda aumenta al 60%. 
    * Hay un punto final de cobro que mueve los créditos de la sesión de juego a la cuenta del usuario y cierra la sesión. 
* Del lado del cliente:
    * Incluir una tabla súper simple y minimalista con 3 bloques en 1 fila.
    * Incluir un botón al lado de la tabla que inicie el juego.
    * Los componentes de cada signo pueden ser un emoji o una letra inicial (C o 🍒 de cereza, L o 🍋 de limón, N o 🍊 de naranja, S o 🍉 de sandía), pero hay puntos de bonificación para el uso de activos SVG (tal vez conseguir algo de internet). 
    * Después de enviar una solicitud de tirada al servidor, todos los bloques deben entrar en un estado de giro (puede ser el carácter 'X' girando, pero hay puntos de bonificación usando una animación o SVG de spinner). 
    * Después de recibir la respuesta del servidor, el primer signo debe girar durante 1 segundo más y luego mostrar el resultado, luego mostrar el segundo signo a los 2 segundos, luego el tercer signo a los 3 segundos. 
    * Si el usuario gana la ronda, su crédito de sesión se incrementa en la cantidad de la respuesta del servidor, de lo contrario se deduce en 1. 
    * Incluir un botón en la pantalla que diga "CASH OUT", pero cuando el usuario lo pasa por encima, hay un 50% de posibilidades de que el botón se mueva en una dirección aleatoria de 300px, y un 40% de posibilidades de que se convierta en no pulsable (esta tirada debe hacerse en el lado del cliente). Si consiguen pulsarlo, los créditos de la sesión se trasladan a su cuenta. 


## Arquitectura

Se ha utilizado MongoDB como base de datos, NodeJS con Express.js para los servicios REST, y React.js para la implementación del frontend. Todas las capas se las ha encapsulado en un projecto de Docker Compose, para facilitar su instalación y uso.


## Cómo hacer funcionar el sistema

1. Asegurarse de tener instalado Docker.
1. Descargar o clonar el proyecto de GitHub.
1. En una consola de comandos, ubicarse en el directorio raíz del proyecto. 
1. Ejecutar el comando: docker-compose up -d
1. Asegurarse que el Firewall de la máquina no bloquee los puertos locales 8080 y 30000.
1. Abrir un navegador en la URL http://localhost:8080