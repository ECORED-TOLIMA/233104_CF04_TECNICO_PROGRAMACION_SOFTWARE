<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Procedimientos almacenados en bases de datos

    p Un procedimiento almacenado (#[i stored procedure]) es un conjunto de sentencias SQL precompiladas y almacenadas directamente en el servidor de base de datos, que pueden ejecutarse como una unidad cohesiva mediante una simple llamada con nombre y parámetros opcionales. A diferencia de las consultas SQL que se envían dinámicamente desde la aplicación al servidor cada vez que se ejecutan —con el costo asociado de #[i parsing], compilación y optimización en cada ejecución— los procedimientos almacenados residen permanentemente en el servidor y solo necesitan ser creados una vez para quedar disponibles de manera indefinida para todas las aplicaciones que tengan acceso al servidor de base de datos.

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12        
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-16(data-aos="fade-right")
              .col-lg.p-4
                p Los procedimientos almacenados representan uno de los mecanismos más poderosos para encapsular lógica de negocio en la capa de datos. Cuando una operación de negocio compleja requiere ejecutar múltiples sentencias SQL en secuencia, verificar condiciones intermedias, manejar errores y garantizar la atomicidad de toda la operación mediante transacciones, estos procedimientos ofrecen el entorno ideal: permiten expresar esa lógica de negocio de manera centralizada, con control total sobre el flujo de ejecución, el manejo de errores y la gestión de transacciones.
                p Desde una perspectiva arquitectónica, los procedimientos almacenados implementan el patrón de diseño conocido como “capa de acceso a datos” (Data Access Layer o DAL). En lugar de que cada aplicación que necesite acceder a los datos del negocio construya sus propias sentencias SQL, todas las aplicaciones llaman a procedimientos almacenados estandarizados. Esto garantiza la consistencia de las operaciones de negocio, facilita el mantenimiento (un cambio en la lógica del negocio se implementa en un solo lugar), mejora la seguridad (las aplicaciones solo tienen permisos para ejecutar procedimientos, no para modificar tablas directamente) y reduce la superficie de ataque para inyecciones SQL.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/1.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.align-items-start.mt-4
              .col-lg-2.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema5/2.svg', style='width: 150px')
              
              .col
                p En el ecosistema del desarrollo de software empresarial colombiano, los procedimientos almacenados son ampliamente utilizados en sistemas de gestión de inventarios, facturación electrónica (especialmente con los requisitos de la DIAN), nómina y contabilidad, sistemas bancarios y sistemas de salud, donde la complejidad de las reglas de negocio, los requisitos de auditoría y la necesidad de garantizar la integridad de las transacciones hacen de los #[i stored procedures] una herramienta invaluable que complementa perfectamente el código de aplicación.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Creación y definición de procedimientos almacenados
    
    p La creación de un procedimiento almacenado se realiza con el comando CREATE PROCEDURE (o CREATE PROC en la sintaxis abreviada de SQL Server). La sintaxis varía según el SMBD —T-SQL para SQL Server, PL/pgSQL para PostgreSQL, PL/SQL para Oracle, el dialecto propio de MySQL— pero la estructura conceptual es la misma en todos los casos: un nombre único para el procedimiento, una lista opcional de parámetros de entrada o salida con sus tipos de datos y el cuerpo del procedimiento delimitado por palabras clave específicas (AS BEGIN...END en SQL Server, BEGIN...END en MySQL después del DELIMITER).

    .bloque-texto-g.bloque-texto-g--inverso.bg-base.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El cuerpo de un procedimiento almacenado puede contener no solo sentencias DML (SELECT, INSERT, UPDATE, DELETE) sino también estructuras de control de flujo propias del lenguaje procedural del SMBD: condicionales (IF...ELSE, CASE), ciclos (WHILE), variables locales declaradas con DECLARE, cursores para procesar resultados fila por fila, manejo de errores (TRY...CATCH en T-SQL, DECLARE HANDLER en MySQL), y llamadas a otros procedimientos almacenados o funciones. Esta capacidad de combinar SQL con lógica procedural es lo que convierte a los procedimientos almacenados en unidades de lógica de negocio completas y autosuficientes.

    .titulo-tres.mt-5: h3 Estructura básica y variables locales

    p La estructura básica de un procedimiento almacenado comienza con el encabezado que define el nombre y los parámetros, seguido por el cuerpo delimitado por BEGIN y END. Dentro del cuerpo se pueden declarar variables locales usando DECLARE, que son visibles solo dentro del procedimiento y permiten almacenar resultados intermedios de cálculos o valores recuperados de la base de datos para usarlos en operaciones posteriores.

    .row.justify-content-center.mt-4
      .col-lg-10 
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code11.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- SQL Server / T-SQL: procedimiento básico con variables locales
              | CREATE PROCEDURE sp_ResumenCliente
              |      @id_cliente INT
              | AS
              | BEGIN
              |   SET NOCOUNT ON; -- suprime el mensaje 'N rows affected'
              | 
              |   -- Variables locales para cálculos intermedios
              |   DECLARE @nombre        VARCHAR(100);
              |   DECLARE @total_pedidos INT;
              |   DECLARE @ventas_totales DECIMAL(15,2);
              |   DECLARE @categoria     VARCHAR(20);
              | 
              |   -- Recuperar datos del cliente
              |   SELECT @nombre = nombre FROM clientes WHERE id_cliente = @id_cliente;
              | 
              |   -- Calcular métricas
              |   SELECT @total_pedidos = COUNT(*),
              |      @ventas_totales = SUM(total)
              |   FROM   pedidos
              |   WHERE  id_cliente = @id_cliente AND estado = 'completado';
              | 
              |   -- Determinar categoría
              |   SET @categoria = CASE
              |     WHEN @ventas_totales > 10000000 THEN 'Platino'
              |     WHEN @ventas_totales > 5000000  THEN 'Oro'
              |     WHEN @ventas_totales > 1000000  THEN 'Plata'
              |     ELSE 'Estándar'
              |   END;
              | 
              |   -- Retornar resultado
              |   SELECT
              |     @nombre         AS cliente,
              |     @total_pedidos  AS num_pedidos,
              |     @ventas_totales AS ventas_totales,
              |     @categoria      AS categoria_sugerida;
              | END;
              | GO

    .titulo-tres.mt-5: h3 Procedimientos con lógica de negocio compleja

    .row.align-items-center.justify-content-center
      .col-lg-12        
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            
            .row.d-flex.align-items-center.bg-15(data-aos="fade-right")
              .col-lg.p-2
                p.p-1 Los procedimientos almacenados de uso real en entornos empresariales van mucho más allá de simples consultas parametrizadas. Encapsulan procesos de negocio completos que involucran múltiples operaciones secuenciales con validaciones intermedias, manejo de condiciones excepcionales y garantía de atomicidad mediante transacciones. Es así, como se detalla a continuación un procedimiento que implementa el proceso de registro de un pedido con verificación de stock, actualización de inventario y registro de la transacción, todo dentro de una transacción que garantiza que o todas las operaciones se completan exitosamente o ninguna se realiza.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/4.svg', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center.mt-4
      .col-lg-10 
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code12.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | CREATE PROCEDURE sp_RegistrarPedido
              |   @id_cliente  INT,
              |   @id_producto INT,
              |   @cantidad    INT,
              |   @id_pedido   INT OUTPUT, -- devuelve el ID generado
              |   @mensaje     VARCHAR(200) OUTPUT
              | AS
              | BEGIN
              |   SET NOCOUNT ON;
              |   SET @id_pedido = -1;
              |   SET @mensaje = '';
              | 
              |   BEGIN TRANSACTION;
              |   BEGIN TRY
              |      DECLARE @stock      INT;
              |      DECLARE @precio     DECIMAL(12,2);
              |      DECLARE @cliente_ok BIT;
              | 
              |      -- Validar que el cliente existe y está activo
              |      SELECT @cliente_ok = CASE WHEN estado = 'activo' THEN 1 ELSE 0 END
              |      FROM   clientes WHERE id_cliente = @id_cliente;
              | 
              |      IF @cliente_ok IS NULL BEGIN
              |         SET @mensaje = 'ERROR: Cliente no encontrado';
              |         ROLLBACK TRANSACTION; RETURN;
              |      END;
              |      IF @cliente_ok = 0 BEGIN
              |         SET @mensaje = 'ERROR: Cliente inactivo o bloqueado';
              |         ROLLBACK TRANSACTION; RETURN;
              |      END;
              | 
              |      -- Verificar stock disponible con bloqueo
              |      SELECT @stock = stock, @precio = precio
              |      FROM   productos WITH (UPDLOCK)
              |      WHERE  id_producto = @id_producto AND activo = 1;
              | 
              |      IF @stock IS NULL BEGIN
              |         SET @mensaje = 'ERROR: Producto no disponible';
              |         ROLLBACK TRANSACTION; RETURN;
              |      END;
              |      IF @stock < @cantidad BEGIN
              |         SET @mensaje = 'ERROR: Stock insuficiente. Disponible: ' + CAST(@stock AS VARCHAR);
              |         ROLLBACK TRANSACTION; RETURN;
              |      END;
              | 
              |      -- Registrar el pedido
              |      INSERT INTO pedidos (id_cliente, fecha_pedido, total, estado)
              |      VALUES (@id_cliente, GETDATE(), @precio * @cantidad, 'pendiente');
              |      SET @id_pedido = SCOPE_IDENTITY();
              | 
              |      -- Registrar el detalle
              |      INSERT INTO detalle_pedidos (id_pedido, id_producto, cantidad, precio_unidad)
              |      VALUES (@id_pedido, @id_producto, @cantidad, @precio);
              | 
              |      -- Descontar del inventario
              |      UPDATE productos
              |      SET    stock = stock - @cantidad
              |      WHERE  id_producto = @id_producto;
              | 
              |      SET @mensaje = 'Pedido #' + CAST(@id_pedido AS VARCHAR) + ' registrado OK';
              |      COMMIT TRANSACTION;
              |   END TRY
              |   BEGIN CATCH
              |      ROLLBACK TRANSACTION;
              |      SET @id_pedido = -99;
              |      SET @mensaje = 'ERROR inesperado: ' + ERROR_MESSAGE();
              |   END CATCH
              | END;
              | GO

    p.text-center Igualmente, se detalla la siguiente imagen explicativa del ciclo de vida de un procedimiento almacenado:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 8.
          span Ciclo de vida de los procedimientos almacenados vs SQL dinámico
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema5/5.png',
            alt='Figura 8 que relaciona un diagrama comparativo del ciclo de vida de un procedimiento almacenado y una sentencia SQL dinámica, mostrando la reutilización del plan de ejecución en caché, la diferencia en parsing y compilación por ejecución, así como las ventajas de rendimiento, tráfico de red y seguridad del procedimiento almacenado.'
          )
          .row.d-block.d-md-none
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/Figura8.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/temas/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Ciclo de vida de los procedimientos almacenados vs SQL dinámico.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Parámetros y ejecución de procedimientos
    
    p Los parámetros son el mecanismo de comunicación entre el código que realiza la llamada y el procedimiento. Permiten que este se comporte de manera diferente según los valores proporcionados, sin necesidad de crear versiones separadas para cada variación. Un diseño adecuado maximiza la reutilización mediante parámetros que cubren distintos escenarios de uso, incluyendo valores por defecto para los opcionales.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              .row.align-items-start.mt-4
                .col
                  p La gestión correcta de parámetros incluye también la validación de los valores recibidos: verificar que los parámetros obligatorios no sean NULL, que los valores numéricos estén en los rangos aceptables y que los identificadores proporcionados hagan referencia a registros que existan en las tablas correspondientes. Esta validación temprana (fail fast) evita que el procedimiento ejecute operaciones costosas solo para descubrir al final que los datos de entrada son inválidos.
                
                .col-lg-2.mb-lg-0.mb-4.d-none.d-md-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema5/6.svg', style='width: 100px').m-auto
                

    .row.justify-content-center.mt-4
      .col-lg-10 
        .etiqueta-barra.mb-3
          p.mb-0 Ejemplo:
        .tarjeta.bg-code11.mb-4
          pre.language-sql.w-100.mb-0
            code.text-white
              | -- Procedimiento con parámetros opcionales y valores por defecto
              | CREATE PROCEDURE sp_ReportePedidos
              |   @id_cliente   INT         = NULL,       -- NULL = todos los clientes
              |   @estado       VARCHAR(20) = 'completado',
              |   @fecha_desde  DATE        = NULL,       -- NULL = inicio del año actual
              |   @fecha_hasta  DATE        = NULL,       -- NULL = hoy
              |   @top_n        INT         = 100         -- máximo de registros
              | AS
              | BEGIN
              |   SET NOCOUNT ON;
              | 
              |   -- Establecer valores por defecto para fechas
              |   SET @fecha_desde = ISNULL(@fecha_desde, DATEFROMPARTS(YEAR(GETDATE()), 1, 1));
              |   SET @fecha_hasta = ISNULL(@fecha_hasta, CAST(GETDATE() AS DATE));
              | 
              |   -- Consulta principal formateada e indentada
              |   SELECT TOP (@top_n)
              |     c.nombre AS cliente,
              |     p.id_pedido,
              |     p.fecha_pedido,
              |     p.total,
              |     p.estado
              |   FROM   pedidos  p
              |   JOIN   clientes c ON p.id_cliente = c.id_cliente
              |   WHERE  (@id_cliente IS NULL OR p.id_cliente = @id_cliente)
              |   AND    p.estado = @estado
              |   AND    p.fecha_pedido BETWEEN @fecha_desde AND @fecha_hasta
              |   ORDER BY p.fecha_pedido DESC;
              | END;
              | GO
              | 
              | -- Diferentes formas de ejecutar el procedimiento
              | EXEC sp_ReportePedidos;   -- todos los defaults
              | EXEC sp_ReportePedidos  @id_cliente = 5;   -- cliente 5
              |      
              | EXEC sp_ReportePedidos @estado = 'pendiente';  -- pedidos pendientes
              | EXEC sp_ReportePedidos @fecha_desde = '2024-01-01', -- rango específico
              |      @fecha_hasta = '2024-03-31',
              |      @top_n = 50;

    .titulo-tres.mt-5: h3 Tipos de parámetros en procedimientos almacenados

    p Los procedimientos almacenados utilizan parámetros para recibir datos, devolver resultados adicionales y adaptar su comportamiento a distintos escenarios de uso. Aunque la sintaxis varía entre los principales SMBD, los tipos de parámetros responden a propósitos comunes que todo desarrollador debe conocer.
    | Los tipos principales de parámetros son:

    //Tarjetas over
    .row.justify-content-center.mt-4
      //Tarjeta 1
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema5/7.svg', alt='Estructura lógica', style='width: 80px')
          
          p.text-center #[b Parámetros de entrada (IN)]
          p Permiten recibir valores desde el código llamador y son el tipo por defecto en SQL Server, MySQL y PostgreSQL.

      //Tarjeta 2
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema5/8.svg', alt='Ideas generales', style='width: 80px')
          
          p.text-center #[b Parámetros de salida (OUT)]
          p Devuelven valores calculados al finalizar la ejecución, complementando el conjunto de resultados principal.

      //Tarjeta 3
      .col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema5/9.svg', alt='Ideas principales', style='width: 80px')

          p.text-center #[b Parámetros de entrada-salida (INOUT)]
          p Reciben un valor inicial, lo modifican durante la ejecución y devuelven el valor actualizado al llamador.
      
      //Tarjeta 4
      .col-lg-3.d-flex
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema5/10.svg', alt='Ideas principales', style='width: 80px')

          p.text-center #[b Parámetros con valor por defecto]
          p Facilitan llamadas más simples al usar un valor predefinido cuando el parámetro no es proporcionado explícitamente.

    .titulo-tres.mt-5: h3 Gestión del ciclo de vida de los procedimientos almacenados

    p El trabajo con procedimientos almacenados implica una serie de operaciones que cubren todo su ciclo de vida, desde la creación hasta su mantenimiento y ejecución. Estas operaciones son fundamentales para administrar correctamente la lógica de negocio en la base de datos.
    | Las siguientes son las operaciones clave del ciclo de vida:

    .row
      .col-12
        .p-5
          .row.align-items-center.bg-08
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/11.png',  style='width: 396px').m-auto
    
            .col-lg-8
              SlyderF(columnas="col-lg-6 col-xl-6")
                //Tarjeta 1
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/12.svg', alt='').img100.m-auto
                  p.mb-0 #[b Creación.] Definición inicial del procedimiento dentro del esquema de la base de datos, donde se establece su nombre, parámetros, lógica interna y propósito funcional.

                //Tarjeta 2     
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/13.svg', alt='').img100.m-auto
                  p.mb-0 #[b Modificación.] Actualización de la lógica interna del procedimiento para corregir errores, optimizar el rendimiento o incorporar nuevas reglas de negocio.

                //Tarjeta 3
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/14.svg', alt='').img100.m-auto
                  p.mb-0 #[b Eliminación.] Borrado definitivo del procedimiento cuando deja de ser necesario, ha quedado obsoleto o es reemplazado por una nueva implementación.

                //Tarjeta 4
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/15.svg', alt='').img100.m-auto
                  p.mb-0 #[b Ejecución.] Invocación del procedimiento desde aplicaciones, servicios o scripts SQL, proporcionando los parámetros requeridos para obtener el resultado esperado.
    
                //Tarjeta 5
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/16.svg', alt='').img100.m-auto
                  p.mb-0 #[b Listado.] Consulta del catálogo del sistema para identificar los procedimientos existentes, verificar su disponibilidad y facilitar tareas de administración.
    
                //Tarjeta 6
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/17.svg', alt='').img100.m-auto
                  p.mb-0 #[b Visualización del código fuente.] Inspección del código SQL que define el procedimiento, útil para análisis, depuración, auditoría o mantenimiento evolutivo.
                
                //Tarjeta 7
                .tarjeta.bg-13.p-4
                  .row.justify-content-center.mb-3
                    .col-5
                      img(src='@/assets/curso/tema5/18.svg', alt='').img100.m-auto
                  p.mb-0 #[b Consulta de parámetros.] Revisión de los parámetros definidos en el procedimiento, incluyendo sus tipos de datos, valores por defecto y direcciones (entrada, salida o entrada-salida).
    
    .titulo-tres.mt-5: h3 Mejores prácticas para el desarrollo de procedimientos almacenados

    p El diseño profesional de procedimientos almacenados no solo busca que funcionen, sino que sean mantenibles, seguros y eficientes a largo plazo. Aplicar buenas prácticas reduce errores y facilita la evolución del sistema.
    | Como prácticas recomendadas se tienen:

    .bg-10.p-5.mt-4
      SlyderB(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Nomenclatura consistente y descriptiva. ',
        texto:
          'Definir un estándar de nombres claro (prefijos, verbos y entidades) permite identificar rápidamente el propósito del procedimiento, facilita la búsqueda en el catálogo y mejora la comprensión del código por parte de otros desarrolladores.',
        imagen: require('@/assets/curso/tema5/19.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Validación temprana de parámetros.',
        texto:
          'Comprobar valores nulos, rangos inválidos o formatos incorrectos al inicio del procedimiento evita ejecuciones innecesarias, reduce el consumo de recursos y permite detectar errores de forma temprana.',
        imagen: require('@/assets/curso/tema5/20.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Uso de transacciones explícitas.',
        texto:
          'En operaciones que afectan múltiples tablas, el manejo explícito de transacciones garantiza la atomicidad y consistencia de los datos, asegurando que los cambios se confirmen o se reviertan de manera controlada ante fallos.',
        imagen: require('@/assets/curso/tema5/21.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Manejo estructurado de errores.',
        texto:
          'Implementar bloques de control de errores permite capturar excepciones, registrar información relevante y devolver mensajes claros al llamador, lo que mejora la confiabilidad y facilita el diagnóstico de problemas.',
        imagen: require('@/assets/curso/tema5/22.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Documentación interna del procedimiento.',
        texto:
          'Incluir comentarios sobre el propósito, los parámetros, las reglas de negocio y los cambios realizados facilita el mantenimiento a largo plazo y permite que cualquier miembro del equipo comprenda y modifique el procedimiento con menor riesgo.',
        imagen: require('@/assets/curso/tema5/23.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
