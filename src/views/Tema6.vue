<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Escenarios de almacenamiento y bases de datos en la nube
    
    p La computación en la nube ha transformado radicalmente la manera en que las organizaciones diseñan, despliegan, escalan y mantienen sus soluciones de almacenamiento de datos. Lo que hace apenas una década requería costosas inversiones en servidores físicos, licencias de software, personal especializado en administración de infraestructura y largas esperas para el aprovisionamiento de nuevos recursos, hoy puede realizarse en cuestión de minutos con unos pocos clics en una consola web, con un modelo de pago por uso que elimina las inversiones de capital iniciales y permite ajustar los recursos en tiempo real según la demanda.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Pero la nube no solo ha democratizado el acceso a la infraestructura de bases de datos, ha catalizado también una verdadera revolución en los paradigmas de almacenamiento de datos. El modelo relacional, dominante y prácticamente sin alternativas durante más de tres décadas, convive hoy con una amplia variedad de modelos de datos alternativos —conocidos colectivamente como bases de datos NoSQL (Not Only SQL) o bases de datos multimodelo— que están optimizados para casos de uso específicos donde las bases de datos relacionales presentan limitaciones inherentes de rendimiento, escalabilidad o flexibilidad. Esta diversificación del ecosistema de bases de datos es uno de los desarrollos más importantes de la última década en el campo de la ingeniería de datos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            p Comprender este ecosistema diverso de opciones de almacenamiento, ya no es un lujo sino una necesidad. Los sistemas modernos frecuentemente combinan múltiples tipos de bases de datos en una sola arquitectura: una base de datos relacional para las transacciones del negocio, una base de datos de documentos para el catálogo de productos, una base de datos clave-valor para el caché de sesiones y una base de datos de serie temporal para las métricas de monitoreo del sistema. Saber cuándo usar cada tipo y cómo integrar estas tecnologías es una competencia arquitectónica de alto valor en el mercado laboral actual.
  
    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Soluciones de almacenamiento en la nube y APIs multimodelo
    
    p Las tres principales plataformas de computación en la nube —Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP)— ofrecen hoy catálogos extensos de servicios de bases de datos gestionadas (Database as a Service, DBaaS), donde el proveedor se encarga de la infraestructura subyacente: instalación, configuración, parches de seguridad, respaldos automáticos, replicación para alta disponibilidad, monitoreo de rendimiento y escalado. El cliente solo se preocupa por diseñar el esquema de datos, escribir las consultas y gestionar los permisos de acceso.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.align-items-center.justify-content-center
              .col-lg-12
                .row.justify-content-center
                  .col-lg-12(data-aos="fade-down")
                    .row.d-flex.align-items-center.bg-r8(data-aos="fade-right")
                      .col-lg.p-4
                        .cajon.color1.p-4
                          p Los servicios DBaaS eliminan algunas de las tareas más tediosas y especializadas de la administración de bases de datos tradicional, permitiendo que los equipos de desarrollo se concentren en el valor de negocio en lugar de en la gestión de la infraestructura. Sin embargo, también presentan ciertos trade-offs: menor control sobre la configuración detallada del motor, dependencia del proveedor de nube (vendor lock-in), y costos que pueden escalar rápidamente si no se dimensiona correctamente la capacidad contratada.
                      
                      .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                        figure.m-0.p-0.w-100.h-100.d-flex
                          img(src='@/assets/curso/tema6/2.png', alt='', class="w-100 h-100 object-fit-cover")
                
                      p.mt-2 Las APIs multimodelo representan un paso adicional en la evolución de los servicios de bases de datos en la nube: son sistemas capaces de soportar múltiples modelos de datos (relacional, documental, clave-valor, grafo) sobre un único motor de almacenamiento subyacente, exponiendo APIs diferentes para cada paradigma. Azure Cosmos DB es el ejemplo más conocido, ofreciendo cinco APIs compatibles: SQL (para consultas tipo JSON), MongoDB, Cassandra, Gremlin (grafos) y Table (clave-valor). Amazon Aurora ofrece compatibilidad con MySQL y PostgreSQL en el mismo servicio. Esta convergencia simplifica significativamente la arquitectura de datos de las organizaciones.


    .row.justify-content-center.mt-4
      .col-lg-10 
        .etiqueta-barra
          p.mb-0 Ejemplo:
        .tarjeta.bg-code7.mb-1
          pre.language-sql.w-100.mb-0
            code.text-white
              |-- API SQL de Cosmos DB (documentos JSON con sintaxis similar a SQL)
              |SELECT c.nombre, c.ciudad, c.totalCompras
              |FROM   clientes c
              |WHERE  c.ciudad = 'Bogotá'
              |AND    c.totalCompras > 1000000
              |ORDER BY c.totalCompras DESC
              |OFFSET 0 LIMIT 10
              | 
              |-- API MongoDB (base de datos documental)
              |db.clientes.find(
              |    { ciudad: 'Bogotá', totalCompras: { $gt: 1000000 } },
              |    { nombre: 1, email: 1, totalCompras: 1 }
              |).sort({ totalCompras: -1 }).limit(10);
              |
              |-- API Redis (clave-valor — caché de sesión de usuario)
              |SET    session:user:12345 '{"nombre":"Ana","rol":"admin"}' EX 3600
              |GET    session:user:12345
              |EXISTS session:user:12345
              |DEL    session:user:12345
              |
              |-- Cypher (Neo4j/Cosmos DB Gremlin — base de datos de grafos)
              |MATCH (c:Cliente {nombre:'Ana'})-[:COMPRO]->(p:Producto)<-[:COMPRO]-(otro:Cliente)
              |WHERE otro <> c
              |RETURN otro.nombre, COUNT(p) AS productos_en_comun
              |ORDER BY productos_en_comun DESC LIMIT 5;

    .row.justify-content-center
      .col-10
        p.bg-5.bg-r9.text-center.p-3 Con base en lo anterior, la siguiente imagen presenta el ecosistema de bases de datos en la nube según el modelo de datos y el proveedor:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 9.
          span Ecosistema de bases de datos en la nube por modelo de datos y proveedor cloud
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema6/3.png',
            alt='Figura 9 que presenta una tabla comparativa del ecosistema de servicios de bases de datos en la nube de AWS, Azure y Google Cloud, organizada por modelos de datos como relacional, documental, clave-valor, grafos, series temporales, en memoria, libro mayor y multimodelo. Para cada modelo se listan los servicios más representativos de cada proveedor.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema6/4.png',
            alt=''
          )

    separador
    #t_6_2.titulo-segundo.color-acento-contenido.mb-0
      h2 6.2 Tipos de bases de datos en entornos #[i cloud]

    .row.bg-07.p-md-5.mt-0
      .row.align-items-center.justify-content-center.p-3
        p Los entornos #[i cloud] han ampliado significativamente el abanico de tecnologías de bases de datos disponibles para las organizaciones. Más allá del modelo relacional tradicional, hoy es posible elegir entre múltiples tipos de bases de datos optimizadas para diferentes patrones de acceso, volúmenes de información y requisitos de escalabilidad, rendimiento y consistencia, todo bajo el modelo de servicios gestionados.

        .col-lg-12
          .row.align-items-center.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center(data-aos="fade-right")
                .col-lg
                  .cajon.color1.p-4
                    p En este contexto, los principales proveedores de nube ofrecen catálogos especializados que permiten seleccionar el modelo de datos más adecuado para cada caso de uso, reduciendo la complejidad operativa y facilitando arquitecturas híbridas y multimodelo.

                  p.mt-4 A continuación. se presentan los principales tipos de bases de datos disponibles en entornos cloud, describiendo sus características, ventajas y casos de uso más representativos:

                .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema6/5.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-5px")

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-12
                .row.justify-content-center 
                  AcordionA(tipo="b" clase-tarjeta="tarjeta bg-10").color-primario
                    //-1ra pestaña
                    .row(titulo="Bases de datos relacionales en la nube (DBaaS)")
                      .row.align-items-center.justify-content-center
                        .col-lg-12
                          .row.justify-content-center
                            .col-lg-12(data-aos="fade-down")
                              .row.d-flex.align-items-center(data-aos="fade-right")
                                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                                  figure.m-0.p-0.w-100.h-100.d-flex
                                    img(src='@/assets/curso/tema6/6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                                .col-lg
                                  p Las bases de datos relacionales como servicio (DBaaS) trasladan el modelo relacional clásico al entorno cloud manteniendo sus propiedades fundamentales, como transacciones ACID, SQL estándar, integridad referencial y soporte para procedimientos almacenados. Su principal ventaja es la automatización de la infraestructura: respaldos automáticos, parches de seguridad, monitoreo, replicación para alta disponibilidad y mecanismos de conmutación por falla forman parte integral del servicio.
                                  p.p-3.bg-13 Además, estos servicios permiten escalar recursos de forma flexible, ya sea aumentando la capacidad de la instancia o incorporando réplicas de lectura. Algunas soluciones avanzadas ofrecen incluso escalabilidad horizontal global con consistencia fuerte, lo que las hace adecuadas para aplicaciones críticas distribuidas a gran escala.
                    
                    //-2da pestaña  
                    .row(titulo="Bases de datos documentales")
                      .row.align-items-center.justify-content-center
                        .col-lg-12
                          .row.justify-content-center
                            .col-lg-12(data-aos="fade-down")
                              .row.d-flex.align-items-center(data-aos="fade-right")
                                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                                  figure.m-0.p-0.w-100.h-100.d-flex
                                    img(src='@/assets/curso/tema6/7.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                                .col-lg
                                  p Las bases de datos documentales almacenan la información en documentos JSON o BSON, sin requerir un esquema rígido, lo que permite manejar estructuras de datos flexibles y en constante evolución. Este enfoque resulta especialmente útil cuando los datos son jerárquicos o presentan variaciones frecuentes entre registros, reduciendo la necesidad de migraciones de esquema complejas.

                                  p.p-3.bg-13 Al agrupar datos relacionados dentro de un mismo documento, se simplifican ciertos patrones de consulta y se evitan operaciones costosas de unión entre tablas. Estas bases de datos ofrecen lenguajes de consulta expresivos, soporte para índices secundarios, búsquedas de texto completo y operaciones geoespaciales, siendo ampliamente utilizadas en aplicaciones web y móviles modernas.

                    //-3ra pestaña
                    .row(titulo="Bases de datos clave-valor")
                      .row.align-items-center.justify-content-center
                        .col-lg-12
                          .row.justify-content-center
                            .col-lg-12(data-aos="fade-down")
                              .row.d-flex.align-items-center(data-aos="fade-right")
                                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                                  figure.m-0.p-0.w-100.h-100.d-flex
                                    img(src='@/assets/curso/tema6/8.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                                .col-lg
                                  p Las bases de datos clave-valor representan el modelo NoSQL más simple: cada valor se asocia a una clave única, permitiendo accesos extremadamente rápidos. Esta simplicidad las hace ideales para escenarios donde se prioriza el rendimiento de lectura y escritura por encima de la complejidad de las consultas, con latencias en el orden de microsegundos o milisegundos.

                                  p.p-3.bg-13 Son fundamentales en arquitecturas modernas para implementar cachés distribuidos, manejo de sesiones, contadores, configuraciones y otros casos donde el acceso directo por identificador es predominante. Algunas soluciones amplían este modelo básico incorporando estructuras de datos avanzadas e índices secundarios para soportar casos de uso más complejos.
                                  
                    //-4ra pestaña
                    .row(titulo="Bases de datos de grafos")
                      .row.align-items-center.justify-content-center
                        .col-lg-12
                          .row.justify-content-center
                            .col-lg-12(data-aos="fade-down")
                              .row.d-flex.align-items-center(data-aos="fade-right")
                                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                                  figure.m-0.p-0.w-100.h-100.d-flex
                                    img(src='@/assets/curso/tema6/9.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                                .col-lg
                                  p Las bases de datos de grafos modelan la información como nodos y relaciones, permitiendo representar de forma natural dominios donde las conexiones entre entidades son clave. A diferencia del modelo relacional, las relaciones son elementos centrales del modelo y se recorren de manera eficiente, incluso cuando el grafo crece en tamaño y complejidad.

                                  p.p-3.bg-13 Este enfoque resulta especialmente adecuado para redes sociales, sistemas de recomendación, detección de fraude y análisis de dependencias, donde es necesario explorar relaciones profundas entre entidades. El uso de lenguajes de consulta especializados permite navegar el grafo de forma expresiva y con un costo computacional estable.

                    //-5ta pestaña
                    .row(titulo="Bases de datos de serie temporal, en memoria y libro mayor")
                      .row.align-items-center.justify-content-center
                        .col-lg-12
                          .row.justify-content-center
                            .col-lg-12(data-aos="fade-down")
                              .row.d-flex.align-items-center(data-aos="fade-right")
                                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                                  figure.m-0.p-0.w-100.h-100.d-flex
                                    img(src='@/assets/curso/tema6/6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                                .col-lg
                                  p Las bases de datos de serie temporal están optimizadas para manejar datos indexados por tiempo, aplicando técnicas especializadas de compresión y consulta para responder eficientemente a rangos temporales, agregaciones y ventanas deslizantes. Son ampliamente utilizadas en monitoreo, IoT, análisis financiero y telemetría.

                                  p.p-3.bg-13 Por su parte, las bases de datos en memoria priorizan el rendimiento al almacenar los datos directamente en RAM, siendo clave en sistemas de caché y aplicaciones de alta concurrencia. Finalmente, las bases de datos de libro mayor introducen mecanismos de inmutabilidad e integridad criptográfica, garantizando un historial verificable de cambios, lo que las hace especialmente valiosas en contextos financieros y regulados.


    .row.justify-content-center.mt-3
      .col-10
        p Para finalizar, se presenta la siguiente tabla, cuyo objetivo es integrar de forma sintética los modelos de bases de datos utilizados en entornos cloud, destacando sus fortalezas principales, las limitaciones más relevantes y los escenarios de uso para los que resultan más adecuados. Esta visión comparativa permite identificar rápidamente el modelo que mejor se ajusta a las necesidades técnicas y de negocio de un sistema de información.
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Tabla 9
          span Síntesis de modelos de bases de datos en la nube y criterios de uso

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FFEBBE")
              tr
                th Modelo de base de datos
                th Fortaleza principal
                th Limitación clave
                th Caso de uso recomendado
            tbody
              tr(style="background-color: #F3F9FF")
                td Relacional.
                td Transacciones ACID completas y SQL estándar.
                td Escalado horizontal complejo.
                td.text-start Sistemas transaccionales críticos (ERP, finanzas, contabilidad).
              tr
                td Documental.
                td Esquema flexible y datos jerárquicos.
                td JOINs y consultas relacionales limitadas.
                td.text-start Aplicaciones #[i web]/móviles, catálogos, perfiles de usuario.
              tr(style="background-color: #F3F9FF")
                td Clave-Valor.
                td Latencia ultra-baja y acceso O(1).
                td Sin consultas complejas ni relaciones.
                td.text-start Caché, sesiones, contadores, configuraciones.
              tr
                td Grafo.
                td Navegación eficiente de relaciones profundas.
                td Ineficiente para consultas no relacionales.
                td.text-start Recomendaciones, fraude, redes sociales.
              tr(style="background-color: #F3F9FF")
                td Serie temporal.
                td Optimizada para datos con timestamp.
                td Poco flexible para otros tipos de datos.
                td.text-start IoT, monitoreo, métricas y telemetría.
              tr
                td En memoria.
                td Rendimiento extremo (<1 ms).
                td Alto costo por GB y dependencia de RAM.
                td.text-start Caché distribuido y datos de alta concurrencia.
              tr(style="background-color: #F3F9FF")
                td Libro mayor.
                td Inmutabilidad y auditoría verificable.
                td Modelo #[i append-only], menor flexibilidad.
                td.text-start Auditoría regulatoria, finanzas, trazabilidad.


</template>

<script>
export default {
  name: 'Tema6',
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
