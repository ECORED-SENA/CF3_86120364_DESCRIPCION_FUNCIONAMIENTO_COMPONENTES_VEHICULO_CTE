<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.   

    .row.justify-content-center
      .col-lg-10.mb-5.tarjeta.bg-color-sintesis.p-4.p-lg-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema que explica el sistema de propulsión en vehículos, dividiéndolo en componentes clave y procesos esenciales. Se detallan elementos como semiejes, juntas universales, juntas homocinéticas, tricetas y ejes rígidos, resaltando sus funciones. También se describen los procesos de instalación, mantenimiento y desmontaje, incluyendo ajustes, revisión de grasa y alineación para un funcionamiento óptimo.")
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
