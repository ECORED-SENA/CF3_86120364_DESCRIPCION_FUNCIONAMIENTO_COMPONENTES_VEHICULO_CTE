<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Variantes de semiejes y su funcionamiento

    p(data-aos="fade-up").mb-5.pb-4 Existen diferentes configuraciones de semiejes que varían según el tipo de articulación utilizada para transmitir el movimiento del diferencial a las ruedas motrices. Una de las configuraciones más utilizadas combina juntas homocinéticas externas con tricetas internas, optimizando la transmisión del torque y la flexibilidad del sistema.

    .titulo-tres.mb-5(data-aos="flip-up")
      h4(data-aos="fade-up") Semiejes con juntas homocinéticas externas y tricetas internas


    .bg-full-width-2.bg-fondo-5
      .px-4.px-md-5.pb-4.pb-md-5

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-8.mb-4(data-aos="zoom-in-up")
            .bg-color-acento-contenido.p-4.mb-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/1.svg', alt='', style="max-width: 90px;")
                .col
                  p.text-white El sistema tradicional de semiejes incluye dos juntas homocinéticas: una en la salida del diferencial y otra cerca de la rueda motriz. Sin embargo, en algunos diseños, se ha optado por reemplazar la junta homocinética interna por una triceta, manteniendo la homocinética en la parte externa del eje.

            p(data-aos="fade-up").mb-4 Las tricetas reciben su nombre debido a su estructura de tres puntas con rodillos en lugar de bolas de acero. Estos rodillos se desplazan sobre pistas ranuradas en la manzana externa, permitiendo un movimiento suave y preciso. Este diseño es común en semiejes internos, ya que mejora la eficiencia y el rendimiento del sistema de tracción.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/2.png', alt='')

        .row.mb-5.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 3.
              span Sistema de transmisión que incorpora una triceta y una junta homocinética para mejorar la movilidad.
            figure
              img(src='@/assets/curso/tema3/f3.png', alt='Sistema de transmisión: triceta y junta homocinética')

    .bg-color-1.tarjeta.px-4.py-2.d-inline-block(data-aos="fade-up").mb-4
      h4(data-aos="fade-up").mb-0  Ventajas del sistema de tricetas internas

    p(data-aos="fade-up").mb-4 Este sistema presenta diversas ventajas en comparación con el uso exclusivo de juntas homocinéticas:



    div.row.justify-content-center.align-items-stretch.mb-4
      div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.div.bg-color-5.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/3.svg"
            alt="Icono de eficiencia y practicidad"
            style="width: 95px"
          )
          h4.mb-3.text-center Mayor eficiencia y practicidad
          p.mb-0.text-center El diseño es más simple y funcional que un sistema completamente homocinético.

      div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.div.bg-color-5.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/4.svg"
            alt="Icono de manzana interna"
            style="width: 95px"
          )
          h4.mb-3.text-center Manzana interna
          p.mb-0.text-center La manzana de tres puntas permite una alineación precisa del semieje.

      div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
        .tarjeta.div.bg-color-5.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/5.svg"
            alt="Icono de canastilla"
            style="width: 95px"
          )
          h4.mb-3.text-center Canastilla
          p.mb-0.text-center Los rodamientos de palillos en los rodillos reducen la fricción y mejoran el movimiento.

    p(data-aos="fade-up").mb-4.mb-lg-5.pb-4 Esta configuración es ampliamente utilizada en vehículos de tracción delantera, donde se requiere un equilibrio entre flexibilidad, durabilidad y eficiencia en la transmisión del torque.

    .titulo-tres.mb-5(data-aos="flip-up")
      h4(data-aos="fade-up") Los semiejes de propulsión y tricetas

    .bg-full-width-2.bg-fondo-11
      .px-4.px-md-5
        .row.mb-5.align-items-stretch
          .col-lg-5.mb-4.mb-lg-0
            .bg-color-acento-contenido.p-4.pt-md-5.h-100
              p.mb-0.text-white El sistema de semiejes con tricetas internas ofrece una ventaja clave: el semieje queda flotante dentro de la manzana de salida del diferencial. Esta característica permite que el eje trabaje de manera alineada mientras gira y transmite torque a las ruedas. Además, facilita la compensación de la longitud del semieje cuando la suspensión alcanza su máxima extensión, lo que mejora la estabilidad y el desempeño del sistema de tracción.

          .col-lg-7
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 4.
              span Despiece y funcionamiento de la triceta en el sistema de transmisión
            figure
              img(src='@/assets/curso/tema3/f4.png', alt='Despiece de una triceta con sus componentes internos y su conexión con el sistema de transmisión.')



        .row.justify-content-center.mb-5
          .col-lg-10
            .bg-color-1.p-4
              .row.justify-content-center
                .col-lg-auto
                  figure
                    img(src="@/assets/curso/intro/2.svg", alt="", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
                .col-lg
                  p.mb-0
                    | A pesar de sus beneficios, el uso de tricetas internas puede presentar ciertas limitaciones, especialmente si el vehículo experimenta modificaciones estructurales o desajustes en la alineación.
        

        div.row.justify-content-center.align-items-stretch.mb-4
          div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
            .tarjeta.div.bg-color-6.box-shadow.px-4.py-5.h-100.position-relative
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/6.svg"
                alt="Icono de elevación de vehículo"
                style="width: 95px"
              )
              h4.mb-3.text-center Variaciones en la altura del vehículo
              p.mb-0.text-center Puede afectar la alineación y provocar que el semieje se salga de su alojamiento interno.


          div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
            .tarjeta.div.bg-color-6.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/7.svg"
                alt="Icono de chasis"
                style="width: 95px"
              )
              h4.mb-3.text-center Modificaciones en el chasis o carrocería
              p.mb-0.text-center Pueden alterar la distancia entre la rueda y la manzana del diferencial, comprometiendo el funcionamiento del semieje.

          div.col-md-6.col-lg-4.mb-4(data-aos="zoom-in-up")
            .tarjeta.div.bg-color-6.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/8.svg"
                alt="Icono de rueda y alineación"
                style="width: 95px"
              )
              h4.mb-3.text-center Mala alineación de las ruedas motrices
              p.mb-0.text-center Genera desplazamientos irregulares en la triceta, afectando su estabilidad y durabilidad.

    p(data-aos="fade-up").mb-5.pb-3.pb-lg-0 En condiciones normales, el sistema de tricetas está diseñado para soportar un rango de desplazamiento dentro de las tolerancias del vehículo. Sin embargo, si estas tolerancias se exceden, se pueden generar fallos en el sistema.


    .titulo-tres.mb-4(data-aos="flip-up")
      h4(data-aos="fade-up") Funcionamiento del sistema de tricetas

    p(data-aos="fade-up").mb-4.mb-lg-5 El diseño del sistema de tricetas permite que los rodillos, en lugar de bolas de acero, se desplacen dentro de ranuras más largas en la manzana externa. Esto permite un movimiento controlado hacia adentro o hacia afuera, ajustando la longitud del semieje según la variación de altura de la suspensión. Para garantizar su correcto desempeño y durabilidad, el sistema incluye un guardapolvo externo, que cumple dos funciones principales:

    .row.mb-5.justify-content-center
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.bg-color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema3/9.svg", alt="", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0.text-white
                | Proteger los componentes internos contra la entrada de polvo y agua.
      .col-lg-6
        .tarjeta.bg-color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema3/9.svg", alt="", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0.text-white
                | Actuar como fuelle, permitiendo el desplazamiento lateral del semieje sin comprometer su funcionamiento.

    p(data-aos="fade-up").mb-5.pb-4 Este diseño optimiza la respuesta del vehículo ante cambios en la suspensión y mantiene la estabilidad del sistema de tracción en diferentes condiciones de manejo.

    .titulo-tres.mb-4(data-aos="flip-up")
      h4(data-aos="fade-up") Trabajo con los semiejes de propulsión con tricetas

    p(data-aos="fade-up").mb-4.mb-lg-5 El sistema de tricetas, al ser menos complejo que el de juntas homocinéticas, requiere un mantenimiento más sencillo y su desmontaje es menos laborioso. Su diseño permite una transmisión eficiente del movimiento del piñón planetario del diferencial hasta la rueda motriz.


    .bg-full-width-2.bg-fondo-8
      .px-4.px-md-5.pb-4.pb-md-5
        .row.mb-5.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 5.
              span Detalle de la triceta en el sistema de transmisión
            figure
              img(src='@/assets/curso/tema3/f5.png', alt='Vista ampliada de una triceta con sus rodillos y estrías para mejorar la transmisión de potencia.|')


        .bg-color-1.tarjeta.px-4.py-2.d-inline-block(data-aos="fade-up").mb-4
          h4(data-aos="fade-up").mb-0  Proceso de desmontaje y mantenimiento

        p(data-aos="fade-up").mb-4.mb-lg-5 Para garantizar el correcto funcionamiento del sistema de tricetas, se recomienda seguir estos pasos al realizar su mantenimiento o reemplazo:


    .row.mb-5.justify-content-center
      .col-lg-6
        LineaTiempoD.color-primario
          .div(numero="A" titulo="Retiro del seguro")
            p Extraer el seguro alojado en el extremo del eje estriado.
          
          .div(numero="B" titulo="Limpieza de componentes")
            p Desmontar y limpiar cuidadosamente todas las piezas.
          
          .div(numero="C" titulo="Inspección de rodillos y manzanas")
            p Verificar el estado de los rodillos y las manzanas internas.
          
          .div(numero="D" titulo="Engrase de piezas")
            p Aplicar lubricante para asegurar un movimiento suave y sin fricción excesiva.
          
          .div(numero="E" titulo="Revisión y reemplazo del guardapolvo")
            p Sustituir el guardapolvo y las abrazaderas si es necesario.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/10.png", alt="") 

    p(data-aos="fade-up").mb-5.pb-3.pb-lg-0 Este mantenimiento preventivo ayuda a prolongar la vida útil del sistema y evita fallos en la transmisión del torque hacia las ruedas motrices.

    .bg-full-width.bg-fondo-8
      .px-4.px-md-5.pb-4.pb-md-5
        .titulo-tres.mb-4(data-aos="flip-up")
          h4(data-aos="fade-up") Semiejes de propulsión para ejes rígidos

        p(data-aos="fade-up").mb-4.mb-lg-5 Hasta ahora, los semiejes analizados han funcionado de manera independiente, sin formar parte estructural del eje delantero o posterior del vehículo. Sin embargo, en algunos casos, los semiejes se encuentran alojados dentro de una funda o tubo, formando parte del eje rígido. Este tipo de configuración es utilizada en vehículos de grandes dimensiones, como camionetas, todoterrenos, camiones y buses.


        .row.mb-5.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 6.
              span Eje de transmisión con brida y estrías de acople
            figure
              img(src='@/assets/curso/tema3/f6.png', alt='Representación de un eje de transmisión con brida y estrías en su extremo para la conexión con el diferencial.', style="max-width: 820px;")

        p(data-aos="fade-up").mb-4.mb-lg-5 El diferencial en este caso, está ubicado dentro de la funda del eje rígido y también aloja los semiejes de rueda.
        
        .bg-color-1.tarjeta.px-4.py-2.d-inline-block(data-aos="fade-up").mb-4
          h4(data-aos="fade-up").mb-0  Funcionamiento de los semiejes en ejes rígidos

        p(data-aos="fade-up") El diseño y la disposición de estos semiejes permiten una transmisión de fuerza directa y eficiente.

    .row.mb-5.justify-content-center.align-items-stretch
      .col-xl-3.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-color-secundario.p-4.h-100
          h4.mb-2 Sector estriado del semieje
          p.mb-0 Se inserta en el piñón planetario del diferencial.
      .col-xl-3.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-color-secundario.p-4.h-100
          h4.mb-2 Piñones planetarios
          p.mb-0 Al girar, transmiten la fuerza hasta las ruedas de manera directa.
      .col-xl-3.col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-color-secundario.p-4.h-100
          h4.mb-2 Manzana del semieje
          p.mb-0 Se inserta en el piñón planetario del diferencial.

    .row.mb-5.justify-content-center.align-items-stretch
      .col-lg-6
        figure
          img(src="@/assets/curso/tema3/11.png", alt="")

      .col-lg-6
        .bg-color-acento-contenido.p-4.h-100
          .row.justify-content-center
            .col-lg-10
              p.mb-4.text-white.mt-5
                | En algunos casos, el semieje está compuesto por dos partes:
              ul.lista-ul--color.icon-color-white
                li.mb-4
                  i.fas.fa-wrench.text-primary
                  span.ms-2.text-white #[strong Eje estriado interno:] Se conecta directamente con el piñón planetario del diferencial.
                li.mb-4
                  i.fas.fa-wrench.text-primary
                  span.ms-2.text-white #[strong Manzana ranurada externa:] Se une al extremo del semieje mediante una chaveta o estriado.  
            
    .row.justify-content-center
      .col-lg-10
        .bg-color-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/intro/2.svg", alt="", style="max-width: 90px;").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0
                | Cuando estos elementos están correctamente ajustados, forman un conjunto sólido que permite una transmisión eficiente de la fuerza desde el diferencial hasta las ruedas motrices.

</template>

<script>
export default {
  name: 'Tema3',
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
