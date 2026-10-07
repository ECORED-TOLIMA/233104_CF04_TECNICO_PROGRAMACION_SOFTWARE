<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo ha recorrido de manera progresiva y sistemática el espectro completo del lenguaje de manipulación de datos en SQL: desde los comandos fundamentales de inserción, modificación y eliminación de registros con sus variantes avanzadas y buenas prácticas de uso, pasando por la sintaxis completa del comando SELECT con todas sus cláusulas y operadores especiales, las funciones de cadena y de agregación para procesamiento analítico directo en el servidor, las subconsultas con todos sus operadores (IN, ANY, ALL, EXISTS) y los cinco tipos de JOIN para combinar tablas relacionadas, los procedimientos almacenados con parámetros, transacciones y manejo de errores como unidades de lógica de negocio en la capa de datos, hasta las soluciones modernas de almacenamiento en la nube con sus siete modelos de bases de datos y los criterios para seleccionar el modelo más apropiado según las características de cada sistema. Al asimilar estos contenidos, se estará en condiciones de diseñar e implementar la capa de acceso a datos de sistemas de software reales, escribir consultas eficientes y correctas para resolver requerimientos de negocio complejos, así como participar con criterio técnico en decisiones arquitectónicas sobre la selección del modelo de base de datos más apropiado para cada contexto organizacional.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.jpg", alt="En la síntesis se presenta un mapa conceptual que organiza progresivamente los fundamentos del lenguaje SQL y su aplicación en el desarrollo de bases de datos, iniciando con la manipulación básica de datos mediante DML y la estructura del comando SELECT. A continuación, integra el uso de funciones y consultas avanzadas para el análisis y combinación de información, y culmina con los procedimientos almacenados y los escenarios de almacenamiento en la nube, destacando su papel en la reutilización, el rendimiento y la escalabilidad de las soluciones de datos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
