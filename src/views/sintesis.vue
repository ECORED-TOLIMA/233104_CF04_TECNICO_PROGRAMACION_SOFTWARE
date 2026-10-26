<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El recorrido formativo ha abordado de manera integrada los fundamentos técnicos y de gestión del desarrollo de <em>software</em>, articulando la calidad del código, las pruebas y la prevención de errores con la estructuración, mantenibilidad y aplicación de principios de diseño orientados a la evolución del sistema. De forma complementaria, se analizó el papel de los manuales de usuario y la redacción técnica como elementos clave para la adopción y su uso efectivo, enfatizando la claridad, la secuencialidad y la adecuación al perfil del usuario. Asimismo, se estudió la gestión del proyecto como un ciclo continuo de planificación, ejecución, medición y corrección, incorporando control, seguimiento, gestión de riesgos, comunicación y enfoques metodológicos. Finalmente, se profundizó en la naturaleza de los costos del <em>software</em>, su comportamiento no lineal, los distintos tipos de costos, la estimación y los mecanismos de ajuste ante desviaciones, proporcionando una visión integral que permite comprender el desarrollo de <em>software</em> como un proceso técnico, organizacional y económico orientado a la calidad y la viabilidad de proyectos reales. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza progresivamente los fundamentos del lenguaje SQL y su aplicación en el desarrollo de bases de datos, iniciando con la manipulación básica de datos mediante DML y la estructura del comando SELECT. A continuación, integra el uso de funciones y consultas avanzadas para el análisis y combinación de información, y culmina con los procedimientos almacenados y los escenarios de almacenamiento en la nube, destacando su papel en la reutilización, el rendimiento y la escalabilidad de las soluciones de datos.")
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
