<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Consultas avanzadas en SQL
    
    p Una vez que el desarrollador domina los fundamentos del SELECT y las funciones SQL, el siguiente nivel de competencia consiste en aprender a construir sentencias avanzadas que resuelvan problemas de mayor complejidad en el acceso a datos. Esto incluye situaciones en las que el resultado de una consulta depende de los resultados de otra (subconsultas), o en las que es necesario combinar y relacionar información proveniente de múltiples tablas (JOINs). Estas dos capacidades —subconsultas y JOINs— constituyen el núcleo del SQL avanzado y son las que más claramente diferencian a un desarrollador con dominio profundo de bases de datos de uno con un conocimiento básico del lenguaje.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las subconsultas añaden un nivel de expresividad que permite al SQL responder preguntas del tipo: ¿qué clientes compraron todos los productos de la categoría X? o ¿qué productos tienen un precio superior al precio promedio de su categoría? —preguntas que requieren que el resultado de una consulta sea utilizado como parte de otra consulta. Los JOINs, por su parte, implementan la operación más característica del modelo relacional, ya que recomponen en una sola vista cohesiva la información que el principio de normalización ha distribuido en múltiples tablas para eliminar redundancias y garantizar la integridad de los datos.

    .row.justify-content-center.mt-4
      .col-8
        p Juntas, estas técnicas permiten responder a prácticamente cualquier pregunta que se pueda formular sobre los datos almacenados en una base de datos relacional. La clave para utilizarlas efectivamente está en comprender con precisión qué tipo de resultado produce cada operador, en qué circunstancias es más apropiado usar subconsultas versus JOINs, y cómo el SMBD optimiza internamente estas operaciones para garantizar el mejor rendimiento posible.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Subconsultas y tipos de subconsultas
    
      p Una subconsulta (también llamada subquery o consulta anidada) es una sentencia SELECT que se integra dentro de otra instrucción SQL, como SELECT, INSERT, UPDATE o DELETE. La instrucción externa se conoce como consulta principal, mientras que la interna recibe el nombre de subconsulta. En términos de ejecución, el motor de base de datos suele evaluar primero la parte interna y utilizar su resultado para completar el procesamiento de la consulta principal, aunque los optimizadores modernos pueden reorganizar estas operaciones si identifican un plan más eficiente.

    .row.justify-content-center.mt-4
      .col-7
        p.bg-2.bg-r9.text-center.p-3 Estas estructuras pueden clasificarse de distintas maneras:

    .row.bg-06.p-md-5.mt-0
      .row.align-items-center.justify-content-center
        .col-lg-10
          .row.justify-content-center
            PasosA.color-primario(tipo="n")
              .row
                .col-lg-6.text-start
                  p #[b Según su ubicación dentro de la sentencia SQL]
                  p Pueden aparecer en la cláusula WHERE, donde se utilizan para filtrar resultados (las más habituales); en la cláusula FROM, funcionando como tablas derivadas que permiten construir conjuntos de datos intermedios; o en la lista del SELECT, donde actúan como subconsultas escalares que aportan valores calculados al resultado final.

                .col-6
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/tema4/2.png', alt='').img125

              .row
                .col-6
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/tema4/3.png', alt='').img125
                .col-lg-6.text-start
                  p #[b De acuerdo con el tipo de resultado que producen]
                  p Se distinguen subconsultas escalares, que devuelven un único valor; subconsultas de fila, que retornan una fila completa con múltiples columnas; y subconsultas de tabla, que producen conjuntos de múltiples filas y columnas que pueden ser utilizados por la consulta principal.

              .row
                .col-lg-6.text-start
                  p #[b Según su dependencia de la consulta exterior]
                  p Pueden ser no correlacionadas, cuando se evalúan una sola vez y su resultado se reutiliza, lo que suele ofrecer un mejor rendimiento; o correlacionadas, cuando dependen de valores de la consulta exterior y deben reevaluarse para cada fila, lo que incrementa su costo computacional, pero permite expresar condiciones más complejas.

                .col-6
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/tema4/4.png', alt='').img125

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La elección entre utilizar subconsultas o JOINs para resolver un mismo problema suele implicar consideraciones de estilo y rendimiento. En la mayoría de los motores modernos de bases de datos (como SQL Server, PostgreSQL o MySQL 8.0+), los optimizadores son capaces de transformar automáticamente ciertas subconsultas en JOINs cuando ello conduce a un plan de ejecución más eficiente. No obstante, existen escenarios en los que las primeras resultan más expresivas y legibles —especialmente en combinaciones con EXISTS— y otros en los que los JOINs ofrecen claras ventajas tanto en claridad como en desempeño.

    .titulo-tres.mt-5: h3 Subconsultas con IN y NOT IN

    p El operador IN con subconsulta es la forma más intuitiva de usar subconsultas, porque verifica si un valor de la consulta exterior existe en el conjunto de valores devueltos por la subconsulta interior. Es conceptualmente equivalente a una condición OR extendida sobre todos los valores del conjunto resultado. NOT IN verifica que el valor no pertenezca al conjunto. Una precaución importante: si la subconsulta de NOT IN puede devolver valores NULL, toda la condición puede producir resultados inesperados porque NULL NOT IN (conjunto con NULL) evalúa a NULL (no a TRUE ni FALSE) y por tanto, ninguna fila pasaría el filtro. Por esta razón, cuando se usa NOT IN con subconsultas, es importante asegurarse de que la subconsulta filtre los valores NULL explícitamente.

    .row.justify-content-center
      .col-lg-10  
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code6.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- IN: clientes que realizaron al menos un pedido en 2024
              | SELECT nombre, ciudad, email
              | FROM clientes
              | WHERE id_cliente IN (
              |   SELECT DISTINCT id_cliente
              |   FROM pedidos
              |   WHERE YEAR(fecha_pedido) = 2024
              |   AND   estado = 'completado'
              | );
              | 
              | -- NOT IN: clientes que NUEVA han realizado un pedido
              | -- (atención: filtrar NULLs en la subconsulta)
              | SELECT nombre, email, fecha_registro
              | FROM clientes
              | WHERE id_cliente NOT IN (
              |   SELECT DISTINCT id_cliente
              |   FROM pedidos
              |   WHERE id_cliente IS NOT NULL -- crítico para NOT IN
              | )
              | ORDER BY fecha_registro DESC;
              | 
              | -- IN con subconsulta compleja: productos comprados por clientes VIP
              | SELECT DISTINCT pr.nombre, pr.precio
              | FROM productos pr
              | WHERE pr.id_producto IN (
              |   SELECT dp.id_producto
              |   FROM detalle_pedidos dp
              |   JOIN pedidos p ON dp.id_pedido = p.id_pedido
              |   WHERE p.id_cliente IN (
              |     SELECT id_cliente FROM clientes WHERE categoria = 'Platino'
              |   )
              | );

    .titulo-tres.mt-4: h3 Subconsultas con ANY, SOME y ALL

    .row.bg-06.p-md-5.mt-0
      .row.align-items-center
        .col-lg-2.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema4/5.svg', alt='', style="width: 390px").m-auto
        
        .col-lg-10.bg-r8.p-3

          p.mt-3 Los operadores ANY (o su sinónimo SOME) y ALL permiten comparar un valor con todos los elementos del conjunto devuelto por una subconsulta. ANY devuelve TRUE si la comparación es verdadera para al menos uno de los valores del conjunto (es decir, si la condición se cumple con alguno de los valores). ALL devuelve TRUE solo si la comparación es verdadera para todos los valores del conjunto (la condición se cumple con todos). Estos operadores combinados con los operadores de comparación (=, <>, >, <, >=, <=) proporcionan una gran flexibilidad para expresar condiciones que de otra manera requerirían funciones de agregación como MIN o MAX.

      .row.justify-content-center
        .col-lg-10  
          .etiqueta-barra.mb-3
            p.mb-0 Ejemplo:
          .tarjeta.bg-code8.mb-4
            pre.language-sql.w-100.mb-0
              code.text-white
                | -- ANY: productos más caros que algún producto de Electrónica
                | SELECT nombre, precio FROM productos
                | WHERE precio > ANY (
                |   SELECT precio FROM productos
                |   WHERE id_categoria = (SELECT id_categoria FROM categorias WHERE nombre = 'Electrónica')
                | );
                | -- Equivalente a: precio > MIN(precios de Electrónica)
                | 
                | -- ALL: productos más caros que TODOS los de Electrónica
                | SELECT nombre, precio FROM productos
                | WHERE precio > ALL (
                |   SELECT precio FROM productos
                |   WHERE id_categoria = (SELECT id_categoria FROM categorias WHERE nombre = 'Electrónica')
                | );
                | -- Equivalente a: precio > MAX(precios de Electrónica)
                | 
                | -- = ANY: equivalente exacto a IN
                | SELECT nombre FROM clientes
                | WHERE ciudad = ANY ('Bogotá', 'Medellín', 'Cali'); -- igual que IN

    .titulo-tres.mt-5: h3 Subconsultas con EXISTS y NOT EXISTS

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg.p-3
                p El operador EXISTS verifica si la subconsulta devuelve al menos una fila, sin importar los valores específicos de esas filas. La subconsulta de EXISTS generalmente se escribe como SELECT 1 (o SELECT *) para indicar que no se necesita recuperar ningún valor en particular, solo verificar si existe al menos un registro que cumpla la condición. EXISTS tiende a ser más eficiente que IN cuando la subconsulta devuelve muchas filas, porque el SMBD puede detener la búsqueda en cuanto encuentra la primera fila que cumple la condición, en lugar de generar todo el conjunto de valores.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/6.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-4
      .col-lg-10 
        p.mb-0 NOT EXISTS verifica que la subconsulta no devuelva ninguna fila, siendo la alternativa más robusta a NOT IN cuando hay riesgo de valores 
        p NULL en el conjunto de comparación, porque EXISTS y NOT EXISTS no tienen el problema de los NULL que afecta a IN y NOT IN.
        
        .etiqueta-barra.mb-1
          p.mb-0 Ejemplo:
        .tarjeta.bg-code8.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- EXISTS: clientes que tienen al menos un pedido > 1.000.000
              | SELECT c.nombre, c.ciudad
              | FROM clientes c
              | WHERE EXISTS (
              |   SELECT 1
              |   FROM pedidos p
              |   WHERE p.id_cliente = c.id_cliente -- subconsulta correlacionada
              |   AND   p.total > 1000000
              |   AND   p.estado = 'completado'
              | );
              | 
              | -- NOT EXISTS: más robusto que NOT IN con posibles NULLs
              | SELECT c.nombre, c.email
              | FROM clientes c
              | WHERE NOT EXISTS (
              |   SELECT 1
              |   FROM pedidos p
              |   WHERE p.id_cliente = c.id_cliente
              | );
              | -- Devuelve clientes sin ningún pedido (equivale al NOT IN pero sin problema de NULLs)
      
        p Partiendo de lo anterior, la siguiente tabla compara todos los operadores para subconsultas con su semántica precisa, cuándo usarlos preferiblemente y su equivalente lógico con funciones de agregación cuando aplica:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 6.
              span Operadores para subconsultas: semántica, uso y equivalencias

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Operador
                    th Semántica
                    th Cuándo preferirlo
                    th Equivalente lógico / notas
                tbody
                  tr(style="background-color: #F3F9FF")
                    td IN (subquery).
                    td TRUE si el valor está en el conjunto devuelto.
                    td Lista dinámica de valores de otra tabla.
                    td.text-start = v1 OR = v2 OR... ; eficiente si subconsulta devuelve pocos valores.
                  tr
                    td NOT IN (subquery).
                    td TRUE si el valor NO está en el conjunto.
                    td Exclusión dinámica; filtrar NULLs de subconsulta.
                    td.text-start col<>v1 AND col<>v2... ; falla con NULLs si no se filtra explícitamente.
                  tr(style="background-color: #F3F9FF")
                    td > ANY (subquery).
                    td TRUE si mayor que al menos un valor.
                    td Mayor que el mínimo del conjunto.
                    td.text-start col > MIN(subquery); se puede reescribir con MIN.
                  tr
                    td > ALL (subquery).
                    td TRUE si mayor que todos los valores.
                    td Mayor que el máximo del conjunto.
                    td.text-start col > MAX(subquery); se puede reescribir con MAX.
                  tr(style="background-color: #F3F9FF")
                    td = ANY (subquery).
                    td TRUE si igual a al menos un valor.
                    td Sinónimo de IN; más explícito semánticamente.
                    td.text-start Equivalente exacto a IN.
                  tr
                    td EXISTS (subquery).
                    td TRUE si subconsulta devuelve al menos 1 fila.
                    td Verificar existencia; muy eficiente con tablas grandes.
                    td.text-start Detiene búsqueda al primer match; no tiene problema de NULLs.
                  tr(style="background-color: #F3F9FF")
                    td NOT EXISTS (subquery).
                    td TRUE si subconsulta devuelve 0 filas.
                    td Preferible a NOT IN cuando hay riesgo de NULLs.
                    td.text-start Alternativa robusta a NOT IN; no tiene problema de NULLs.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Consultas combinadas y tipos de JOIN
    
    p Los JOINs son la operación más característica del modelo relacional y el mecanismo mediante el cual el SQL implementa el concepto de relación entre tablas. La normalización de bases de datos distribuye los datos en múltiples tablas para eliminar redundancias y garantizar la integridad: una tabla de pedidos no repite los datos del cliente en cada fila, sino que almacena solo el identificador (clave foránea) que hace referencia al registro correspondiente en la tabla de clientes. Los JOINs son el mecanismo que permite recomponer esa información distribuida en resultados cohesivos cuando se necesita consultarla de manera conjunta.

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-10        
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-4
                p SQL define varios tipos de JOIN, cada uno con una semántica específica respecto a qué filas se incluyen en el resultado cuando no existe una fila correspondiente en una de las tablas involucradas. La elección del tipo de JOIN correcto determina si el resultado incluirá o no los registros que no tienen correspondencia, lo que a su vez determina si la consulta responde correctamente a la pregunta de negocio que se está formulando. Un JOIN incorrecto puede producir resultados que parecen razonables pero que omiten datos importantes o incluyen filas incorrectas.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/7.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-4
      .col-lg-10 
        p El INNER JOIN es el tipo más común y produce solo las filas que tienen correspondencia en ambas tablas. Los OUTER JOINs (LEFT, RIGHT y FULL) incluyen las filas sin correspondencia en una o ambas tablas, completando con NULL los campos de la tabla que no tiene match. El CROSS JOIN produce el producto cartesiano (todas las combinaciones posibles) de los registros de ambas tablas. Cada tipo tiene sus casos de uso específicos en el contexto del desarrollo de aplicaciones empresariales.

        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code11.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- INNER JOIN: solo pedidos que tienen cliente registrado
              | SELECT c.nombre, p.fecha_pedido, p.total
              | FROM clientes c
              | INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
              | ORDER BY p.fecha_pedido DESC;
              | 
              | -- LEFT JOIN: TODOS los clientes, tengan o no pedidos
              | SELECT c.nombre, c.email,
              |        COUNT(p.id_pedido)         AS num_pedidos,
              |        COALESCE(SUM(p.total), 0)  AS total_compras
              | FROM clientes c
              | LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
              | GROUP BY c.id_cliente, c.nombre, c.email
              | ORDER BY total_compras DESC;
              | 
              | -- FULL OUTER JOIN: todos los clientes Y todos los pedidos
              | SELECT c.nombre, p.id_pedido, p.total
              | FROM clientes c
              | FULL OUTER JOIN pedidos p ON c.id_cliente = p.id_cliente
              | WHERE c.id_cliente IS NULL OR p.id_cliente IS NULL;
              | -- Solo muestra los registros SIN correspondencia en ambos lados
              | 
              | -- JOIN múltiple: cruzar cuatro tablas relacionadas
              | SELECT c.nombre, cat.nombre AS categoria,
              |        pr.nombre AS producto, dp.cantidad, dp.precio_unidad
              | FROM clientes c
              | JOIN pedidos         p   ON c.id_cliente = p.id_cliente
              | JOIN detalle_pedidos dp  ON p.id_pedido = dp.id_pedido
              | JOIN productos       pr  ON dp.id_producto = pr.id_producto
              | JOIN categorias      cat ON pr.id_categoria = cat.id_categoria
              | WHERE YEAR(p.fecha_pedido) = 2024;

    .row.justify-content-center
      .col-8
        p.bg-5.bg-r9.text-center.p-3 Es importante analizar la siguiente imagen que complementa lo explicado sobre los tipos de JOIN:

    .row.justify-content-center
      .col-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 6.
          span Tipos de JOIN en SQL — representación con datos de ejemplo
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema4/8.png',
            alt='Figura 6 que relaciona los tipos de JOIN en SQL (INNER, LEFT, RIGHT, FULL y CROSS) con tablas de clientes y pedidos, indicando mediante ejemplos qué registros aparecen o se excluyen en cada caso.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema4/9.png',
            alt=''
          )

    .row.justify-content-center.mt-3
      .col-6
        p.bg-5.bg-r9.text-center.p-3 Igualmente, se presente la siguiente imagen que ejemplifica al respecto:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 7.
          span Esquema relacional de ejemplo — relaciones entre tablas y JOINs
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema4/10.png',
            alt='Figura 7 que contiene un esquema relacional con cinco tablas conectadas por claves foráneas, donde se visualizan los campos, las relaciones entre categorías, productos, clientes, pedidos y detalles de pedidos, y el recorrido de los datos al aplicar JOINs.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema4/11.png',
            alt=''
          )

    .row.justify-content-center
      .col-lg-10
        p.mt-3 De igual manera, se presentan las siguientes dos tablas que sintetizan los conceptos trabajados, permitiendo comparar tipos de estructuras SQL y sus usos más frecuentes en el contexto del SQL avanzado:

        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-2
              h5 Tabla 7.
              span Tipos de JOIN en SQL: descripción, condiciones de uso y ejemplos

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Tipo de JOIN
                    th Filas que incluye en el resultado
                    th Caso típico de uso
                    th Ejemplo empresarial
                tbody
                  tr(style="background-color: #F3F9FF")
                    td INNER JOIN.
                    td Solo filas con correspondencia en AMBAS tablas — las más frecuentes.
                    td La mayoría de consultas transaccionales.
                    td.text-start Pedidos con sus datos de cliente (ambos deben existir).
                  tr
                    td LEFT OUTER JOIN.
                    td TODAS las filas de la tabla izquierda + correspondencias de la derecha (NULL si no hay).
                    td Cuando necesitas todos los del lado izquierdo.
                    td.text-start Todos los clientes, tengan o no pedidos — análisis de inactividad.
                  tr(style="background-color: #F3F9FF")
                    td RIGHT OUTER JOIN.
                    td Correspondencias de la izquierda + TODAS las de la tabla derecha (NULL si no hay).
                    td Menos común; todos los del lado derecho.
                    td.text-start Todos los productos, estén o no en pedidos actuales.
                  tr
                    td FULL OUTER JOIN.
                    td TODAS las filas de AMBAS tablas, con NULL donde no hay correspondencia.
                    td Auditoría o comparación de dos conjuntos completos.
                    td.text-start Detectar registros huérfanos en ambas tablas simultáneamente.
                  tr(style="background-color: #F3F9FF")
                    td CROSS JOIN.
                    td Producto cartesiano — TODAS las combinaciones posibles de filas de ambas tablas.
                    td Generar combinaciones exhaustivas entre dos catálogos.
                    td.text-start Tabla de precios para todas las combinaciones talla-color-producto.

    .row.bg-06.p-md-5.mt-0
      .row.justify-content-center
        .col-10
          .titulo-sexto.color-acento-contenido.mb-3.mt-2
            h5 Tabla 8.
            span Subconsultas vs JOINs: cuándo usar cada enfoque

          .tabla-a.color-acento-contenido
            table
              thead(style="background-color: #FFEBBE")
                tr
                  th Criterio
                  th Subconsultas
                  th JOINs
              tbody
                tr(style="background-color: #F3F9FF")
                  td Legibilidad.
                  td Alta cuando la lógica es jerárquica o condicional.
                  td Alta cuando la relación entre tablas es directa.
                tr
                  td Rendimiento.
                  td Variable; puede ser lento con grandes conjuntos (especialmente correlacionadas).
                  td Generalmente más eficiente; el optimizador los favorece.
                tr(style="background-color: #F3F9FF")
                  td Resultado.
                  td Puede devolver el mismo conjunto de filas que el JOIN (depende del tipo).
                  td Puede multiplicar filas si hay múltiples matches (cuidado con cardinalidad).
                tr
                  td EXISTS vs JOIN.
                  td EXISTS es ideal para verificar existencia sin recuperar datos.
                  td JOIN recupera datos; si solo se necesita verificar, EXISTS es mejor.
                tr(style="background-color: #F3F9FF")
                  td Casos donde subconsulta gana.
                  td Lógica condicional compleja, NOT EXISTS, subconsultas escalares en SELECT.
                  td Recuperar columnas de múltiples tablas simultáneamente.
                tr
                  td Casos donde JOIN gana.
                  td Recuperar muchas columnas de tablas relacionadas en un resultado plano.
                  td Combinaciones donde se necesita el producto de varias tablas.

        
      .row.justify-content-center
        .col-12
          .bloque-texto-g.bloque-texto-g--inverso.bg-base.p-3.p-sm-4.p-md-5.mt-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema4/12.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Como cierre de este tema, se presenta un video basado en un caso práctico que contextualiza el uso de los distintos tipos de JOIN en un escenario empresarial real. Este recurso permite aplicar los conceptos estudiados —relación entre tablas, elección del JOIN adecuado y análisis del resultado— reforzando la comprensión del impacto que tiene cada tipo de combinación en la respuesta a una necesidad de negocio concreta:


    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/J_r_bls2Mc0?si=bdxRE0U702WZwjSb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
