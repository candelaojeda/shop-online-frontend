# SHOPP ON LINE  - ROOFTOP ACADEMY

## Acerca de la consigna del proyecto
**Rooftop - Challenge Frontend.**
Hemos llegado al final del onboarding!
Ahora es el momento de demostrar todo lo que aprendiste durante los pasados meses.
Es un desafio por lo tanto vamos a pedir que hagas un esfuerzo extra para que demuestres al máximo hasta donde sos capaz de llegar.

**Requerimiento**
El project manager nos cuenta que habló con un cliente nuevo, que todavía no está muy
decidido, pero sabe que necesita un comercio electrónico, una tienda on line. Por ahora se conforma con un MVP, así que comenzaremos por algunas cosas básicas que son indispensables. Nos pide que el sitio contenga al menos 3 páginas:
- Home
- Catalogo
- Detalle del producto

**Datos**
¿De donde obtengo los datos para cumplir con la consigna?
Hemos habilitado una API REST para que puedas consumir y hacer el ejercicio.
La información que utilizarás ya está provista por nosotros a través de una API REST.
La API se encuentra en el dominio https://rooftop-api-rest-frontend.herokuapp.com
Dispones de 2 endpoints: `items` y `questions`.
##### Items
Solo acepta llamadas por GET.
Para hacer los ejercicios de datos de productos deberas usar el endpoint items
Puedes pasarle un parametro por querystring que diga limit=4 y te devolvera
solamente esa cantidad de productos.
##### Questions
Acepta llamads por GET y POST.
Cuando muestres el detalle del producto deberas mostrar tambien todos los
comentarios del mismo, pero eso no viene con el producto sino que lo pides aparte al
endpoint questions pasando por querystring el parametro item_id = 1 y te devolverá
las preguntas asociadas al producto del id que le indicaste. Ten en cuenta que es posible
que en algun producto no haya preguntas.
Al clickear el formulario de enviar consulta, deberas usar "POST" hacia questions.

------------

A continuacion detallamos lo que debe ir en cada página, apareciendo en el orden en que se menciona.

1) Home:
- Un banner principal
Para empezar puede ser con 1 sola imagen fija
Pero lo ideal es que sean hasta 3 imagenes dinámicas
- Un listado con 4 productos aleatorios
Para hacerlo aleatorio te recomendamos usar esta libreria [https://underscorejs.org/#shuffle](A continuacion detallamos lo que debe ir en cada página, apareciendo en el orden en que se menciona. Home: Un banner principal Para empezar puede ser con 1 sola imagen fija Pero lo ideal es que sean hasta 3 imagenes dinámicas Un listado con 4 productos aleatorios Para hacerlo aleatorio te recomendamos usar esta libreria https://underscorejs.org/ #shuffle "https://underscorejs.org/#shuffle")

2) Catálogo:
- Listado de productos
- Por cada producto se mostrará una foto, un titulo y el precio
- Si el producto está en oferta, solo se debe mostrar el precio de oferta en color verde
- Cada item del listado debe ser clickeable para ir hacia la pagina de detalle

3) Detalle:
- En la pagina de detalle se puede ver toda la informacion del producto.
- Las fotos del producto deben mostrarse en forma de galería.
- Puedes usar esta librería [https://www.npmjs.com/package/react-image-gallery](https://www.npmjs.com/package/react-image-gallery)
- Es necesario que siempre aparezcan las flechas a ambos lados.
- Y que se pueda ver en modo de pantalla completa.
- Despues de la informacion del producto debe haber un formulario para dejar consultas
acerca del producto.
- Solo es necesario un campo de texto grande para el mensaje de la consulta.
- Aqui se necesita validar que el mensaje contenga entre 10 y 500 caracteres.
- Y un campo de texto para el email.
- Aqui se necesita validar que el texto sea un email valido.
- Por supuesto un boton para hacer el envio.
- Para validar puedes usar [https://www.npmjs.com/package/react-hook-form](https://www.npmjs.com/package/react-hook-form)
- Los productos que estan en oferta tienen una fecha de finalizacion de la oferta
- Hay que mostrar algo que diga "esta oferta finaliza en XX dias XX horas"
- Para calcular la diferencia entre fechas puede usar [https://day.js.org/](https://day.js.org/)

**Para todo el sitio:**
- Un menu superior que ocupe el 100% del ancho, que contenga el logo a la izquierda.
- Un footer con el copyright que diga el año actual usando programación.
- Nos piden usar una tipografía especial en todo el sitio que se llama "Mulish".
- El color por defecto de toda la tipografía del sitio es #252525
- El fondo debe ser de color blanco.
- Las cajas contenedoras pueden tener un borde de 1px, solido, de color gris claro.

## Acerca del proyecto
#### Herramientas
- Git
- Github
- React
- React Router
- React Redux
- React Bootrstrap (opcional)
- Typora

#### Link API REST
[https://rooftop-api-rest-frontend.herokuapp.com/](https://rooftop-api-rest-frontend.herokuapp.com/)

#### Links de librerías recomendadas
[https://underscorejs.org/#shuffle](https://underscorejs.org/#shuffle)
[https://www.npmjs.com/package/react-image-gallery](https://www.npmjs.com/package/react-image-gallery)
[https://www.npmjs.com/package/react-hook-form](https://www.npmjs.com/package/react-hook-form)
[https://day.js.org/](https://day.js.org/)

#### Links de ayuda utilizados

## Acerca de los requerimientos
- npm o yarn
- git

## Acerca del despliegue local
Ejecutar los siguientes comandos:
`npm install`
`npm run serve`
