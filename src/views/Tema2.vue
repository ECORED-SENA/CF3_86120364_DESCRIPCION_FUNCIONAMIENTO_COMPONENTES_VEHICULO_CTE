<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Instalación, mantenimiento y revisión de semiejes


    .row.mb-5
      .col-lg
        p(data-aos="fade-up").mb-4 La correcta instalación, mantenimiento y revisión de los semiejes es fundamental para garantizar el desempeño y la seguridad del sistema de propulsión del vehículo. Estos componentes permiten la transmisión del torque desde el diferencial hasta las ruedas motrices, por lo que su ajuste adecuado y su inspección periódica son esenciales para evitar fallos mecánicos y prolongar su vida útil.

      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/1.svg', alt='')
          

    .bg-full-width.bg-fondo-10
      .px-4.px-md-5
        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4(data-aos="fade-up") Instalación de los semiejes homocinéticos

    
        .row.mb-5
          .col-lg-7

            p(data-aos="fade-up").mb-4 Cada semieje de una rueda delantera debe ajustarse a la manzana de la rueda para transmitir el movimiento generado por el sistema diferencial

            .tarjeta.bg-color-acento-contenido.p-4(data-aos="fade-up").mb-4.mb-lg-0
              p.mb-0.text-white
                | Para lograrlo, la punta externa del sistema homocinético se integra con la punta del eje de la rueda. Como este eje debe girar, se instala en los rodamientos de la punta, los cuales están alojados en el soporte de la suspensión de la rueda.

          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/2.png', alt='')


    p(data-aos="fade-up").mb-4 Los componentes clave en la instalación son:

    .row.mb-4
      .col-lg-3.d-none.d-lg-block.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png" alt="").img-fluid
      .col-lg-9
        
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Punta externa del sistema homocinético")
            .col-12
              p Se convierte en la punta del eje de la rueda y permite la transmisión del movimiento.
          
          .row(titulo="Rodamientos de la punta")
            .col-12
              p Facilitan el giro del eje de propulsión junto con la manzana y la rueda.
          
          .row(titulo="Rodamiento de doble pista de bolas")
            .col-12
              p Comúnmente utilizado para garantizar un giro estable y firme.
          
          .row(titulo="Sector estriado o sistema de chaveta guía")
            .col-12
              p Asegura que el eje de propulsión gire en conjunto con la manzana de la rueda.
          
          .row(titulo="Tuerca ajustada con torque establecido")
            .col-12
              p Garantiza la fijación del sistema según los parámetros mecánicos.
              

    p(data-aos="fade-up").mb-5 Estos elementos aseguran una conexión firme y estable entre el semieje y la rueda, optimizando la transmisión del movimiento y evitando desgastes prematuros.

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Con junta homocinética

    p(data-aos="fade-up").mb-4 El sistema homocinético permite una transmisión eficiente del movimiento mientras la rueda cambia de ángulo. Su diseño interno se basa en sectores ranurados dentro de la manzana externa, donde se desplazan las bolas de acero. Estas permanecen centradas gracias a una canastilla, que también las mantiene separadas y las guía en su recorrido. El funcionamiento del sistema homocinético es:


    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5       
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")

          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Conexión con la rueda motriz
                ul.lista-ul
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | El extremo del semieje con el sistema homocinético cuenta con un sector estriado.
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | Este sector ingresa en la manzana estriada de la rueda motriz, permitiendo que ambos giren en conjunto y transmitan el torque.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/slide-1.png', alt='Mecánico trabajando con junta homocinética')
                  .punto-amarillo
            
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Estructura interna
                ul.lista-ul
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | En la manzana se encuentra la canastilla separadora, encargada de alojar y guiar las bolas de acero.
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | Dentro de la canastilla, se insertan las bolas de acero que permiten el desplazamiento.
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | En el centro, se ubica la manzana interior, que también posee un estriado en su interior para la inserción del semieje.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/slide-2.png', alt='Detalle de la estructura interna de la junta homocinética')
                  .punto-amarillo
            
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Aseguramiento del semieje
                ul.lista-ul
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | El eje sólido avanza hasta el tope dentro de la manzana estriada.
                  li 
                    i.fas.fa-wrench.text-primary.mb-2
                    | Un seguro fija la posición del eje, evitando movimientos indeseados.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/slide-3.png', alt='Semieje completo con sistema homocinético')
                  .punto-amarillo


    .bg-color-acento-contenido.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/4.png', alt='')
        .col-lg
          .p-4.p-lg-0.pe-lg-5
            h4.mb-4(data-aos="fade-up").text-white Importancia de la correcta instalación
            p.mb-0(data-aos="fade-up").text-white Es crucial colocar la manzana interna en la posición adecuada, ya que tiene un lado definido. Si se instala de manera incorrecta, el sistema homocinético trabajará descentrado, generándotela un esfuerzo superior al previsto. Esto puede provocar desgaste prematuro y fallos en el sistema, especialmente al girar con gran torque. La referencia principal para el montaje es la posición de seguro de fijación, que indica la orientación correcta de la manzana interna.

    .bg-full-width-2.bg-fondo-4.mb-5.pt-4
      .px-4.px-md-5.pb-4.pb-md-5

        .titulo-tres.mb-4(data-aos="flip-up")
          h4(data-aos="fade-up") Desarmado y revisión homocinéticos

        p(data-aos="fade-up").mb-4 El mantenimiento de las juntas homocinéticas es esencial para su correcto funcionamiento y durabilidad. Aunque los fabricantes establecen períodos específicos para su revisión y engrase, estos deben ajustarse en función del uso y las condiciones ambientales. Factores como terrenos polvorientos, presencia de agua o esfuerzos mecánicos elevados pueden acelerar el desgaste y requerir inspecciones más frecuentes.

        .bg-color-1.tarjeta.px-4.py-2.d-inline-block(data-aos="fade-up").mb-4
          h4(data-aos="fade-up").mb-0  Procedimiento de desarmado y revisión

        p(data-aos="fade-up").mb-4 Para desmontar y evaluar el estado de las juntas homocinéticas, es necesario seguir una serie de pasos que aseguren la correcta manipulación y conservación de sus componentes.

        .row.mb-5.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 2.
              span Proceso de desmontaje y mantenimiento de una junta homocinética
            figure
              img(src='@/assets/curso/tema2/f2.png', alt='Proceso de ensamblaje de una junta homocinética con sus componentes internos y herramientas necesarias.')


    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/5.png', alt='')
      .col-lg-8
        
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Extracción del semieje")
            .col-12
              p Desconectarlo primero de la salida del diferencial y luego de la punta de eje de la rueda.
          
          .row(titulo="Retiro del guardapolvo")
            .col-12
              p Extraer con cuidado para evitar daños en otros componentes.
          
          .row(titulo="Limpieza de las piezas")
            .col-12
              p Usar un solvente adecuado y secar con un trapo limpio para inspeccionar el estado de las partes.
          
          .row(titulo="Desmontaje del eje sólido")
            .col-12
              p Si el seguro es desmontable, retirarlo; si es de presión, golpear suavemente con un martillo de goma o plástico.
          

    .row
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Extracción de las bolas de acero")
            .col-12
              p Girar la canastilla hasta permitir la retirada de las bolas, una por una.
        
          .row(titulo="Separación de la canastilla")
            .col-12
              p Buscar la posición en la que coincidan las ranuras de alojamiento para extraerla completamente.
          
          .row(titulo="Engrase y rearmado")
            .col-12
              p Aplicar grasa grafitada de baja densidad y ensamblar en el orden inverso al desmontaje.
          
          .row(titulo="Sustitución de guardapolvos y abrazaderas")
            .col-12
              p Se recomienda cambiarlas incluso si parecen en buen estado. Ajustar correctamente las abrazaderas para evitar fugas o movimientos indeseados.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/6.png', alt='')

    p(data-aos="fade-up").mb-5.pb-4 Realizar este procedimiento con precisión garantiza que la junta homocinética funcione correctamente y prolonga la vida útil del sistema de transmisión del vehículo.

    .titulo-tres.mb-5(data-aos="flip-up")
      h4(data-aos="fade-up") Armado y comprobación de los homocinéticos

    p(data-aos="fade-up").mb-4 Después de desarmar, revisar y engrasar las juntas homocinéticas de los semiejes propulsores, es fundamental realizar una correcta instalación y verificación para garantizar el buen funcionamiento del sistema de tracción. Un ensamblaje inadecuado puede generar daños en los componentes, afectar la estabilidad del vehículo y comprometer la seguridad en la conducción.

    .bg-color-1.tarjeta.px-4.py-2.d-inline-block(data-aos="fade-up").mb-4
      h4(data-aos="fade-up").mb-0  Recomendaciones para el armado y comprobación

    p(data-aos="fade-up").mb-4 Para asegurar que las juntas homocinéticas operen correctamente, es necesario seguir las siguientes recomendaciones:
      
    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/7.svg"
            alt="Icono de ajustes con torque"
            style="width: 95px"
          )
          h4.mb-3.text-center Ajustes con torque recomendado
          p.mb-0.text-center Aplicar el torque especificado por el fabricante en los pernos de sujeción y las puntas de eje. Un ajuste incorrecto puede generar roturas o desajustes en el sistema de tracción.

      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/8.svg"
            alt="Icono de prueba en elevador"
            style="width: 95px"
          )
          h4.mb-3.text-center Prueba en elevador
          p.mb-0.text-center Encender el motor y verificar que los ejes giren de manera centrada. Escuchar posibles ruidos anormales al girar las ruedas en diferentes direcciones.

      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/9.svg"
            alt="Icono de simulación de suspensión"
            style="width: 95px"
          )
          h4.mb-3.text-center Simulación del movimiento de la suspensión
          p.mb-0.text-center Evaluar el comportamiento del sistema antes de realizar la prueba de ruta. Aunque es más complejo, permite detectar posibles problemas antes de someter al vehículo a carga real.

      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/10.svg"
            alt="Icono de verificación de alineación"
            style="width: 95px"
          )
          h4.mb-3.text-center Verificación de alineación y suspensión
          p.mb-0.text-center Asegurar que la suspensión y la alineación de las ruedas estén dentro de sus tolerancias establecidas. Un desajuste puede generar esfuerzos excesivos sobre el semieje.

    .bg-color-1.tarjeta.px-4.py-2.d-inline-block(data-aos="fade-up").mb-4
      h4(data-aos="fade-up").mb-0 Posibles problemas por modificaciones o mala instalación

    p(data-aos="fade-up").mb-4 Cuando se alteran las dimensiones originales del vehículo o no se realiza una instalación adecuada, pueden surgir complicaciones que afecten la funcionalidad del sistema de transmisión.

    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Desalineación de ruedas
                p Puede dañar el semieje y provocar su salida del diferencial en curvas.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/slide-1-2.png', alt='Camión con ruedas desalineadas')
                  .punto-amarillo
            
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Elevación del vehículo
                p El semieje podría no alcanzar las ruedas motrices, generando esfuerzos adicionales y posibles desprendimientos.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/slide-2-2.png', alt='Vehículo elevado en rampa')
                  .punto-amarillo
            
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-4 Longitud insuficiente del semieje
                p Si la suspensión se modifica sin considerar la compensación de longitud, el semieje podría no adaptarse correctamente y fallar en su funcionamiento.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/slide-3-2.png', alt='Detalle de suspensión y semieje')
                  .punto-amarillo


    .row.justify-content-center
      .col-lg-10
        .bg-color-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/intro/2.svg", alt="", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0
                | Una correcta instalación y verificación final garantizarán el óptimo desempeño del sistema de propulsión, evitando desgastes prematuros y fallos mecánicos.

</template>

<script>
export default {
  name: 'Tema2',
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
