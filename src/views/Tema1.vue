<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Semiejes de propulsión
 

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-4.pb-md-5
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/1.png', alt='')
          
          .col-lg-8
            .bg-color-acento-contenido.p-4.mb-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/2.svg', alt='', style="max-width: 90px;")
                .col
                  p.text-white Los semiejes son ejes individuales que transmiten la fuerza desde el diferencial hasta cada una de las ruedas motrices del vehículo. Dado que estos ejes soportan mayores esfuerzos de torsión que los ejes propulsores anteriores, se construyen sólidos en lugar de tubulares, como los ejes cardánicos.

            p(data-aos="fade-up").mb-4 En ambos extremos de los semiejes se encuentran sistemas de articulación con juntas universales. Sin embargo, la mayoría de los fabricantes han desarrollado sistemas más avanzados y adecuados debido a la necesidad de un mayor ángulo de trabajo, especialmente en las ruedas directrices delanteras. Estas ruedas, además de recibir la propulsión y generar el giro, deben doblar en ángulos pronunciados.

        .row
          .col-lg-6.mb-4.mb-lg-0
            .bg-color-2.p-4.pt-md-5.h-100
              .row.justify-content-center
                .col-10
                  ul.lista-ul--color
                    li.mb-4
                      i.fas.fa-wrench.text-primary
                      span.ms-2 #[strong Función.] Transmitir el torque del diferencial a las ruedas motrices.
                    
                    li.mb-4
                      i.fas.fa-wrench.text-primary
                      span.ms-2 #[strong Estructura.] Sólidos para soportar altos esfuerzos de torsión.
                    
                    li.mb-4
                      i.fas.fa-wrench.text-primary
                      span.ms-2 #[strong Conexión.] En ambos extremos poseen sistemas de articulación con juntas universales o sistemas avanzados según el fabricante.
                    
                    li.mb-4
                      i.fas.fa-wrench.text-primary
                      span.ms-2 #[strong Ubicación.] Instalados en las ruedas motrices, tanto delanteras como traseras.
              
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 1.
              span Sistema de transmisión y tracción delantera en un vehículo
            figure
              img(src='@/assets/curso/tema1/f1v2.png', alt='Diagrama de sistema de transmisión con partes etiquetadas')

    Separador

    .bg-full-width.bg-fondo-9
      .px-4.px-md-5

        .titulo-segundo.color-acento-contenido
          h2 1.1 Con juntas universales


        .row.mb-5
          .col-lg-7
            p(data-aos="fade-up").mb-4 Inicialmente, en los vehículos con tracción en las cuatro ruedas, los ejes de propulsión delanteros utilizaban juntas universales. Estas permiten que las ruedas delanteras giren mientras el vehículo se desplaza en curvas.

            .bg-color-acento-contenido.p-4.mb-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/4.svg', alt='', style="max-width: 90px;").mx-auto.mb-4.mb-lg-0
                .col
                  p.text-white El semieje recibe el movimiento del piñón planetario del diferencial y, por ello, en su extremo interno cuenta con un sector estriado que permite girar en conjunto con el planetario y desplazarse lateralmente para compensar variaciones en la distancia entre la rueda y el diferencial.

            p(data-aos="fade-left").mb-4 En su otro extremo, el eje posee una junta universal o cruceta que se conecta con la punta del eje de la rueda. Esta punta, encargada de transmitir el giro a la rueda, puede sujetarse mediante un sector estriado en la manzana de la rueda o mediante otros sistemas de fijación, como pasadores.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/3.png', alt='')

        Separador

        .titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Con juntas homocinéticas

    p(data-aos="fade-up").mb-4 El sistema de semiejes de propulsión con juntas homocinéticas aún se emplea en vehículos de gran tamaño, como todoterrenos, camiones y vehículos militares. Esto se debe a que las juntas universales funcionan de manera eficiente y tienen un costo de fabricación y reemplazo bajo.

    .row.mb-5
      .col-lg-9
        .row.mb-4
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/5.png', alt='')
          .col-lg-5
            .tarjeta.bg-color-acento-contenido.p-4
              p(data-aos="fade-up").mb-0.text-white Sin embargo, en los vehículos de pasajeros modernos, este sistema puede no ser la mejor opción debido al tamaño y peso del eje de propulsión. Por esta razón, los fabricantes han desarrollado sistemas más apropiados para transmitir la fuerza a las ruedas motrices, tanto en las ruedas traseras, que no necesitan curvar, como en las delanteras, que sí lo hacen.

        p(data-aos="fade-up").mb-4 Uno de los diseños más eficientes es el que emplea sistemas homocinéticos en ambos extremos del semieje. Estos sistemas permiten transmitir el movimiento y, al mismo tiempo, modificar la línea de acción de la propulsión cuando la suspensión del vehículo cambia la posición de la rueda o cuando el vehículo gira.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/6.png', alt='')

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/7.svg"
            alt="Icono de eficiencia"
            style="width: 95px"
          )
          h4.mb-3.text-center Mayor eficiencia
          p.mb-0.text-center Transmiten mejor el torque en comparación con las juntas universales.

      div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/8.svg"
            alt="Icono de adaptabilidad"
            style="width: 95px"
          )
          h4.mb-3.text-center Adaptabilidad
          p.mb-0.text-center Permiten cambios de ángulo sin pérdida de potencia.

      div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-3.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/9.svg"
            alt="Icono de suspensión independiente"
            style="width: 95px"
          )
          h4.mb-3.text-center Uso en suspensión independiente
          p.mb-0.text-center Funcionan mejor en sistemas donde la rueda cambia de posición constantemente.



    .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El sistema homocinético está compuesto por:
          br
          br
          | &bull; <strong>Manzana externa:</strong> posee ranuras donde se alojan bolas de acero.
          br
          | &bull; <strong>Manzana interna:</strong> tiene el mismo número de ranuras que la manzana externa, lo que permite una conexión firme y fluida.
      

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Trabajo de las juntas homocinéticas

    p(data-aos="fade-up").mb-4 Las juntas homocinéticas, instaladas en los extremos de un semieje de propulsión, permiten la movilidad de la suspensión de la rueda y su giro al tomar curvas, mientras transmiten el movimiento generado por el piñón planetario del diferencial.

    p(data-aos="fade-up").mb-4 El funcionamiento se basa en la interacción de varios componentes:


    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.card.h-100
          div.card-header.text-center.text-white.py-3.bg-color-acento-contenido
            h5.mb-0 Manzana externa
          div.card-body.py-4.px-3.bg-color-4
            p.mb-0.text-center Permite el desplazamiento de las bolas de acero dentro de sus ranuras.

      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.card.h-100
          div.card-header.text-center.text-white.py-3.bg-color-acento-contenido
            h5.mb-0 Manzana intena
          div.card-body.py-4.px-3.bg-color-4
            p.mb-0.text-center Sujeta el eje rígido y trabaja en conjunto con la manzana externa.

      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.card.h-100
          div.card-header.text-center.text-white.py-3.bg-color-acento-contenido
            h5.mb-0 Canastilla
          div.card-body.py-4.px-3.bg-color-4
            p.mb-0.text-center Mantiene centradas las bolas de acero y permite su desplazamiento.

      div.col-md-6.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.card.h-100
          div.card-header.text-center.text-white.py-3.bg-color-acento-contenido
            h5.mb-0 Lubricación
          div.card-body.py-4.px-3.bg-color-4
            p.mb-0.text-center Reduce la fricción y protege los componentes internos.

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Con sistemas homocinéticos

    p(data-aos="fade-up").mb-4 El sistema de articulación debe garantizar la propulsión de la rueda mientras actúa la suspensión y cuando esta describe una curva pronunciada. Este esfuerzo es mayor en la rueda y menor en la salida del diferencial, ya que la rueda cambia de ángulo al girar, mientras que el diferencial permanece fijo. En el eje posterior, al no girar las ruedas, la articulación solo debe compensar el ángulo generado por el recorrido de la suspensión.


    .row.mb-5.align-items-stretch
      .col-lg-7.order-2.order-lg-1
        .tarjeta.bg-color-1.p-4(data-aos="fade-up").h-100
          p.mb-4 Para proteger los elementos internos del sistema homocinético, se incluye un guardapolvo de goma, que evita la entrada de agua y polvo. Este guardapolvo se fija con abrazaderas:

          p.ps-4.mb-2 &bull; #[strong Abrazadera grande:] ajustada en la manzana externa.
          p.ps-4.mb-0 &bull; #[strong Abrazadera pequeña:] sujeta al eje rígido.

      .col-lg-5.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/11.png', alt='', style="max-width: 482px;").mx-auto.mb-4.mb-lg-0

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
