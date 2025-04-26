<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5
        p(data-aos="fade-up").mb-4.mb-lg-5 El sistema de propulsión de un vehículo depende de diversos componentes mecánicos que garantizan la transmisión de la fuerza desde el motor hasta las ruedas. Dentro de estos elementos, los semiejes y las juntas homocinéticas cumplen un papel fundamental al permitir la movilidad y la estabilidad del automóvil en diferentes condiciones de conducción. Su correcto funcionamiento es clave para la eficiencia del sistema de tracción.

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las juntas homocinéticas, en comparación con las juntas universales, proporcionan una mayor flexibilidad y permiten la transmisión del torque sin variaciones de velocidad. Su diseño facilita el movimiento de la suspensión y la dirección en vehículos con tracción delantera o en las cuatro ruedas. Además, las tricetas han surgido como una alternativa eficiente en semiejes de ciertos vehículos, optimizando su rendimiento y durabilidad.
        
        .bg-color-1.p-4
          .row.justify-content-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/intro/2.svg", alt="", style="max-width: 90px;").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0
                | Este componente formativo presenta una descripción detallada sobre la estructura, funcionamiento e instalación de los semiejes, las juntas homocinéticas y los sistemas de propulsión en ejes rígidos. También aborda los procedimientos de mantenimiento y revisión de estos componentes, asegurando un desempeño óptimo del sistema de tracción en distintos tipos de automóviles.

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
