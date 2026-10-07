<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Manipulación y consulta de datos con SQL',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la capacidad para manipular y consultar datos mediante SQL, estableciendo una base técnica sólida para la comprensión y aplicación del Lenguaje de Manipulación de Datos (DML) en sistemas gestores de bases de datos relacionales, a partir del uso adecuado de comandos, funciones y estructuras de consulta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes comandos SQL pertenece exclusivamente al sublenguaje DML?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CREATE TABLE',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'GRANT',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SELECT',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'COMMIT',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Al ejecutar un UPDATE sin cláusula WHERE sobre una tabla con 10.000 registros, ¿qué ocurre?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El SMBD lanza un error de sintaxis y no ejecuta nada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo actualiza el primer registro de la tabla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualiza todos los 10.000 registros de la tabla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Actualiza solo los registros con valores nulos en el campo modificado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el orden de procesamiento lógico interno correcto del comando SELECT?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'WHERE → FROM → SELECT → GROUP BY → HAVING → ORDER BY',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'FROM → SELECT → WHERE → HAVING → GROUP BY → ORDER BY',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes sentencias es incorrecta en SQL estándar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'SELECT ciudad, COUNT() FROM clientes GROUP BY ciudad HAVING COUNT() > 5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SELECT DISTINCT ciudad FROM clientes ORDER BY ciudad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'SELECT ciudad, COUNT() FROM clientes WHERE COUNT() > 5 GROUP BY ciudad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'SELECT nombre, total_compras FROM clientes WHERE total_compras BETWEEN 100000 AND 500000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: "La función SUBSTRING('CF04-SQL-2024', 6, 3) devuelve:",
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: "'CF0'",
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: "'202'",
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: "'SQL'",
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: "'-20'",
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la diferencia fundamental entre COUNT() y COUNT(columna)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'COUNT() es más lento porque cuenta todas las columnas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'COUNT(columna) incluye los valores NULL; COUNT() los excluye.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'COUNT() cuenta todas las filas incluyendo NULLs; COUNT(columna) excluye filas donde esa columna es NULL..',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No hay diferencia, ambos producen siempre el mismo resultado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Al usar NOT IN con una subconsulta, ¿qué problema crítico puede ocurrir si la subconsulta devuelve algún valor NULL?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El SMBD lanza un error de tipo y aborta la consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La consulta devuelve todos los registros de la tabla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La consulta devuelve un conjunto vacío porque NULL NOT IN (conjunto con NULL) evalúa a NULL, no a TRUE.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El valor NULL se ignora automáticamente y la consulta funciona correctamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el resultado de un LEFT JOIN entre las tablas Clientes y Pedidos cuando un cliente no tiene pedidos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ese cliente no aparece en el resultado (se comporta igual que INNER JOIN).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aparece el cliente con los campos de Pedidos en NULL.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Aparece una fila por cada pedido de otros clientes relacionados con ese cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El SMBD genera un error de integridad referencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la diferencia entre el operador EXISTS y el operador IN en subconsultas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'EXISTS solo funciona con subconsultas correlacionadas; IN solo con no correlacionadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'EXISTS verifica si la subconsulta devuelve al menos una fila y se detiene al primer match; IN genera todo el conjunto y luego compara.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'IN es siempre más eficiente que EXISTS para cualquier tamaño de tabla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'EXISTS devuelve los valores de la subconsulta; IN solo devuelve TRUE o FALSE.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué ventaja principal ofrece un procedimiento almacenado frente al SQL dinámico enviado desde la aplicación?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los procedimientos almacenados siempre se ejecutan más rápido sin importar la complejidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El plan de ejecución se compila una sola vez y se reutiliza; viaja menos datos por la red.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Los procedimientos almacenados no requieren parámetros y son más simples de mantener.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permiten usar comandos DDL que el SQL dinámico no puede ejecutar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Para qué sirve la instrucción SET NOCOUNT ON dentro de un procedimiento almacenado?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desactiva el contador de registros de la tabla para acelerar las inserciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                "Suprime el mensaje informativo '(N rows affected)' que podría confundir a las aplicaciones cliente.",
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Impide que el procedimiento devuelva conjuntos de resultados al llamador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establece el número máximo de registros que puede procesar el procedimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál modelo de base de datos es más apropiado para almacenar datos de sensores IoT que generan millones de lecturas de temperatura por día?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relacional (SQL Server / MySQL).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Grafo (Neo4j).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clave-Valor (Redis).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Serie temporal (InfluxDB / Amazon Timestream).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué operador SQL devuelve TRUE solo si el valor es mayor que TODOS los valores devueltos por la subconsulta?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ANY',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SOME',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ALL',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'EXISTS',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es la diferencia entre DELETE y TRUNCATE TABLE?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'DELETE elimina la estructura de la tabla; TRUNCATE solo los datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'TRUNCATE acepta cláusula WHERE para eliminar selectivamente; DELETE no.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'DELETE registra cada fila eliminada en el log de transacciones y activa triggers; TRUNCATE libera páginas completas sin activar triggers.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No hay diferencia funcional, solo difieren en el rendimiento con tablas pequeñas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En el contexto de las bases de datos en la nube, ¿qué significa el concepto "persistencia políglota"?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una base de datos que puede almacenar texto en múltiples idiomas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema donde múltiples aplicaciones usan la misma base de datos relacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una arquitectura donde diferentes partes del sistema usan diferentes tipos de bases de datos según sus necesidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La capacidad de un SMBD de soportar múltiples versiones de SQL simultáneamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre las cláusulas WHERE y HAVING es correcta?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'WHERE y HAVING son completamente intercambiables y producen el mismo resultado en cualquier consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'WHERE filtra grupos después de la agregación, y HAVING filtra filas antes de la agregación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'WHERE filtra filas individuales antes del agrupamiento y no acepta funciones de agregación; HAVING filtra grupos después del agrupamiento y sí acepta funciones de agregación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'HAVING puede reemplazar siempre a WHERE, pero WHERE nunca puede reemplazar a HAVING.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cómo funciona exactamente el operador DISTINCT en la consulta SELECT DISTINCT ciudad, departamento FROM clientes?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elimina las filas donde la columna ciudad está duplicada, sin importar el valor de departamento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elimina las filas donde la columna departamento está duplicada, sin importar el valor de ciudad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elimina las filas donde la combinación de ciudad y departamento es duplicada. Si dos filas tienen la misma ciudad, pero diferente departamento, ambas se muestran.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elimina todos los registros que tengan algún valor nulo en ciudad o departamento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'En un procedimiento almacenado con bloque TRY...CATCH, si ocurre un error dentro del bloque TRY y se ejecuta ROLLBACK TRANSACTION en el bloque CATCH, ¿qué efecto tiene sobre las modificaciones de datos realizadas en el TRY?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo se revierten las últimas dos operaciones DML, el resto queda confirmado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ninguna, porque los cambios ya quedaron registrados antes del error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se revierten todas las modificaciones realizadas desde el BEGIN TRANSACTION, dejando la base de datos en el estado anterior al bloque TRY.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Depende del tipo de error: solo si es error de sintaxis se revierte todo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes afirmaciones es correcta sobre las bases de datos clave-valor (ej. Redis) frente a las documentales (ej. MongoDB) y relacionales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las bases de datos clave-valor ofrecen mayor capacidad de consulta relacional que las documentales, por lo que son más adecuadas para relaciones complejas entre entidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las bases de datos documentales son más adecuadas para sistemas con relaciones complejas entre entidades que las clave-valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las bases de datos clave-valor y las documentales son equivalentes en capacidad de consulta relacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las bases de datos relacionales son menos adecuadas que las clave-valor para sistemas con relaciones complejas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cómo maneja la función AVG() los valores NULL en SQL?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'AVG() incluye los valores NULL en el denominador del cálculo del promedio, produciendo el mismo resultado que SUM(columna) / COUNT(*).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'AVG() ignora los valores NULL tanto en el numerador como en el denominador, por lo que divide solo entre el número de valores no nulos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'AVG() convierte automáticamente los NULL en 0 antes de promediar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'AVG() genera un error si encuentra algún valor NULL en la columna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
