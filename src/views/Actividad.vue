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
      tema:
        'Semiejes, juntas homocinéticas y sistemas de propulsión en vehículos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar sobre los semiejes, juntas homocinéticas, tricetas y su función en la transmisión de torque en vehículos, así como su instalación, mantenimiento y posibles fallas asociadas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de los semiejes en un vehículo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los semiejes conectan el diferencial con la caja de cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los semiejes permiten el giro de las ruedas sin transmitir torque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los semiejes transmiten el torque del diferencial a las ruedas motrices.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los semiejes reducen la fricción entre las ruedas y la suspensión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes componentes se encuentra en una junta homocinética?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rodamientos de rodillos cónicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sector estriado interno y externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Manzana externa, manzana interna y canastilla con bolas de acero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sistema de pasadores y chavetas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica distingue a las juntas homocinéticas de las juntas universales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las juntas homocinéticas requieren mayor lubricación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las juntas homocinéticas generan variaciones de velocidad al transmitir el torque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las juntas homocinéticas se utilizan exclusivamente en vehículos pesados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las juntas homocinéticas permiten transmitir el torque sin variaciones de velocidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la principal función del guardapolvo en un sistema homocinético?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar la entrada de agua y suciedad en la junta homocinética.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la fricción para mejorar la estabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar el desplazamiento de los rodillos en la triceta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la temperatura del semieje al girar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿En qué tipo de vehículos es más común encontrar juntas universales en el sistema de propulsión?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vehículos de pasajeros urbanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vehículos con tracción en las cuatro ruedas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Motocicletas y ciclomotores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vehículos eléctricos de última generación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué problema puede generar una mala alineación de las ruedas en relación con los semiejes?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desgaste prematuro de los semiejes y posible desajuste en el diferencial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mayor eficiencia en la transmisión del torque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción en el consumo de combustible del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento en la velocidad de giro de los semiejes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la principal ventaja de las tricetas sobre las juntas homocinéticas en semiejes internos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten cambios en la dirección de las ruedas motrices.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generan menor fricción y requieren menos lubricación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son más simples y permiten un centrado preciso del eje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducen la necesidad de engrase en los rodamientos de las ruedas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el tipo de rodamiento más utilizado en la instalación de semiejes en ruedas delanteras?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rodamientos de rodillos cónicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rodamientos de una sola pista de bolas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rodamientos de doble pista de bolas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rodamientos de aguja con pasadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué puede ocurrir si se elevan demasiado los vehículos con semiejes homocinéticos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El torque del diferencial aumenta, mejorando la tracción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los semiejes se ajustan automáticamente a la nueva altura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los semiejes pueden salirse de su alojamiento o desgastarse prematuramente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La suspensión del vehículo deja de ser necesaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cómo se desmonta una triceta en caso de mantenimiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aplicando presión con un martillo de goma para soltar el rodamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Retirando el seguro que sujeta el eje estriado dentro de la triceta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cortando el guardapolvo y liberando el sistema de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calentando la junta homocinética para expandir el metal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las juntas homocinéticas permiten la transmisión del torque sin variaciones de velocidad, facilitando el movimiento de la suspensión y dirección.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El desgaste de los semiejes no afecta el funcionamiento del diferencial ni la estabilidad del vehículo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los ejes rígidos se utilizan principalmente en vehículos pesados, como camiones y buses, ya que transmiten la fuerza de manera directa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El sistema de tricetas se caracteriza por utilizar bolas de acero en lugar de rodillos para la transmisión del torque.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Un mantenimiento adecuado de los semiejes incluye revisión de grasa, inspección de los guardapolvos y ajuste de las abrazaderas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
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
