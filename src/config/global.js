export default {
  global: {
    Name: 'Manipulación y consulta de datos con SQL',
    Description:
      'Este componente formativo desarrolla competencias en lenguaje de manipulación de datos (DML) para bases de datos relacionales. Aborda inserción, consulta, modificación y eliminación de datos, además de JOIN, subconsultas, funciones, procedimientos almacenados y almacenamiento en la nube. Su enfoque fortalece la capacidad para desarrollar soluciones eficientes y correctas de acceso a datos en entornos profesionales reales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del lenguaje de manipulación de datos (DML)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Comandos de inserción, modificación y eliminación de registros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Búsqueda y recuperación de datos con el comando SELECT',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sintaxis y cláusulas del Comando SELECT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cláusulas de selección y filtrado de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Agrupación, ordenamiento y condiciones sobre grupos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Funciones para la manipulación y análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Funciones de cadena',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Funciones de agregación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Consultas avanzadas en SQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Subconsultas y tipos de subconsultas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Consultas Combinadas y tipos de JOIN',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procedimientos almacenados en bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Creación y definición de procedimientos almacenados',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Parámetros y ejecución de procedimientos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Escenarios de almacenamiento y bases de datos en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Soluciones de almacenamiento en la nube y APIs multimodelo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de bases de datos en entornos cloud',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA4_228145_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Agregación</strong>',
      significado:
        'operación SQL que calcula un único valor resumen (suma, promedio, conteo, máximo, mínimo) sobre un conjunto de filas mediante las funciones COUNT, SUM, AVG, MAX y MIN, usualmente en combinación con la cláusula GROUP BY para obtener resultados por grupos de datos.',
    },
    {
      termino: '<strong>ACID</strong>',
      significado:
        'acrónimo de Atomicity, Consistency, Isolation, Durability. Conjunto de propiedades que garantizan que las transacciones de base de datos se procesan de manera confiable: o todas las operaciones de la transacción se completan (<em>commit</em>) o ninguna se aplica (<em>rollback</em>).',
    },
    {
      termino: '<strong>Clave foránea (FK)</strong>',
      significado:
        'columna o conjunto de columnas en una tabla que hace referencia a la clave primaria de otra tabla, estableciendo una relación de integridad referencial. Garantiza que no se puedan insertar registros que hagan referencia a valores inexistentes en la tabla referenciada.',
    },
    {
      termino: '<strong>Clave primaria (PK)</strong>',
      significado:
        'columna o combinación de columnas que identifica de manera única cada fila de una tabla. No puede contener valores NULL ni duplicados y es la base sobre la cual se construyen las referencias de integridad referencial del esquema relacional.',
    },
    {
      termino: '<strong>DBaaS</strong>',
      significado:
        'Database as a Service. Modelo de servicio de computación en la nube donde el proveedor gestiona la infraestructura subyacente de la base de datos (hardware, sistema operativo, motor de BD, parches, respaldos) y el cliente solo administra los datos y las aplicaciones.',
    },
    {
      termino: '<strong>DML</strong>',
      significado:
        'Data Manipulation Language. Subconjunto del lenguaje SQL que incluye los comandos para manipular los datos almacenados en la base de datos: SELECT para consultar, INSERT para insertar, UPDATE para modificar y DELETE para eliminar registros.',
    },
    {
      termino: '<strong>EXISTS</strong>',
      significado:
        'operador SQL para subconsultas que devuelve TRUE si la subconsulta produce al menos una fila, sin importar los valores específicos. Más eficiente que IN para grandes conjuntos porque detiene la búsqueda en el primer match encontrado.',
    },
    {
      termino: '<strong>GROUP BY</strong>',
      significado:
        'cláusula del SELECT que agrupa las filas del resultado con valores iguales en las columnas especificadas, permitiendo aplicar funciones de agregación para obtener un único valor resumen por grupo en lugar de un valor por cada fila individual.',
    },
    {
      termino: '<strong>HAVING</strong>',
      significado:
        'cláusula del SELECT que filtra los grupos generados por GROUP BY basándose en condiciones que involucran funciones de agregación. Actúa después del agrupamiento, a diferencia de WHERE que actúa antes sobre filas individuales.',
    },
    {
      termino: '<strong>JOIN</strong>',
      significado:
        'operación SQL que combina filas de dos o más tablas basándose en una condición de enlace (generalmente igualdad entre clave foránea y clave primaria). Los tipos son: INNER, LEFT OUTER, RIGHT OUTER, FULL OUTER y CROSS JOIN.',
    },
    {
      termino: '<strong>NoSQL</strong>',
      significado:
        'Not Only SQL. Término que agrupa los sistemas de gestión de bases de datos que no usan el modelo relacional ni el lenguaje SQL como principal mecanismo de consulta. Incluye modelos documentales, clave-valor, de grafo, de columnas anchas y de serie temporal.',
    },
    {
      termino: '<strong>NULL</strong>',
      significado:
        'valor especial en SQL que representa la ausencia de datos o un valor desconocido. No es igual a cero ni a una cadena vacía; su evaluación requiere los operadores IS NULL e IS NOT NULL ya que NULL comparado con cualquier valor (incluyendo NULL) devuelve NULL.',
    },
    {
      termino: '<strong>Procedimiento almacenado</strong>',
      significado:
        'conjunto de sentencias SQL precompiladas y almacenadas en el servidor de base de datos, ejecutables mediante una llamada con nombre y parámetros. Mejoran el rendimiento (plan precompilado), la seguridad (encapsulamiento) y el mantenimiento del código de acceso a datos.',
    },
    {
      termino: '<strong>Subconsulta</strong>',
      significado:
        'sentencia SELECT anidada dentro de otra sentencia SQL (SELECT, INSERT, UPDATE o DELETE). Se clasifica según su posición (en WHERE, FROM o SELECT), el número de filas que devuelve (escalar, de fila o de tabla) y su dependencia de la consulta exterior (correlacionada o no correlacionada).',
    },
    {
      termino: '<strong>Transacción</strong>',
      significado:
        'unidad lógica de trabajo en la base de datos compuesta por una o más operaciones SQL que se ejecutan de manera atómica: o todas tienen éxito y se confirman (COMMIT) o todas se revierten (ROLLBACK), garantizando la integridad de los datos ante fallos del sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coronel, C. & Morris, S. (2018). <em>Sistemas de bases de datos: Diseño, implementación y administración</em> (11.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Date, C. J. (2019). <em>Database design and relational theory: Normal forms and all that jazz</em> (2nd ed.). Apress.',
      link: '',
    },
    {
      referencia:
        'Elmasri, R. & Navathe, S. (2016). <em>Fundamentos de sistemas de bases de datos</em> (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Forta, B. (2020). <em>SQL in 10 minutes a day, Sams teach yourself</em> (5th ed.). Sams Publishing.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2024). <em>Transact-SQL reference (Database Engine).</em> Microsoft Learn. Microsoft Learn – T-SQL Reference.',
      link: '',
    },
    {
      referencia:
        'MySQL. (2024). <em>MySQL 8.0 reference manual</em>. Oracle Corporation. MySQL 8.0 Reference Manual',
      link: '',
    },
    {
      referencia:
        'PostgreSQL Global Development Group. (2024<em>). PostgreSQL 16 documentation</em>. PostgreSQL 16 Documentation',
      link: '',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F. & Sudarshan, S. (2020). <em>Database system concepts</em> (7th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F. & Sudarshan, S. (2020). <em>Database system concepts</em> (7th ed.). McGraw-Hill Education.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
