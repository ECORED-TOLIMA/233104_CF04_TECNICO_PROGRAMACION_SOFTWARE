<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Funciones para la manipulación y análisis de datos

    p Las funciones SQL son rutinas predefinidas que el motor de base de datos pone a disposición del programador para realizar operaciones sobre los datos directamente en el servidor, sin necesidad de recuperarlos primero a la aplicación para procesarlos. Esta capacidad de procesar datos en el servidor, donde residen, es una de las ventajas más significativas del enfoque relacional: permite realizar transformaciones complejas sobre millones de registros con una eficiencia que sería imposible de lograr procesando los datos en la capa de aplicación, especialmente cuando se trabaja con grandes volúmenes de información.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El principio que guía el uso de funciones SQL en el servidor es el de reducir el tráfico de red entre la aplicación y la base de datos. En lugar de recuperar millones de registros a la aplicación para filtrar, transformar y calcular en memoria, es mucho más eficiente expresar esas operaciones en SQL y dejar que el motor de base de datos las ejecute donde están los datos, devolviendo solo el resultado final. Este principio, conocido como #[i compute-close-to-data], es especialmente relevante en sistemas distribuidos y aplicaciones de big data, pero aplica igualmente en sistemas transaccionales convencionales.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            p SQL ofrece una amplia variedad de funciones según el tipo de dato que procesan y el tipo de resultado que producen. En esta temática se estudian las dos categorías más utilizadas en el desarrollo de aplicaciones: las funciones de cadena (o de texto), que operan sobre valores de tipo VARCHAR o CHAR y permiten manipular, transformar y extraer partes de cadenas de texto; y las funciones de agregación, que operan sobre conjuntos de filas y calculan un único valor resumen para cada grupo. Además de estas dos categorías, SQL también ofrece funciones de fecha y tiempo, funciones matemáticas, funciones de conversión de tipos y funciones condicionales como CASE y COALESCE, que son igualmente importantes en la práctica profesional.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Funciones de cadena
    
    p Las funciones de cadena permiten manipular y transformar valores de texto almacenados en la base de datos. Son especialmente útiles para cuatro propósitos principales: normalizar datos ingresados por usuarios (que pueden llegar en mayúsculas, minúsculas o con formatos inconsistentes), extraer partes específicas de cadenas (como los primeros N caracteres de un código de producto o el dominio de una dirección de email), reemplazar caracteres o subcadenas no deseadas (como limpiar caracteres especiales o estandarizar separadores), y construir representaciones de texto dinámicas en los resultados de las consultas (como concatenar el nombre y apellido de una persona en un único campo de presentación).

    .row.align-items-center.justify-content-center
      .col-lg-10        
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-3
                p Es importante tener en cuenta que la sintaxis de algunas funciones de cadena varía entre los diferentes dialectos de SQL (T-SQL de SQL Server, MySQL, PostgreSQL, Oracle PL/SQL). Aunque las funciones fundamentales existen en todos los SMBD, sus nombres y parámetros pueden diferir. Por ejemplo, la función de extracción de subcadena se llama SUBSTRING en SQL Server y MySQL, pero SUBSTR en Oracle y está disponible también como SUBSTRING en PostgreSQL. Al desarrollar código SQL que deba ser portable entre diferentes SMBD, es recomendable utilizar las funciones del estándar SQL siempre que sea posible.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/2.svg', alt='', class="w-100 h-100 object-fit-cover")

    .titulo-tres.mt-5: h3 LOWER y UPPER — Conversión de mayúsculas y minúsculas

    p Las funciones LOWER y UPPER son las más simples y utilizadas de las funciones de cadena:

    .row.justify-content-center.mt-3
      // Tarjeta 1
      .col-12.col-md-6.col-lg-6.mb-4
        .tarjeta-diagrama
          .tarjeta-diagrama__header
            img(src="@/assets/curso/tema3/3.png", alt="")

          .tarjeta-diagrama__body
            p #[b LOWER]
            p Convierte todos los caracteres alfabéticos de una cadena de texto a letras minúsculas, manteniendo sin cambios números, espacios y caracteres especiales. Esta función es útil para estandarizar datos y realizar comparaciones sin sensibilidad a mayúsculas o minúsculas.

      // Tarjeta 2
      .col-12.col-md-6.col-lg-6.mb-4
        .tarjeta-diagrama
          .tarjeta-diagrama__header
            img(src="@/assets/curso/tema3/4.png", alt="")

          .tarjeta-diagrama__body
            p #[b UPPER]
            p Transforma todos los caracteres alfabéticos de una cadena a letras mayúsculas, conservando intactos los demás símbolos y números. Se utiliza frecuentemente para normalizar información, generar formatos consistentes y facilitar búsquedas o validaciones de texto. 

    .row.justify-content-center.mt-4
      .col-lg-10
        p Son ampliamente utilizadas para normalizar datos antes de realizar comparaciones o búsquedas, evitando que diferencias en el uso de mayúsculas y minúsculas generen resultados incorrectos en los filtros o en las operaciones de JOIN. Así, si una columna de email puede contener valores como 'ANA@EMAIL.COM', 'ana@email.com' o 'Ana@Email.Com', una comparación directa con '=' fallaría en dos de los tres casos; utilizando LOWER en ambos lados de la comparación se garantiza el resultado correcto.
        
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code9.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- LOWER: normalización para búsqueda insensible a mayúsculas
              | SELECT id_cliente, nombre, email
              | FROM clientes
              | WHERE LOWER(email) = LOWER('ANA.GARCIA@EMAIL.COM');
              | 
              | -- UPPER: presentar código en mayúsculas siempre
              | SELECT UPPER(codigo_producto) AS codigo, nombre, precio
              | FROM productos
              | ORDER BY codigo;
              | 
              | -- Combinación para formato Título (primera letra mayúscula)
              | -- SQL Server: no tiene función nativa, se construye con concatenación
              | SELECT
              |   nombre,
              |   UPPER(LEFT(nombre,1)) + LOWER(SUBSTRING(nombre,2,LEN(nombre))) AS nombre_titulo
              | FROM clientes;

    .titulo-tres.mt-5.mb-0: h3 REPLACE — Reemplazo de subcadenas

    .row.bg-06.p-md-5.mt-0
      .row.align-items-center.justify-content-center.p-4
        p La función REPLACE reemplaza todas las ocurrencias de una subcadena buscada dentro de una cadena por otra subcadena de reemplazo. Es una herramienta fundamental para la limpieza y normalización de datos que provienen de fuentes externas o de entradas de usuario, donde frecuentemente se encuentran caracteres no deseados, separadores inconsistentes o formatos que difieren del estándar interno del sistema. REPLACE es sensible a mayúsculas y minúsculas en la mayoría de los SMBD, aunque este comportamiento puede depender de la collation (reglas de comparación de texto) definida para la columna o la base de datos.
        
        .col-lg-10
          .row.align-items-center.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center(data-aos="fade-right")
                .col-lg-10
                  .etiqueta-barra.mb-3
                    p.mb-0 Ejemplo:
                .tarjeta.bg-code8.mb-4
                  pre.language-sql.w-100.mb-0
                    code.text-white
                      | -- Eliminar guiones de números de teléfono
                      | SELECT nombre,
                      |        REPLACE(telefono, '-', '') AS telefono_limpio
                      | FROM clientes;
                      | -- '300-123-4567' → '3001234567'
                      | 
                      | -- REPLACE anidado: múltiples caracteres en una sola expresión
                      | SELECT
                      |   REPLACE(
                      |     REPLACE(
                      |       REPLACE(descripcion, ';', ','),
                      |     '.', ''),
                      |   ' ', '') AS descripcion_limpia
                      | FROM productos;
                      | 
                      | -- Reemplazar en UPDATE: estandarizar formato de emails
                      | UPDATE clientes
                      | SET email = LOWER(REPLACE(email, ' ', '')) -- minúsculas, sin espacios
                      | WHERE email LIKE '% %' OR email <> LOWER(email);

    .titulo-tres: h3 SUBSTRING, LEFT y RIGHT — Extracción de subcadenas

    p Las funciones SUBSTRING (o SUBSTR), LEFT y RIGHT permiten extraer una porción específica de una cadena de texto, así:

    .row.justify-content-center.mt-4
      .col-lg-8
        //- Tarjeta para SUBSTRING
        .row.align-items-center.bg-16.tarjeta-comparativa.mb-3(data-aos="fade-right")
          .col-auto.p-0
            .bloque-icono.d-flex.d-none.d-lg-block
              figure.m-0
                img(src='@/assets/curso/tema3/5.svg', style='width: 60px')
          .col.bloque-contenido
            p.mb-1 #[b SUBSTRING]
            p.mb-0 Extrae una subcadena a partir de una posición de inicio y con una longitud determinada. 

        //- Tarjeta para LEFT
        .row.align-items-center.bg-16.tarjeta-comparativa.mb-3(data-aos="fade-left")
          .col-auto.p-0
            .bloque-icono.d-flex.d-none.d-lg-block
              figure.m-0
                img(src='@/assets/curso/tema3/6.svg', style='width: 60px')
          .col.bloque-contenido
            p.mb-1 #[b LEFT]
            p.mb-0 Extrae los primeros N caracteres desde el extremo izquierdo de la cadena. 

        //- Tarjeta para RIGHT
        .row.align-items-center.bg-16.tarjeta-comparativa.mb-3(data-aos="fade-left")
          .col-auto.p-0
            .bloque-icono.d-flex.d-none.d-lg-block
              figure.m-0
                img(src='@/assets/curso/tema3/7.svg', style='width: 60px')
          .col.bloque-contenido
            p.mb-1 #[b RIGHT]
            p.mb-0 Extrae los últimos N caracteres desde el extremo derecho. 

    .row.justify-content-center.mt-4
      .col-lg-10
        p Estas funciones son esenciales para trabajar con campos que almacenan información codificada en formato de cadena, como códigos de producto con estructura definida, referencias contables o identificadores compuestos.

        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code7.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- SUBSTRING: extraer componentes de un código estructurado
              | -- Código formato: 'CAT-PRD-2024-001' (categoría-producto-año-secuencia)
              | SELECT
              |   codigo_producto,
              |   SUBSTRING(codigo_producto, 1, 3) AS categoria_cod,
              |   SUBSTRING(codigo_producto, 5, 3) AS tipo_producto,
              |   SUBSTRING(codigo_producto, 9, 4) AS año_creacion,
              |   RIGHT(codigo_producto, 3)        AS secuencia
              | FROM productos;
              | 
              | -- LEFT: extraer dominio de email (todo hasta el @)
              | SELECT
              |   email,
              |   LEFT(email, CHARINDEX('@', email) - 1) AS usuario,
              |   SUBSTRING(email, CHARINDEX('@', email) + 1, LEN(email)) AS dominio
              | FROM clientes;
              | 
              | -- RIGHT + LEN: validar longitud de campos
              | SELECT nombre, LEN(nombre) AS longitud,
              |        CASE WHEN LEN(nombre) > 50 THEN 'LARGO' ELSE 'OK' END AS estado
              | FROM clientes
              | ORDER BY longitud DESC;

    .titulo-tres.mt-4: h3 STR y funciones de conversión

    P La función STR convierte un valor numérico a su representación de texto con un formato específico de longitud total y número de decimales. Es útil para presentar valores numéricos con formato fijo en reportes o cuando se necesita concatenar números con texto. En la mayoría de los SMBD modernos, la función CAST o CONVERT ofrece mayor flexibilidad y control sobre la conversión de tipos de datos. La función CONCAT (o el operador + en SQL Server) permite unir múltiples cadenas o valores convertidos en una sola cadena de texto.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code10.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- STR: número a texto con formato fijo
              | SELECT nombre, STR(precio, 12, 2) AS precio_formateado
              | FROM productos; -- ' 50000.00', '1500000.00'
              | 
              | -- CONCAT: concatenar campos para presentación
              | SELECT CONCAT(nombre, ' (', ciudad, ')') AS cliente_ciudad
              | FROM clientes; -- 'Ana García (Bogotá)'
              | 
              | -- CAST: conversión de tipos — número a texto
              | SELECT 'Pedido #' + CAST(id_pedido AS VARCHAR(10)) +
              |        ' del ' + CONVERT(VARCHAR, fecha_pedido, 103) AS referencia
              | FROM pedidos;
              | -- 'Pedido #1234 del 15/03/2024'

    .row.justify-content-center.mt-3
      .col-lg-10
        .row.align-items-center.bg-base.tarjeta-comparativa.mb-3(data-aos="fade-right")
          .col-auto.p-0
            .bloque-icono.d-flex.d-none.d-lg-block
              figure.m-0
                img(src='@/assets/curso/tema3/8.svg', style='width: 60px')
          .col.bloque-contenido
            p La siguiente tabla presenta un resumen completo de referencia rápida de todas las funciones de cadena estudiadas con su sintaxis y un ejemplo representativo de uso en contextos de desarrollo empresarial:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 4.
              span Funciones de cadena SQL: referencia rápida de sintaxis y ejemplos

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Función
                    th Sintaxis
                    th Descripción
                    th Ejemplo — Entrada → Salida
                tbody
                  tr(style="background-color: #F3F9FF")
                    td LOWER.
                    td LOWER(cadena).
                    td.text-start Convierte a minúsculas.
                    td.text-start LOWER('COLOMBIA') → 'colombia'.
                  tr
                    td UPPER.
                    td UPPER(cadena).
                    td.text-start Convierte a mayúsculas.
                    td.text-start UPPER('bogotá') → 'BOGOTÁ'.
                  tr(style="background-color: #F3F9FF")
                    td REPLACE.
                    td REPLACE(cad, buscar, nuevo).
                    td.text-start Reemplaza todas las ocurrencias.
                    td.text-start REPLACE('300-123','−','') → '300123'.
                  tr
                    td SUBSTRING.
                    td SUBSTRING(cad, inicio, longitud).
                    td.text-start Extrae subcadena por posición.
                    td.text-start SUBSTRING('CF04-SQL',1,4) → 'CF04'.
                  tr(style="background-color: #F3F9FF")
                    td LEFT.
                    td LEFT(cadena, n).
                    td.text-start Primeros n caracteres.
                    td.text-start LEFT('Bogotá D.C.',6) → 'Bogotá'.
                  tr
                    td RIGHT.
                    td RIGHT(cadena, n).
                    td.text-start Últimos n caracteres.
                    td.text-start RIGHT('Colombia',5) → 'ombia'.
                  tr(style="background-color: #F3F9FF")
                    td LEN / LENGTH.
                    td LEN(cadena).
                    td.text-start Número de caracteres.
                    td.text-start LEN('SENA') → 4.
                  tr
                    td STR.
                    td STR(numero, long, dec).
                    td.text-start Número a cadena con formato.
                    td.text-start STR(3.14159, 8, 2) → '    3.14'.
                  tr(style="background-color: #F3F9FF")
                    td LTRIM / RTRIM.
                    td LTRIM(cad) / RTRIM(cad).
                    td.text-start Elimina espacios extremos.
                    td.text-start  LTRIM('  Hola') → 'Hola'.
                  tr
                    td TRIM.
                    td TRIM(cadena).
                    td.text-start Elimina espacios en ambos lados.
                    td.text-start TRIM(' Hola ') → 'Hola'.
                  tr(style="background-color: #F3F9FF")
                    td CONCAT.
                    td CONCAT(cad1, cad2, ...).
                    td.text-start Concatena múltiples cadenas.
                    td.text-start CONCAT('Ana', ' ', 'García') → 'Ana García'.
                  tr
                    td CHARINDEX.
                    td CHARINDEX(buscar, cadena).
                    td.text-start Posición de la primera ocurrencia.
                    td.text-start CHARINDEX('@','ana@mail') → 4.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Funciones de agregación
    
    p Las funciones de agregación son el núcleo del SQL analítico, ya que operan sobre un conjunto de filas —que puede ser toda la tabla o un grupo definido por GROUP BY— y devuelven un único valor resumen para ese conjunto. Son el mecanismo principal del SQL para realizar análisis estadísticos y de negocio directamente en la base de datos, sin necesidad de exportar los datos a herramientas externas. Calcular el total de ventas por región, el promedio de calificaciones por estudiante, el precio máximo por categoría de producto, o el número de pedidos por cliente en el último mes: todos estos análisis se realizan de manera natural y eficiente con las funciones de agregación.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un aspecto fundamental para entender las funciones de agregación es su comportamiento frente a los valores NULL. Con la excepción de COUNT(*) que cuenta todas las filas incluyendo aquellas con valores NULL en cualquier columna, todas las demás funciones de agregación ignoran los valores NULL en sus cálculos. Esto significa que AVG calcula el promedio de los valores no nulos (lo que puede producir resultados diferentes del promedio sobre todos los registros si se consideran los NULL como cero), SUM suma solo los valores no nulos, y MAX y MIN ignoran los NULL al buscar el valor extremo. Comprender este comportamiento es crítico para garantizar la corrección de los análisis.

    .titulo-tres.mt-5: h3 COUNT — Conteo de registros y valores

    .row.justify-content-center.mt-lg-4.mt-0
      p.mb-0 La función COUNT tiene tres variantes principales con comportamientos diferentes: 
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.justify-content-center
              .d-none.d-md-block
                ImagenInfografica.color-primario
                  template(v-slot:imagen)
                    figure
                      img.d-none.d-md-block.m-auto.p-5(
                        src='@/assets/curso/tema3/10.png', style="width: 100%"
                        alt=''
                      )
                      img.d-block.d-md-none.m-auto.p-3(
                        src='@/assets/curso/tema3/11.png',
                        alt=''
                      )
                  
                  .tarjeta.bg-7.p-3.d-none.d-md-block(x="59%" y="35%" numero="+")
                    p.d-none.d-md-block COUNT(*). 
                    | Cuenta todas las filas del grupo, incluyendo aquellas con valores NULL en cualquier columna.

                  .tarjeta.bg-7.p-3.d-none.d-md-block(x="59%" y="50%" numero="+")
                    p.d-none.d-md-block COUNT(columna). 
                    | Cuenta solo las filas donde el valor de esa columna específica no es NULL.

                  .tarjeta.bg-7.p-3.d-none.d-md-block(x="59%" y="66%" numero="+")
                    p.d-none.d-md-block COUNT(DISTINCT columna). 
                    | Cuenta el número de valores únicos y no nulos de esa columna. 

              figure.d-block.d-md-none.mt-3
                img.m-auto(
                  src='@/assets/curso/tema3/11.png')

    .row.justify-content-center
      p.text-center La elección entre estas variantes debe hacerse conscientemente según el análisis que se desea realizar.
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code10.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- Las tres variantes de COUNT y sus diferencias
              | SELECT
              |   COUNT(*)                     AS total_filas,        -- incluye NULLs
              |   COUNT(id_cliente)            AS filas_con_cliente,  -- excluye NULLs
              |   COUNT(DISTINCT id_cliente)   AS clientes_distintos  -- valores únicos
              | FROM pedidos
              | WHERE YEAR(fecha_pedido) = 2024;
              | 
              | -- COUNT por grupos: pedidos por estado
              | SELECT
              |   estado,
              |   COUNT(*) AS cantidad,
              |   COUNT(*) * 100.0 / SUM(COUNT(*)) OVER() AS porcentaje
              | FROM pedidos
              | GROUP BY estado
              | ORDER BY cantidad DESC;

    .titulo-tres: h3 SUM, AVG, MAX y MIN — Análisis numérico

    p Las funciones SUM, AVG, MAX y MIN son las herramientas fundamentales para el análisis cuantitativo de datos. SUM calcula la suma total de los valores de una columna para el grupo, ignorando los NULL. AVG calcula el promedio aritmético de los valores no nulos. MAX y MIN devuelven el valor máximo y mínimo respectivamente, y funcionan no solo con datos numéricos sino también con fechas (devuelven la fecha más reciente o más antigua) y con cadenas de texto (devuelven el valor mayor o menor según el orden alfabético o de collation definido).

    .row.justify-content-center
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code10
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- Análisis completo de ventas por categoría
              | SELECT
              |   cat.nombre                     AS categoria,
              |   COUNT(DISTINCT dp.id_pedido)   AS num_pedidos,
              |   SUM(dp.cantidad)               AS unidades_vendidas,
              |   SUM(dp.cantidad * dp.precio_unidad) AS ingresos_brutos,
              |   AVG(dp.precio_unidad)          AS precio_promedio,
              |   MIN(dp.precio_unidad)          AS precio_minimo,
              |   MAX(dp.precio_unidad)          AS precio_maximo,
              |   MAX(dp.precio_unidad) - MIN(dp.precio_unidad) AS rango_precio
              | FROM detalle_pedidos dp
              | JOIN productos  p   ON dp.id_producto = p.id_producto
              | JOIN categorias cat ON p.id_categoria = cat.id_categoria
              | GROUP BY cat.nombre
              | HAVING SUM(dp.cantidad * dp.precio_unidad) > 1000000
              | ORDER BY ingresos_brutos DESC;

    .row.justify-content-center.mt-2
      .col-7
        p.bg-5.bg-r9.text-center.p-3 Para finalizar, se presenta la siguiente imagen comparativa:
    
    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 5.
          span Comportamiento de las funciones de agregación — sin vs. con GROUP BY
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema3/12.png',
            alt='Figura 5 que ilustra cómo operan las funciones de agregación sobre un conjunto de datos, comparando el comportamiento sin GROUP BY, donde se obtiene un único resultado global, y con GROUP BY ciudad, donde se generan resultados resumidos para cada grupo de datos.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema3/13.png',
            alt=''
          )

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 5.
              span Funciones de agregación SQL: referencia completa de comportamiento

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Función
                    th Descripción
                    th Comportamiento con NULL
                    th Ejemplo de uso analítico
                tbody
                  tr(style="background-color: #F3F9FF")
                    td COUNT(*).
                    td Cuenta todas las filas del grupo.
                    td Incluye filas con NULL en cualquier columna.
                    td.text-start Total de pedidos registrados en el período.
                  tr
                    td COUNT(col).
                    td Cuenta filas donde col no es NULL.
                    td Excluye las filas donde col es NULL.
                    td.text-start Pedidos que tienen dirección de envío registrada.
                  tr(style="background-color: #F3F9FF")
                    td COUNT(DISTINCT col).
                    td Cuenta valores únicos no nulos de col.
                    td Excluye NULLs y duplicados.
                    td.text-start Clientes distintos que compraron este mes.
                  tr
                    td SUM(col).
                    td Suma los valores no nulos de col.
                    td Ignora NULLs completamente.
                    td.text-start Total de ventas brutas por región del país.
                  tr(style="background-color: #F3F9FF")
                    td AVG(col).
                    td Promedio de los valores no nulos.
                    td Ignora NULLs (denominador = filas no nulas).
                    td.text-start Precio promedio de venta por categoría.
                  tr
                    td MAX(col).
                    td Valor máximo (número, fecha o texto).
                    td Ignora NULLs al comparar.
                    td.text-start Fecha del pedido más reciente por cliente.
                  tr(style="background-color: #F3F9FF")
                    td MIN(col).
                    td Valor mínimo (número, fecha o texto).
                    td Ignora NULLs al comparar.
                    td.text-start Precio mínimo de producto activo por proveedor.

</template>

<script>
export default {
  name: 'Tema3',
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
