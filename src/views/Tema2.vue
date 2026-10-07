<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sintaxis y cláusulas del comando SELECT
    
    p El comando SELECT es la herramienta más poderosa del lenguaje SQL y, por esa misma razón, la que requiere un estudio más detallado y sistemático. Su capacidad para combinar múltiples cláusulas en una sola sentencia permite resolver problemas de consulta de datos de alta complejidad con elegancia y eficiencia. Para dominar el SELECT es fundamental comprender no solo la sintaxis de cada cláusula individualmente, sino también cómo interactúan entre sí, en qué orden lógico se procesan y qué restricciones impone cada cláusula sobre las demás.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las cláusulas del SELECT no son solo herramientas técnicas, son el vocabulario con el que el desarrollador formula preguntas precisas sobre los datos del negocio: ¿cuáles son los diez productos más vendidos del último trimestre?, ¿qué ciudades tienen un promedio de ventas superior a un millón de pesos?, ¿cuántos clientes nuevos se registraron por mes durante el año pasado? Cada una de estas preguntas de negocio puede traducirse directamente en una sentencia SELECT con las cláusulas apropiadas. La capacidad de hacer esta traducción —de la pregunta de negocio a la sentencia SQL— de manera natural y eficiente es la marca del desarrollador con dominio real del lenguaje.

    p.mt-3.text-center En este tema se estudian en profundidad todas las cláusulas del comando SELECT que el profesional utilizará con mayor frecuencia en su vida laboral.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Cláusulas de selección y filtrado de datos

    p Las cláusulas de selección y filtrado permiten refinar los resultados de una consulta SQL, controlando la unicidad de los datos, asignando nombres más descriptivos y definiendo condiciones para recuperar únicamente la información requerida. Su uso adecuado mejora tanto la precisión de las consultas como la legibilidad del código.

    .titulo-tres.mt-4: h3 ALL y DISTINCT — Control de unicidad en el resultado

    p Las palabras clave ALL y DISTINCT son modificadores que se colocan inmediatamente después de la palabra SELECT y controlan si el resultado de la consulta incluye o no filas duplicadas. Ambas se pueden representan lo siguiente:

    //Tarjetas icono lateral izquierdo
    .row.justify-content-center.mb-5.mt-4
      //Tarjeta 1
      .col-lg-6.mb-4.mb-lg-0.mb-5
        .tarjeta-img-izq.p-4.bg-16
          .tarjeta-img-izq__icon
            img(src='@/assets/curso/tema2/2.svg')
          .tarjeta-img-izq__text
            h4 ALL
            p Es el comportamiento predeterminado del comando SELECT y rara vez se escribe de forma explícita, ya que el motor SQL devuelve todas las filas que cumplen la condición establecida, incluyendo registros repetidos o duplicados cuando estos existen en los datos consultados.

      //Tarjeta 2
      .col-lg-6
        .tarjeta-img-izq.p-4.bg-16
          .tarjeta-img-izq__icon
            img(src='@/assets/curso/tema2/3.svg')
          .tarjeta-img-izq__text
            h4 DISTINCT
            p Elimina las filas duplicadas del resultado y presenta únicamente valores únicos. Esto resulta especialmente útil en consultas de análisis, generación de reportes y procesos donde se requiere identificar información sin repeticiones.



    .row.justify-content-center.mt-4
      .col-lg-10
        p Es importante entender que DISTINCT opera sobre la combinación completa de todas las columnas especificadas en el SELECT, no sobre una sola columna en particular. Si se especifican tres columnas en el SELECT, DISTINCT eliminará solo las filas donde las tres columnas tienen simultáneamente los mismos valores. Esto significa que el resultado de un SELECT DISTINCT puede tener más filas de las que el programador novato anticipa, especialmente cuando se incluyen columnas con alta cardinalidad (muchos valores distintos).
        
        p.p-3.bg-base.bg-r8 DISTINCT también puede utilizarse dentro de las funciones de agregación, como COUNT(DISTINCT columna), para contar solo los valores únicos de una columna específica. Esta variante es muy útil para responder preguntas como: ¿cuántos clientes distintos realizaron pedidos este mes? o ¿cuántas categorías de productos diferentes se vendieron en la región?
        
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code4.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- DISTINCT sobre una columna: lista de ciudades únicas
              | SELECT DISTINCT ciudad
              | FROM clientes
              | ORDER BY ciudad;
              | 
              | -- DISTINCT sobre múltiples columnas: combinaciones únicas
              | SELECT DISTINCT ciudad, departamento
              | FROM clientes
              | ORDER BY departamento, ciudad;
              | -- Solo elimina filas donde ciudad Y departamento son iguales
              | 
              | -- COUNT con DISTINCT: cuántos clientes distintos compraron este mes
              | SELECT
              |   COUNT(*)                     AS total_pedidos,
              |   COUNT(DISTINCT id_cliente)   AS clientes_distintos,
              |   COUNT(DISTINCT id_producto)  AS productos_distintos
              | FROM detalle_pedidos dp
              | JOIN pedidos p ON dp.id_pedido = p.id_pedido
              | WHERE MONTH(p.fecha_pedido) = MONTH(GETDATE())
              | AND   YEAR(p.fecha_pedido)  = YEAR(GETDATE());

    .titulo-tres.mt-4: h3 Alias con AS — Renombrar columnas y tablas

    p La cláusula AS permite asignar nombres alternativos, llamados alias, tanto a columnas como a tablas dentro de una consulta. Los alias son temporales —solo existen durante la ejecución de la consulta— pero tienen un impacto significativo en la legibilidad del código SQL y en la usabilidad de los resultados para la aplicación o el usuario que los consume.
    | A continuación, se detallan los alias:

    //Tarjetas conectadas
    .row.tarjeta--container.mt-4
      //Tarjeta izquierda
      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/4.svg', style='width: 150px').m-auto 

        p.text-center Alias de columna
        p Son especialmente útiles cuando el nombre original de la columna es críptico (como nombres heredados de sistemas legados), cuando se utiliza una expresión calculada que no tiene nombre natural (como precio * cantidad), o cuando se desea presentar los datos con un nombre más descriptivo y orientado al usuario final. En la mayoría de los SMBD, si el alias contiene espacios o caracteres especiales, debe encerrarse entre comillas dobles o corchetes según el dialecto SQL utilizado.

      //Tarjeta derecha
      .col-md.tarjeta.bg-16.p-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/5.svg', style='width: 150px').m-auto 

        p.text-center Alias de tabla
        p Son fundamentales cuando se trabaja con múltiples tablas en la misma consulta, especialmente en JOINs, porque permiten evitar la ambigüedad cuando dos tablas tienen columnas con el mismo nombre. También acortan significativamente la escritura de las sentencias cuando los nombres de las tablas son largos, reduciendo el riesgo de errores tipográficos. Es una buena práctica usar alias de tabla cortos y nemotécnicos (como 'c' para clientes, 'p' para pedidos, 'pr' para productos) que faciliten la lectura de la consulta.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code5.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- Alias de columna: nombres descriptivos para el usuario
              | SELECT
              |   id_cliente                        AS 'Código Cliente',
              |   nombre                            AS 'Nombre Completo',
              |   email                             AS 'Correo Electrónico',
              |   total_compras                     AS 'Total Histórico (COP)',
              |   total_compras * 0.19              AS 'IVA Estimado',
              |   total_compras + (total_compras * 0.19) AS 'Total con IVA'
              | FROM clientes
              | WHERE estado = 'activo';
              | 
              | -- Alias de tabla: consulta multi-tabla con nombres cortos
              | SELECT
              |   c.nombre       AS cliente,
              |   c.ciudad       AS ciudad,
              |   p.fecha_pedido AS fecha,
              |   p.total        AS valor_pedido,
              |   pr.nombre      AS producto,
              |   dp.cantidad    AS unidades
              | FROM clientes c
              | JOIN pedidos         p  ON c.id_cliente = p.id_cliente
              | JOIN detalle_pedidos dp ON p.id_pedido = dp.id_pedido
              | JOIN productos       pr ON dp.id_producto = pr.id_producto
              | WHERE p.estado = 'completado'
              | ORDER BY p.fecha_pedido DESC;

    .titulo-tres.mt-4: h3 Cláusula WHERE y sus operadores de filtrado

    p La cláusula WHERE es el mecanismo de filtrado de filas del SELECT. Permite especificar condiciones que deben cumplir las filas para ser incluidas en el resultado de la consulta. WHERE acepta cualquier expresión lógica que evalúe a verdadero (TRUE), falso (FALSE) o desconocido (NULL) para cada fila de la tabla, e incluye solo las filas donde la condición evalúa a TRUE.

    .row.align-items-center.justify-content-center
      .col-lg-10        
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-4
                p Las condiciones de WHERE pueden combinarse con los operadores lógicos AND (ambas condiciones deben ser verdaderas), OR (al menos una condición debe ser verdadera) y NOT (niega la condición). Cuando se utilizan varios operadores lógicos en la misma condición, el orden de precedencia es: primero NOT, luego AND, luego OR. Para garantizar el orden de evaluación deseado y hacer el código más legible, es recomendable usar paréntesis explícitamente, aunque no sean estrictamente necesarios.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/11.png', alt='', class="w-100 h-100 object-fit-cover")
            
            p.text-center.mt-3 Además de los operadores de comparación estándar (=, <>, >, <, >=, <=), SQL ofrece tres operadores especiales de filtrado que amplían significativamente las posibilidades de búsqueda: 


        .row.mt-4.bg-15.p-4
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b IN.] Verifica si un valor pertenece a una lista de valores predefinidos o al resultado de una subconsulta.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b BETWEEN.] Verifica si un valor se encuentra dentro de un rango inclusivo.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b LIKE.] Permite búsquedas por patrones de texto utilizando los metacaracteres % (cero o más caracteres) y _ (exactamente un carácter).
      
    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code6.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- Operadores de comparación básicos
              | SELECT nombre, precio FROM productos
              | WHERE precio >= 50000 AND precio <= 200000; -- equivalente a BETWEEN
              | 
              | -- Operador IN: pertenencia a una lista de valores
              | SELECT nombre, ciudad, telefono FROM clientes
              | WHERE ciudad IN ('Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena');
              | 
              | -- Operador NOT IN: exclusión de valores
              | SELECT nombre FROM clientes
              | WHERE estado NOT IN ('inactivo', 'bloqueado', 'eliminado');
              | 
              | -- Operador BETWEEN: rango de fechas
              | SELECT * FROM pedidos
              | WHERE fecha_pedido BETWEEN '2024-01-01' AND '2024-03-31' -- Q1 2024
              | AND   total BETWEEN 100000 AND 5000000;
              | 
              | -- Operador LIKE: búsqueda por patrones de texto
              | SELECT * FROM clientes WHERE nombre LIKE 'Ana%';      -- Inicia con Ana
              | SELECT * FROM clientes WHERE email  LIKE '%@gmail%';  -- Contiene @gmail
              | SELECT * FROM clientes WHERE telefono LIKE '310_______'; -- 10 dígitos inicia 310
              | SELECT * FROM clientes WHERE nombre LIKE '%García%';  -- Contiene García
              | 
              | -- Combinación de múltiples condiciones con AND, OR y NOT
              | SELECT nombre, ciudad, total_compras, estado
              | FROM clientes
              | WHERE (ciudad = 'Bogotá' OR ciudad = 'Medellín' OR ciudad = 'Cali')
              | AND   total_compras BETWEEN 500000 AND 10000000
              | AND   estado NOT IN ('inactivo', 'bloqueado')
              | AND   fecha_registro >= '2022-01-01'
              | ORDER BY total_compras DESC;

    .row.justify-content-center.mt-4
      .col-7
        p.bg-5.bg-r9.text-center.p-3 Es importante analizar la siguiente imagen representativa:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 3.
          span Operadores de filtrado en la cláusula WHERE — referencia completa
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/6.svg',
            alt='Figura 3 que presenta los operadores de filtrado disponibles en la cláusula WHERE, organizados en categorías como comparación, rango, patrones, valores nulos, existencia y operadores lógicos, incluyendo además la precedencia de evaluación utilizada en las condiciones SQL.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/7.svg',
            alt=''
          )

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 2.2 Agrupación, ordenamiento y condiciones sobre grupos
    
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema2/8.svg', style='width: 100px').m-auto
      
      .col
        p Las cláusulas de agrupación, filtrado de grupos y ordenamiento permiten transformar consultas simples en análisis de datos más completos y estructurados. Mediante GROUP BY, HAVING y ORDER BY es posible resumir información, aplicar condiciones sobre resultados agregados y presentar los datos en un orden significativo, facilitando la generación de reportes y el análisis de información en SQL.

    .titulo-tres.mt-5: h3 GROUP BY — Agrupación de datos

    p.mb-0 La cláusula GROUP BY es el mecanismo fundamental del SQL para realizar análisis agregados, ya que permite agrupar las filas del resultado que tienen los mismos valores en las columnas especificadas y aplicar funciones de agregación (COUNT, SUM, AVG, MAX, MIN) sobre cada grupo, obteniendo un valor resumen por grupo en lugar de un valor por fila individual. Esta capacidad transforma el SELECT de una herramienta de búsqueda de registros individuales en una herramienta de análisis de datos de alto nivel.

    .row.bg-07.p-md-5.mt-0
      .row.align-items-center.justify-content-center.p-3
        .col-lg-10
          .row.align-items-center.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center(data-aos="fade-right")
                .col-lg
                  .cajon.color1.p-4
                    p Una regla fundamental que el desarrollador debe memorizar es que cuando se utiliza GROUP BY, todas las columnas que aparecen en el SELECT pero que no están dentro de una función de agregación deben estar listadas obligatoriamente en la cláusula GROUP BY. El SMBD no puede devolver un valor individual para una columna no agregada cuando hay múltiples filas en el grupo, porque tendría que elegir arbitrariamente uno de los valores disponibles. Esta regla, aunque puede parecer restrictiva al principio, garantiza la coherencia lógica del resultado.

                  p.mt-4 GROUP BY puede utilizarse con múltiples columnas, lo que produce grupos definidos por la combinación única de valores de todas las columnas especificadas. Así, una instrucción como GROUP BY ciudad, departamento genera un grupo por cada combinación única de ciudad y departamento presente en los datos. Esta capacidad permite realizar análisis multidimensionales orientados a responder preguntas como: ¿cuáles son las ventas totales por categoría de producto y por región del país?

                .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema2/9.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-5px")

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code7.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- GROUP BY simple: total de clientes y ventas por ciudad
              | SELECT
              |   ciudad,
              |   COUNT(*)                     AS total_clientes,
              |   SUM(total_compras)           AS ventas_acumuladas,
              |   AVG(total_compras)           AS venta_promedio,
              |   MAX(total_compras)           AS mayor_compra,
              |   MIN(total_compras)           AS menor_compra
              | FROM clientes
              | WHERE estado = 'activo'
              | GROUP BY ciudad
              | ORDER BY ventas_acumuladas DESC;
              | 
              | -- GROUP BY múltiple: ventas por año y mes
              | SELECT
              |   YEAR(fecha_pedido)           AS año,
              |   MONTH(fecha_pedido)          AS mes,
              |   COUNT(*)                     AS num_pedidos,
              |   SUM(total)                   AS ventas_mes
              | FROM pedidos
              | WHERE estado = 'completado'
              | GROUP BY YEAR(fecha_pedido), MONTH(fecha_pedido)
              | ORDER BY año, mes;

    .titulo-tres.mt-5: h3 HAVING — Filtrado de grupos

    p La cláusula HAVING actúa como el filtro de grupos: mientras WHERE filtra filas individuales antes del agrupamiento, HAVING filtra los grupos generados por GROUP BY después del agrupamiento y el cálculo de las funciones de agregación. Esta distinción es fundamental y uno de los errores más comunes en SQL es intentar usar funciones de agregación en la cláusula WHERE, lo que genera un error de sintaxis porque en el momento de evaluación del WHERE aún no se han calculado los grupos.
    | La regla práctica para recordar la diferencia es:


    .row.justify-content-center.mt-4
      .col-lg-8
        //- Tarjeta para WHERE
        .row.align-items-center.bg-16.tarjeta-comparativa.mb-3(data-aos="fade-right")
          .col-auto.p-0
            .bloque-icono.d-flex.d-none.d-lg-block
              figure.m-0
                img(src='@/assets/curso/tema2/10.svg', style='width: 60px')
          .col.bloque-contenido
            p.mb-1 #[b WHERE]
            p.mb-0 Filtra filas (registros individuales, antes de agrupar).

        //- Tarjeta para HAVING
        .row.align-items-center.bg-16.tarjeta-comparativa.mb-3(data-aos="fade-left")
          .col-auto.p-0
            .bloque-icono.d-flex.d-none.d-lg-block
              figure.m-0
                img(src='@/assets/curso/tema2/11.svg', style='width: 60px')
          .col.bloque-contenido
            p.mb-1 #[b HAVING]
            p.mb-0 Filtra grupos (resultados de la agregación, después de agrupar).

    .row.justify-content-center.mt-4
      .col-lg-10
        p Cualquier condición que involucre una función de agregación (COUNT, SUM, AVG, MAX, MIN) debe ir en HAVING, no en WHERE. Las condiciones sobre columnas individuales (sin funciones de agregación) pueden ir en WHERE o en HAVING, pero es más eficiente ponerlas en WHERE porque así se reduce el número de filas antes de hacer el agrupamiento.
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code7.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- HAVING: filtrar grupos con condición de agregación
              | SELECT
              |   ciudad,
              |   COUNT(*)                     AS total_clientes,
              |   SUM(total_compras)           AS ventas_totales,
              |   AVG(total_compras)           AS venta_promedio
              | FROM clientes
              | WHERE estado = 'activo'    -- filtra FILAS (antes de agrupar)
              | GROUP BY ciudad
              | HAVING COUNT(*) >= 5       -- filtra GRUPOS (después de agrupar)
              | AND   SUM(total_compras) > 5000000 -- solo ciudades con ventas > 5M
              | AND   AVG(total_compras) > 500000  -- y promedio > 500K
              | ORDER BY ventas_totales DESC;
              | 
              | -- Diferencia WHERE vs HAVING — error común vs. forma correcta
              | -- ❌ INCORRECTO: función de agregación en WHERE
              | -- SELECT ciudad, COUNT(*) FROM clientes
              | -- WHERE COUNT(*) > 5 GROUP BY ciudad; -- ERROR
              | 
              | --  CORRECTO: función de agregación en HAVING
              | SELECT ciudad, COUNT(*) AS total
              | FROM clientes
              | GROUP BY ciudad
              | HAVING COUNT(*) > 5; -- OK

    .titulo-tres.mt-5: h3 ORDER BY — Ordenamiento de resultados

    p La cláusula ORDER BY define el orden en que se presentan las filas del resultado de la consulta. Sin ORDER BY, el SMBD no garantiza ningún orden específico en el resultado, incluso si la consulta ejecutada varias veces devuelve los datos en el mismo orden en la práctica: este comportamiento no está garantizado por el estándar SQL y puede cambiar con actualizaciones del motor, cambios en los índices o variaciones en el volumen de datos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 ORDER BY puede especificar múltiples columnas de ordenamiento, cada una con dirección ascendente (ASC, que es el valor por defecto) o descendente (DESC). Cuando se especifican múltiples columnas, el ordenamiento se aplica de izquierda a derecha: primero se ordena por la primera columna, luego las filas con el mismo valor en la primera columna se ordenan por la segunda columna, y así sucesivamente. Esta capacidad de ordenamiento multinivel es fundamental para producir listados ordenados y reportes profesionales.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code8.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- ORDER BY simple: ascendente por defecto
              | SELECT nombre, ciudad FROM clientes ORDER BY nombre; -- A-Z
              | 
              | -- ORDER BY múltiple: ciudad A-Z, luego compras de mayor a menor
              | SELECT nombre, ciudad, total_compras
              | FROM clientes
              | ORDER BY ciudad ASC, total_compras DESC;
              | 
              | -- ORDER BY con expresión calculada
              | SELECT nombre, total_compras,
              |        total_compras * 0.19 AS iva
              | FROM clientes
              | ORDER BY iva DESC; -- Ordenar por columna calculada
              | 
              | -- ORDER BY con NULLS al final (útil para datos incompletos)
              | SELECT nombre, fecha_ultimo_pedido
              | FROM clientes
              | ORDER BY fecha_ultimo_pedido DESC NULLS LAST; -- PostgreSQL
        p.mt-3 Para finalizar, la siguiente tabla sintetiza todas las cláusulas del SELECT con su función, el momento de procesamiento en el que actúan y los errores más comunes que cometen los desarrolladores novatos con cada una:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 3.
              span Cláusulas del comando SELECT: función, orden de procesamiento y errores comunes

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Cláusula
                    th Función principal
                    th Orden procesamiento
                    th Error más frecuente
                tbody
                  tr(style="background-color: #F3F9FF")
                    td SELECT.
                    td.text-start Define columnas, expresiones y alias del resultado.
                    td 5°
                    td.text-start Usar alias de SELECT dentro del WHERE (no disponible aún).
                  tr
                    td FROM / JOIN.
                    td.text-start Especifica tablas fuente y sus relaciones.
                    td 1°
                    td.text-start Omitir alias cuando hay columnas con el mismo nombre en varias tablas.
                  tr(style="background-color: #F3F9FF")
                    td WHERE.
                    td.text-start Filtra filas individuales antes del agrupamiento.
                    td 2°
                    td.text-start Usar funciones de agregación en WHERE (deben ir en HAVING).
                  tr
                    td GROUP BY.
                    td.text-start Agrupa filas con valores iguales en las columnas.
                    td 3°
                    td.text-start Omitir en GROUP BY columnas del SELECT que no están en agregaciones.
                  tr(style="background-color: #F3F9FF")
                    td HAVING.
                    td.text-start Filtra los grupos resultantes del GROUP BY.
                    td 4°
                    td.text-start Poner condiciones de filas individuales en HAVING (son más eficientes en WHERE).
                  tr
                    td ORDER BY.
                    td.text-start Ordena el conjunto resultado final.
                    td 7°
                    td.text-start Asumir orden natural sin ORDER BY (no garantizado por el estándar SQL).
                  tr(style="background-color: #F3F9FF")
                    td DISTINCT.
                    td.text-start Elimina filas completamente duplicadas del resultado.
                    td 6°
                    td.text-start Creer que DISTINCT afecta solo una columna (afecta la combinación completa).
                  tr
                    td TOP / LIMIT.
                    td.text-start Limita el número de filas devueltas.
                    td 8°
                    td.text-start Usar sin ORDER BY (las filas devueltas son no determinísticas).



</template>

<script>
export default {
  name: 'Tema2',
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
