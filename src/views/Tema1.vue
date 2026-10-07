<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del lenguaje de manipulación de datos (DML)

    figure
      img(src='@/assets/curso/tema1/1.jpg', alt='', style="width: 1226px").m-auto
    
    p.mt-4 El lenguaje de manipulación de datos, conocido por sus siglas en inglés DML (Data Manipulation Language), es el subconjunto del lenguaje SQL que permite a los usuarios y aplicaciones interactuar con los datos almacenados en una base de datos relacional. A diferencia del Lenguaje de Definición de Datos (DDL), que se ocupa de crear y modificar la estructura de las tablas (mediante comandos como CREATE TABLE, ALTER TABLE o DROP TABLE), el DML se enfoca exclusivamente en los datos que residen dentro de esas estructuras: permite agregar nuevos registros, actualizar los existentes, eliminar los obsoletos y, sobre todo, consultar y recuperar información de manera precisa y eficiente.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p El DML es el lenguaje del día a día de cualquier aplicación de #[i software] que trabaje con bases de datos. Cada vez que un usuario registra una venta en un sistema de punto de venta, actualiza su perfil en una red social, cancela un pedido en una tienda en línea o genera un reporte de ventas del mes anterior para la gerencia, está —de manera transparente, sin ser consciente de ello— ejecutando sentencias DML contra la base de datos subyacente. Para el desarrollador de #[i software], comprender profundamente el DML no es solo una cuestión técnica: es comprender cómo el #[i software] que construye interactúa con los datos del negocio, qué impacto tienen sus sentencias sobre el rendimiento del sistema y cómo garantizar la integridad y consistencia de la información en todo momento, incluso cuando múltiples usuarios acceden simultáneamente a los mismos datos.

      p.mt-4.text-center El lenguaje SQL, en su conjunto, se divide en varios sublenguajes especializados según el tipo de operación que realizan:

    //Tarjetas over
    .row.justify-content-center.mt-4
      //Tarjeta 1
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/2.svg', alt='Estructura lógica', style='width: 80px')
          
          p.text-center #[b DDL (Data Definition Language)]
          p Se ocupa de definir y modificar la estructura del esquema de la base de datos. 

      //Tarjeta 2
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/3.svg', alt='Ideas generales', style='width: 80px')
          
          p.text-center #[b DCL (Data Control Language)]
          p Gestiona los permisos de acceso y seguridad. 

      //Tarjeta 3
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/4.svg', alt='Ideas principales', style='width: 80px')

          p.text-center #[b TCL (Transaction Control Language)]
          p Controla las transacciones mediante los comandos COMMIT, ROLLBACK y SAVEPOINT. 
      
      //Tarjeta 4
      .col-lg-3.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/5.svg', alt='Ideas principales', style='width: 80px')

          p.text-center #[b DML (Data Manipulation Language)]
          p Objeto de estudio de este componente, se ocupa de todas las operaciones sobre los datos.


    .row.align-items-center.justify-content-center
      .col-lg-10        
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            p Es importante comprender esta arquitectura del lenguaje para entender qué tipo de operación se está realizando en cada momento y qué consecuencias tiene sobre el estado de la base de datos.
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-4
                p Los cuatro comandos fundamentales del DML son: INSERT (para insertar nuevos registros en una tabla), UPDATE (para modificar los valores de registros existentes), DELETE (para eliminar registros que ya no son necesarios) y SELECT (para consultar y recuperar datos de una o más tablas). De estos cuatro, SELECT es con mucha diferencia el más complejo, el más utilizado y el más poderoso, y merece —como se indicará en los temas siguientes— varias temáticas dedicadas exclusivamente a sus múltiples cláusulas, variaciones y combinaciones. Los tres primeros (INSERT, UPDATE, DELETE) conforman el grupo de comandos de escritura o modificación de datos, que son los que alteran el estado persistente de la base de datos y, por tanto, requieren una comprensión precisa de sus efectos, de las precauciones necesarias para utilizarlos correctamente y de los mecanismos de control de transacciones que protegen la integridad de los datos ante fallos del sistema.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/6.svg', alt='', class="w-100 h-100 object-fit-cover")


    .row.justify-content-center.mt-4
      .col-8
        p.bg-5.bg-r9.text-center.p-3 La siguiente imagen ejemplifica la arquitectura de este lenguaje:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 1.
          span Arquitectura del lenguaje SQL y sus sublenguajes principales
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema1/7.svg',
            alt='Figura 1 que presenta la arquitectura general del lenguaje SQL y la posición del DML dentro de sus sublenguajes, mostrando cómo cada categoría se relaciona con las operaciones disponibles en un sistema de gestión de bases de datos relacional.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema1/8.svg',
            alt=''
          )

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Comandos de inserción, modificación y eliminación de registros

    p Los comandos de modificación del DML —INSERT, UPDATE y DELETE— son las operaciones que alteran el estado persistente de la base de datos. Cada vez que se ejecuta uno de estos comandos, el SMBD registra el cambio de manera permanente en el almacenamiento físico, a menos que la operación esté enmarcada dentro de una transacción que posteriormente se revierta (ROLLBACK). Por ello, su uso requiere comprensión clara de las tablas afectadas, las condiciones de filtrado que determinan qué registros se modifican o eliminan y las implicaciones para la integridad referencial del esquema relacional.

    .row.align-items-center.justify-content-center
      .col-lg-12        
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-15(data-aos="fade-right")
              .col-lg.p-4
                p Un principio fundamental que todo desarrollador debe interiorizar al trabajar con los comandos de modificación del DML es el principio de mínima sorpresa: antes de ejecutar cualquier UPDATE o DELETE sobre una base de datos de producción, debe ejecutarse primero el SELECT correspondiente con la misma cláusula WHERE para verificar que los registros que se van a modificar o eliminar son exactamente los que se intenta afectar. Esta práctica preventiva, aunque sencilla, evita errores catastróficos que podrían resultar en pérdida irreversible de datos.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/9.svg', alt='', class="w-100 h-100 object-fit-cover")

    .titulo-tres.mt-4: h3 Comando INSERT — Inserción de registros

    p El comando INSERT permite agregar uno o más registros nuevos a una tabla de la base de datos. Es el punto de entrada de los datos al sistema y su correcta implementación es fundamental para garantizar la integridad y calidad de la información almacenada. Existen varias formas de utilizar el INSERT, cada una adecuada para diferentes escenarios y necesidades.

    .row.align-items-center.justify-content-center
      .col-lg-10    
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/10.svg', alt='', class="w-100 h-100 object-fit-cover")

              .col-lg.p-4
                .cajon.color1.p-4
                  p La forma más común y recomendada es la forma explícita, donde se especifican los nombres de las columnas en las que se van a insertar los datos, seguidos de los valores correspondientes. Esta forma es preferible a la forma implícita (sin especificar nombres de columnas) porque hace el código más legible, más resistente a cambios en la estructura de la tabla y reduce significativamente el riesgo de insertar datos en columnas incorrectas. Si en el futuro se agrega una nueva columna a la tabla, las sentencias INSERT explícitas continuarán funcionando correctamente, mientras que las implícitas podrían fallar o producir resultados incorrectos.
                
                p.mt-3 Otra variante importante es el INSERT múltiple, que permite insertar varios registros en una sola sentencia. Esta forma es significativamente más eficiente que ejecutar múltiples INSERT individuales, porque reduce el número de viajes de red entre la aplicación y el servidor de base de datos, y permite al SMBD optimizar la operación de escritura de múltiples registros en una sola transacción. En entornos de carga masiva de datos, esta diferencia de rendimiento puede ser de varios órdenes de magnitud.

        p.mt-1 La variante INSERT...SELECT es especialmente poderosa porque permite insertar el resultado de una consulta compleja directamente en una tabla, sin necesidad de recuperar los datos en la aplicación y re-enviarlos al servidor. Esto es fundamental para operaciones de transformación de datos, carga de tablas de resumen o migración de datos entre tablas del mismo esquema o de esquemas diferentes.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code1.p-4.mb-4
          pre.language-sql
            code.text-white
              | -- Forma explícita (recomendada siempre)
              | INSERT INTO clientes (id_cliente, nombre, email, telefono, ciudad, fecha_registro)
              | VALUES (1, 'Ana García', 'ana@email.com', '3001234567', 'Bogotá', GETDATE());
              | 
              | -- Inserción múltiple en una sola sentencia (más eficiente)
              | INSERT INTO clientes (id_cliente, nombre, email, telefono, ciudad)
              | VALUES
              |   (2, 'Carlos López', 'carlos@email.com', '3109876543', 'Medellín'),
              |   (3, 'María Torres', 'maria@email.com', '3204567890', 'Cali'),
              |   (4, 'Pedro Ruiz', 'pedro@email.com', '3157891234', 'Barranquilla'),
              |   (5, 'Laura Gómez', 'laura@email.com', '3003214567', 'Bogotá');
              | 
              | -- INSERT ... SELECT: insertar desde consulta
              | -- Copiar clientes con compras > 5M a tabla VIP
              | INSERT INTO clientes_vip (id_cliente, nombre, email, categoria, fecha_alta)
              | SELECT
              |   id_cliente,
              |   nombre,
              |   email,
              |   CASE
              |     WHEN total_compras > 10000000 THEN 'Platino'
              |     WHEN total_compras > 5000000 THEN 'Oro'
              |     ELSE 'Plata'
              |   END AS categoria,
              |   GETDATE() AS fecha_alta
              | FROM clientes
              | WHERE total_compras > 5000000
              | AND estado = 'activo';

        p.mt-3 Al trabajar con el comando INSERT es fundamental tener en cuenta las restricciones de integridad definidas en la tabla: las columnas definidas como NOT NULL deben recibir un valor (o tener un valor por defecto definido), las claves primarias no pueden duplicarse, y las claves foráneas deben hacer referencia a valores que existan en la tabla referenciada. Cuando alguna de estas restricciones se viola, el SMBD lanzará un error y revertirá la inserción, protegiendo así la integridad de los datos. Es responsabilidad del desarrollador manejar correctamente estos errores en la capa de aplicación y proporcionar mensajes de error informativos al usuario.

    .titulo-tres.mt-4: h3 Comando UPDATE — Modificación de registros

    p El comando UPDATE es el mecanismo del DML para modificar los valores de uno o más campos en los registros que cumplen una condición específica. Es uno de los comandos más poderosos y, al mismo tiempo, uno de los que requiere mayor cautela en su uso, porque si se ejecuta sin una cláusula WHERE correctamente definida, puede modificar todos los registros de la tabla de manera irreversible, con consecuencias potencialmente desastrosas en un entorno de producción.

    .row.align-items-center.justify-content-center
      .col-lg-10        
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-4
                p La estructura básica del UPDATE es: UPDATE [tabla] SET [columna1 = valor1, columna2 = valor2, ...] WHERE [condición]. La cláusula SET puede modificar múltiples columnas en una sola sentencia, lo que es más eficiente que ejecutar múltiples UPDATE separados. La cláusula WHERE determina qué registros se van a actualizar; su ausencia o una condición demasiado amplia puede tener consecuencias no deseadas que van desde datos incorrectos hasta la pérdida total de información crítica del negocio.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/11.png', alt='', class="w-100 h-100 object-fit-cover")
            
            p.mt-3 El UPDATE también puede utilizar el valor actual de la columna en la expresión de actualización, lo que lo hace muy útil para operaciones como incrementar contadores, actualizar saldos, ajustar precios por un porcentaje o concatenar texto a un campo existente. Adicionalmente, la variante UPDATE con subconsulta o con JOIN permite actualizar registros de una tabla basándose en información de otra tabla, lo que es fundamental en operaciones de sincronización y actualización en lote.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code2.p-4.mb-4
          pre.language-sql
            code.text-white
              | -- UPDATE básico: actualizar un registro específico por clave primaria
              | UPDATE clientes
              | SET telefono = '3001111111',
              |     ciudad   = 'Bogotá D.C.',
              |     email    = 'ana.garcia.nueva@email.com'
              | WHERE id_cliente = 1;
              | 
              | -- UPDATE con expresión: incrementar precio 10% a productos de Electrónica
              | UPDATE productos
              | SET precio    = precio * 1.10,
              |     fecha_mod = GETDATE(),
              |     usuario_mod = 'sistema'
              | WHERE id_categoria IN (
              |   SELECT id_categoria FROM categorias WHERE nombre = 'Electrónica'
              | );
              | 
              | -- UPDATE con CASE: actualizar categoría según total de compras
              | UPDATE clientes
              | SET categoria = CASE
              |     WHEN total_compras >= 10000000 THEN 'Platino'
              |     WHEN total_compras >= 5000000  THEN 'Oro'
              |     WHEN total_compras >= 1000000  THEN 'Plata'
              |     ELSE 'Estándar'
              |   END
              | WHERE estado = 'activo';
              | 
              | -- UPDATE con JOIN (SQL Server): actualizar usando datos de otra tabla
              | UPDATE p
              | SET p.stock_minimo = c.cantidad_promedio * 0.20
              | FROM productos p
              | JOIN (SELECT id_producto, AVG(cantidad) AS cantidad_promedio
              |       FROM detalle_pedidos
              |       GROUP BY id_producto) c ON p.id_producto = c.id_producto;

        p.mt-3 Una práctica de seguridad ampliamente recomendada es envolver los UPDATE críticos en una transacción explícita (BEGIN TRANSACTION) y verificar los resultados antes de confirmar los cambios con COMMIT. De esta manera, si algo sale mal o si el número de registros afectados no es el esperado (verificable con la función @@ROWCOUNT en SQL Server o ROW_COUNT() en MySQL), se puede revertir la operación con ROLLBACK sin que los cambios queden registrados permanentemente. Esta práctica es especialmente importante en actualizaciones masivas o en entornos donde los datos son críticos para el negocio.

    .titulo-tres.mt-4: h3 Comando DELETE — Eliminación de registros

    p.mt-3 El comando DELETE es la operación del DML para eliminar uno o más registros de una tabla que cumplen la condición especificada en la cláusula WHERE. Al igual que UPDATE, la omisión de la cláusula WHERE resulta en la eliminación de todos los registros de la tabla, razón por la cual muchas organizaciones implementan políticas que requieren aprobación explícita antes de ejecutar DELETE sin WHERE en entornos de producción.

    .bloque-texto-g.bg-base.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es importante comprender la diferencia entre DELETE, TRUNCATE TABLE y DROP TABLE, tres operaciones que pueden confundirse, pero tienen consecuencias muy diferentes. DELETE elimina los registros que cumplen la condición (o todos si no hay WHERE), activa los #[i triggers] definidos en la tabla, puede revertirse dentro de una transacción y registra cada eliminación en el log de transacciones. TRUNCATE TABLE elimina todos los registros de una tabla de manera mucho más eficiente (sin registrar cada fila en el log), pero no puede usarse con condiciones, no activa #[i triggers] y en la mayoría de los SMBD no puede revertirse fácilmente. DROP TABLE elimina la tabla completa junto con todos sus datos, índices y definiciones.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code2.p-4.mb-4
          pre.language-sql
            code.text-white
              | -- DELETE básico: eliminar un registro específico
              | DELETE FROM clientes WHERE id_cliente = 10;
              | 
              | -- DELETE condicional: eliminar pedidos cancelados antes de 2023
              | DELETE FROM pedidos
              | WHERE estado = 'cancelado'
              | AND fecha_pedido < '2023-01-01';
              | 
              | -- DELETE con subquery: eliminar clientes inactivos sin pedidos
              | DELETE FROM clientes
              | WHERE estado = 'inactivo'
              | AND id_cliente NOT IN (
              |   SELECT DISTINCT id_cliente
              |   FROM pedidos
              |   WHERE id_cliente IS NOT NULL
              | );
              | 
              | -- Patrón de eliminación lógica (soft delete) - recomendado en producción
              | UPDATE clientes
              | SET eliminado = 1,
              |     fecha_baja = GETDATE(),
              |     usuario_baja = 'admin'
              | WHERE id_cliente = 10;
              | 
              | -- DELETE con transacción explícita - buena práctica en producción
              | BEGIN TRANSACTION;
              |   DELETE FROM detalle_pedidos WHERE id_pedido = 500;
              |   DELETE FROM pedidos         WHERE id_pedido = 500;
              |   -- Verificar que se eliminaron los registros esperados
              |   IF @@ROWCOUNT = 1
              |     COMMIT TRANSACTION;
              |   ELSE
              |     ROLLBACK TRANSACTION;

        p.mt-3 Basado en lo anterior, la siguiente tabla resume los tres comandos de modificación del DML con su sintaxis básica, el efecto que producen sobre la base de datos y las precauciones más importantes que debe tener el desarrollador al utilizarlos en entornos reales:

    .row.justify-content-center
      .col-lg-auto
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 1.
              span Comandos de modificación DML: sintaxis, efecto y precauciones esenciales

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Comando
                    th Sintaxis básica
                    th Efecto en la BD
                    th Precaución principal
                    th Reversible con ROLLBACK
                tbody
                  tr
                    td.text-start INSERT.
                    td.text-start INSERT INTO tabla (cols) VALUES (vals).
                    td.text-start Agrega nuevos registros.
                    td.text-start Respetar NOT NULL, claves primarias y foráneas.
                    td.text-start Sí, si está en transacción.
                  tr(style="background-color: #F3F9FF")
                    td.text-start INSERT...SELECT.
                    td.text-start INSERT INTO tabla SELECT ... FROM ...
                    td.text-start Inserta resultado de consulta.
                    td.text-start Verificar tipos y número de columnas coincidan.
                    td.text-start Sí, si está en transacción.
                  tr
                    td.text-start UPDATE.
                    td.text-start UPDATE tabla SET col=val WHERE cond.
                    td.text-start Modifica registros existentes.
                    td.text-start SIEMPRE usar WHERE; sin él actualiza toda la tabla.
                    td.text-start Sí, si está en transacción.
                  tr(style="background-color: #F3F9FF")
                    td.text-start DELETE.
                    td.text-start DELETE FROM tabla WHERE cond.
                    td.text-start Elimina registros de la tabla.
                    td.text-start SIEMPRE usar WHERE; verificar integridad referencial.
                    td.text-start Sí, si está en transacción.
                  tr
                    td.text-start TRUNCATE.
                    td.text-start TRUNCATE TABLE tabla.
                    td.text-start Elimina todos los registros.
                    td.text-start No acepta WHERE; no activa #[i triggers]; muy rápido.
                    td.text-start Limitado según el SMBD.


    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Búsqueda y recuperación de datos con el comando SELECT
    
    p El comando SELECT es, con diferencia, el más utilizado y el más versátil de todo el lenguaje SQL. Su función principal es recuperar datos de una o más tablas de la base de datos y presentarlos de la manera que el usuario o la aplicación requiera, ya sea como un conjunto de registros completos, como un subconjunto de columnas, como datos agrupados y resumidos, o como el resultado de combinar múltiples tablas relacionadas. A diferencia de INSERT, UPDATE y DELETE, SELECT no modifica el estado de la base de datos: es una operación de solo lectura que puede ejecutarse con total seguridad en cualquier momento, sin riesgo de alterar los datos almacenados, razón por la cual es la operación más frecuente en cualquier aplicación que trabaje con bases de datos.

    .row.align-items-center.justify-content-center
      .col-lg-10        
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-4
                p La potencia del SELECT radica en su capacidad de combinar múltiples cláusulas en una sola sentencia para filtrar, ordenar, agrupar, calcular y presentar datos de maneras muy sofisticadas. Una sentencia SELECT bien construida puede reemplazar decenas de líneas de código de aplicación, realizando en el motor de base de datos cálculos que serían mucho más lentos e ineficientes si se hicieran en la capa de aplicación después de recuperar los datos crudos. Esta es una de las razones fundamentales por las que aprender a escribir sentencias SELECT eficientes y correctas es una de las competencias más valiosas que un desarrollador de software puede realizar a lo largo de su carrera profesional.
              
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/13.png', alt='', class="w-100 h-100 object-fit-cover")
            
            p.mt-3 La estructura general de una sentencia SELECT sigue un orden fijo de cláusulas que el motor de base de datos procesa en un orden lógico interno diferente al orden de escritura. Comprender este orden de procesamiento es fundamental para escribir consultas correctas y evitar errores comunes como usar alias definidos en SELECT dentro del WHERE (lo que no está permitido porque SELECT se procesa después de WHERE), o incluir funciones de agregación en WHERE en lugar de HAVING. El orden de escritura es: SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY. El orden de procesamiento lógico es: FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.

    .row.justify-content-center.mt-4
      .col-lg-10
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code1.p-4.mb-4
          pre.language-sql
            code.text-white
              | -- Estructura completa de una sentencia SELECT (orden de escritura)
              | SELECT [ALL | DISTINCT] columnas, expresiones, funciones
              | FROM tabla_principal
              | [LEFT | RIGHT | INNER | FULL] JOIN tabla_secundaria ON condición_join
              | [WHERE condición_filtro_filas]
              | [GROUP BY columna(s) de agrupación]
              | [HAVING condición_filtro_grupos]
              | [ORDER BY columna(s) [ASC | DESC]]
              | [TOP n | LIMIT n | FETCH FIRST n ROWS ONLY];
              | 
              | -- Ejemplo real: reporte de ventas por ciudad y categoría
              | SELECT
              |   c.ciudad              AS ciudad,
              |   cat.nombre            AS categoria,
              |   COUNT(DISTINCT p.id_pedido)   AS num_pedidos,
              |   COUNT(DISTINCT p.id_cliente)  AS clientes_distintos,
              |   SUM(dp.cantidad * dp.precio_unidad) AS ventas_brutas,
              |   AVG(dp.cantidad * dp.precio_unidad) AS ticket_promedio
              | FROM clientes c
              | JOIN pedidos         p  ON c.id_cliente = p.id_cliente
              | JOIN detalle_pedidos dp ON p.id_pedido = dp.id_pedido
              | JOIN productos       pr ON dp.id_producto = pr.id_producto
              | JOIN categorias      cat ON pr.id_categoria = cat.id_categoria
              | WHERE p.estado = 'completado'
              | AND   YEAR(p.fecha_pedido) = 2024
              | GROUP BY c.ciudad, cat.nombre
              | HAVING SUM(dp.cantidad * dp.precio_unidad) > 500000
              | ORDER BY ventas_brutas DESC;

        p.mt-3 De igual manera, para entender el tema de ordenamiento, se presenta la siguiente imagen. Es importante comprender dicho orden para evitar errores de lógica en consultas complejas:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2.
          span Orden de procesamiento lógico interno del comando SELECT
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema1/14.svg',
            alt='Figura 2 que ilustra la diferencia entre el orden de escritura y el orden de procesamiento lógico interno de las cláusulas del comando SELECT, mostrando además ejemplos de errores y usos correctos relacionados con alias y funciones de agregación en consultas SQL. '
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema1/15.svg',
            alt=''
          )

        p.mt-4 Para finalizar, la siguiente tabla presenta ejemplos progresivos del comando SELECT, desde la forma más simple hasta consultas con múltiples cláusulas combinadas, ilustrando cómo cada cláusula adicional enriquece y refina el resultado de la consulta:

    .row.justify-content-center
      .col-lg-auto
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 2.
              span Ejemplos progresivos del comando SELECT — de básico a avanzado

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Nivel
                    th Sentencia SQL (simplificada)
                    th Resultado obtenido
                    th Nuevas cláusulas
                tbody
                  tr
                    td.text-start 1 - Todos.
                    td.text-start SELECT * FROM clientes.
                    td.text-start Todos los campos y registros de clientes.
                    td.text-start FROM.
                  tr(style="background-color: #F3F9FF")
                    td.text-start 2 - Proyección.
                    td.text-start SELECT nombre, email FROM clientes.
                    td.text-start Solo las columnas nombre y email.
                    td.text-start SELECT cols.
                  tr
                    td.text-start 3 - Filtrado.
                    td.text-start SELECT nombre FROM clientes WHERE ciudad='Bogotá'.
                    td.text-start Solo clientes de Bogotá.
                    td.text-start WHERE.
                  tr(style="background-color: #F3F9FF")
                    td.text-start 4 - Ordenado.
                    td.text-start SELECT nombre FROM clientes ORDER BY nombre ASC.
                    td.text-start Clientes en orden alfabético.
                    td.text-start ORDER BY.
                  tr
                    td.text-start 5 - Sin duplicados.
                    td.text-start SELECT DISTINCT ciudad FROM clientes.
                    td.text-start Lista única de ciudades sin repetir.
                    td.text-start DISTINCT.
                  tr(style="background-color: #F3F9FF")
                    td.text-start 6 - Con alias.
                    td.text-start SELECT nombre AS cliente, email AS correo FROM clientes.
                    td.text-start Columnas con nombres alternativos.
                    td.text-start AS.
                  tr
                    td.text-start 7 - Limitado.
                    td.text-start SELECT TOP 10 nombre FROM clientes ORDER BY total_compras DESC.
                    td.text-start Los 10 mejores clientes.
                    td.text-start TOP/LIMIT.
                  tr(style="background-color: #F3F9FF")
                    td.text-start 8 - Agrupado.
                    td.text-start SELECT ciudad, COUNT(*) AS total FROM clientes GROUP BY ciudad.
                    td.text-start Cantidad de clientes por ciudad.
                    td.text-start GROUP BY.
                  tr
                    td.text-start 9 - Filtro grupo.
                    td.text-start ...GROUP BY ciudad HAVING COUNT(*) > 5.
                    td.text-start Solo ciudades con más de 5 clientes.
                    td.text-start HAVING.
                  tr(style="background-color: #F3F9FF")
                    td.text-start 10 - Completo.
                    td.text-start SELECT + FROM + JOIN + WHERE + GROUP BY + HAVING + ORDER BY.
                    td.text-start Reporte multidimensional completo.
                    td.text-start Todo combinado.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
