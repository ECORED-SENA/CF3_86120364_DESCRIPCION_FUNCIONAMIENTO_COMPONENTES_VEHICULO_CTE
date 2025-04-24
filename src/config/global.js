export default {
  global: {
    Name: 'Sistema de propulsión en vehículos',
    Description:
      'El componente formativo explica el funcionamiento de los semiejes, juntas homocinéticas y sistemas de propulsión en vehículos. Detalla su instalación, mantenimiento y revisión, incluyendo diferencias entre juntas universales y homocinéticas. Además, describe el uso de tricetas en semiejes y su aplicación en ejes rígidos, resaltando su importancia en la transmisión de torque y el movimiento del automóvil.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Semiejes de propulsión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Con juntas universales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Con juntas homocinéticas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instalación, mantenimiento y revisión de semiejes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Variantes de semiejes y su funcionamiento',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/86120364_CF03_DU.pdf',
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
      tema: 'Semiejes de propulsión',
      referencia:
        'MecaData Academy (2021). SEMIEJES // Funcionamiento del semieje. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=EzmuvCqJKxo&ab_channel=MecaDataAcademy',
    },
    {
      tema: 'Con juntas universales',
      referencia:
        'JAES Company Español. (2021). ¿Cómo funciona la Junta Cardán (Universal)? La diferencia con la Junta Homocinética. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vxPCwIxaLmk',
    },
    {
      tema: 'Con juntas homocinéticas',
      referencia:
        'AUTOTECNICATV. (2016). Cómo funcionan las Juntas Homocinéticas. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ebAHuLfMWnk',
    },
    {
      tema: 'Instalación, mantenimiento y revisión de semiejes',
      referencia:
        'Elecktro fe2. (2022). Fallas de la junta homocinética y tips para revisarla fácil. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=McaOE5JloSY',
    },
  ],
  glosario: [
    {
      termino: 'Caja de transferencia',
      significado:
        'componente que distribuye la potencia del motor a los ejes delantero y trasero en vehículos 4x4.',
    },
    {
      termino: 'Cardán',
      significado:
        'eje de transmisión que transfiere la fuerza del motor a las ruedas a través del diferencial.',
    },
    {
      termino: 'Cruceta',
      significado:
        'articulación en el cardán que permite la transmisión del movimiento entre ejes en distintos ángulos.',
    },
    {
      termino: 'Diferencial',
      significado:
        'mecanismo que permite que las ruedas de un vehículo giren a diferentes velocidades en curvas.',
    },
    {
      termino: 'Eje rígido',
      significado:
        'tipo de suspensión donde ambas ruedas están conectadas a un mismo eje, usado en vehículos pesados.',
    },
    {
      termino: 'Embrague multidisco',
      significado:
        'sistema de fricción compuesto por varios discos que permite la transmisión progresiva de potencia.',
    },
    {
      termino: 'Junta homocinética',
      significado:
        'mecanismo que transmite potencia a las ruedas permitiendo flexibilidad en la dirección y suspensión.',
    },
    {
      termino: 'Semieje',
      significado:
        'eje que transmite el torque desde el diferencial hasta las ruedas motrices.',
    },
    {
      termino: 'Triceta',
      significado:
        'componente con tres rodillos que permite la transmisión del torque en juntas deslizantes.',
    },
    {
      termino: 'Unidad viscosa',
      significado:
        'dispositivo que regula el torque entre ejes o ruedas usando un fluido de alta viscosidad.',
    },
  ],
  referencias: [
    {
      referencia: 'DANA Transejes Colombia. (2002). <em>Homocinéticos.</em>',
      link: '',
    },
    {
      referencia: 'Grupo ROLCAR. (s.f.). <em>Juntas homocinéticas.</em>',
      link: '',
    },
    {
      referencia: 'SKF. (2009). <em>Ejes homocinéticos.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Turismo - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de seña',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de seña',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Mutis',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
