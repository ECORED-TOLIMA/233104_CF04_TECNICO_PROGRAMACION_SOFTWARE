<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Las bases de datos relacionales constituyen el pilar tecnológico sobre el cual se sustenta la gran mayoría de los sistemas de información empresariales, gubernamentales y académicos del mundo contemporáneo. Detrás de cada transacción bancaria, cada compra en línea, cada consulta médica registrada en un sistema hospitalario y cada reporte gerencial generado en tiempo real, existe una base de datos relacional que almacena, organiza y entrega los datos con precisión y eficiencia. El lenguaje que hace posible toda esta operación es SQL —Structured Query Language—, el estándar universal para la manipulación y consulta de datos en sistemas relacionales, definido por la norma ISO/IEC 9075 y adoptado por todos los principales sistemas manejadores de bases de datos del mercado.


    //Tarjetas conectadas
    .tarjeta--container.row
      //Tarjeta izquierda
      .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/intro/1.svg', style='width: 150px').m-auto 

        p SQL no es simplemente un lenguaje técnico para programadores:

        p.p-3.bg-13 Es el vocabulario común que permite a analistas, desarrolladores, administradores de bases de datos y profesionales de negocio comunicarse con las estructuras de datos de las organizaciones. 

      //Tarjeta derecha
      .col-md.tarjeta.bg-16.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/intro/2.svg', style='width: 150px').m-auto 

        p A diferencia de los lenguajes de programación de propósito general como Java o Python, SQL está diseñado específicamente para expresar operaciones sobre datos de manera declarativa: 
        p.p-3.bg-13 El programador describe qué resultado desea obtener, y el motor de base de datos decide cómo obtenerlo de la manera más eficiente posible, basándose en estadísticas y planes de ejecución optimizados. 


    .row.justify-content-center.mt-4
      .col-auto
        p.bg-5.bg-r9.text-center.p-3 Esta separación entre el qué y el cómo es uno de los principios más poderosos del modelo relacional.

    p Dominar SQL es, en el contexto profesional actual, una competencia tan fundamental como saber leer y escribir en el mundo del trabajo con datos. Según el índice TIOBE de popularidad de lenguajes de programación y las encuestas anuales de Stack Overflow, SQL se mantiene consistentemente entre los cinco lenguajes más utilizados por los profesionales de tecnología, por encima de muchos lenguajes de programación modernos. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo aborda el lenguaje SQL desde su dimensión más operativa y práctica: el lenguaje de manipulación de datos (DML), que comprende todas las operaciones para insertar, modificar, eliminar y consultar datos en una base de datos. A lo largo de seis temas estructurados de manera progresiva, se transitará desde los comandos fundamentales de inserción, modificación y eliminación, pasando por la sintaxis completa del comando SELECT con todas sus cláusulas, las funciones de cadena y agregación, las subconsultas, los diferentes tipos de JOIN para combinar tablas, los procedimientos almacenados, hasta las soluciones modernas de almacenamiento en la nube con sus múltiples paradigmas de bases de datos.

    .row.justify-content-center
      .col-12
        p.mt-4 Cada tema incluye ejemplos de código SQL reales, comentados y progresivos en complejidad, tablas de referencia rápida con la sintaxis de los comandos más utilizados, así como comparativas que facilitan la comprensión de las diferencias entre las distintas opciones disponibles. El aprendizaje de SQL es eminentemente práctico: los conceptos solo se consolidan completamente cuando se escriben y ejecutan sentencias reales contra bases de datos reales, verificando en tiempo real el comportamiento de cada sentencia. 

</template>

<script>
export default {
  name: 'Introduccion',
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
