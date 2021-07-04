<template>
  <div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non arcu non neque faucibus cursus in in sapien. Vestibulum vel lorem scelerisque, auctor dui ac, sagittis ligula. Pellentesque dapibus interdum consectetur. Ut eleifend felis arcu, non efficitur ipsum sagittis pulvinar. Integer id neque vel erat porttitor convallis et in velit. Aenean convallis, enim ac hendrerit interdum, ante ex vehicula justo, ac facilisis nulla turpis at velit. Aenean et quam tellus. Maecenas sed eros lorem.</p>

    <p>Pellentesque elementum ante nisl, eu sollicitudin mi mattis quis. Pellentesque congue erat at ex aliquam, vel dapibus lacus iaculis. Sed eget volutpat libero, quis elementum arcu. Ut vel nunc eros. Sed finibus, nisl sit amet convallis semper, sem turpis rutrum tortor, a congue odio erat id justo. Etiam ut urna fermentum, convallis ligula a, cursus magna. Mauris rhoncus lorem sed fermentum vulputate. Integer fringilla massa finibus ornare ultricies. Mauris at pharetra metus. Morbi aliquam, libero eu egestas condimentum, dui tellus molestie elit, et suscipit est nisi ac arcu. Nam non finibus arcu. In fermentum, enim et commodo commodo, quam orci sollicitudin neque, nec vehicula tortor ex ac purus. Etiam rutrum pharetra tortor, at mattis odio pharetra nec. Morbi massa arcu, maximus quis mi sit amet, maximus euismod enim. In tempus interdum turpis quis pharetra.</p>

    <p>Ut posuere metus ut eros consectetur, quis bibendum massa faucibus. Donec et tristique sem. Nam dictum accumsan elit, tincidunt maximus magna ultricies sed. Donec nec neque ac turpis vehicula elementum. Nulla tincidunt lectus eu quam mattis, ac pellentesque risus tempus. Nulla non tincidunt tortor. Vestibulum faucibus congue bibendum.</p>

    <p>Aliquam at elit id arcu pharetra luctus. Morbi consectetur ante nisl, et finibus lorem pretium eu. Praesent vulputate ligula sed elit tempus interdum. Proin et vulputate justo, sit amet efficitur sapien. Donec et lectus pharetra, euismod magna ut, posuere leo. Proin placerat neque dui, sed ullamcorper leo suscipit ut. Curabitur in arcu sed justo pellentesque tincidunt vitae imperdiet tellus. Aliquam fringilla efficitur justo. Donec rhoncus, lorem nec luctus consequat, enim arcu malesuada metus, vitae rhoncus lorem lectus at erat. Cras pellentesque gravida justo ornare vulputate. Duis suscipit ultrices felis, id cursus tellus sagittis nec.</p>

    <p>Pellentesque at turpis magna. Cras tortor ipsum, laoreet a tristique ac, porta vitae metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus est turpis, at hendrerit turpis ullamcorper eget. Pellentesque efficitur lacinia malesuada. Phasellus in eleifend tellus. Quisque risus tortor, rhoncus vitae ligula eget, aliquet elementum risus. Donec quis mi sit amet risus placerat tincidunt. Mauris euismod ut lorem eu iaculis. Integer eu lacus vel risus placerat laoreet sed a felis.</p>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
// import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Home',
  components: {
    // VueSlickCarousel
  },
  data() {
    return {
      slideOptions: {
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true
      }
    }
  },
  computed: {
    ...get(['sampleProducts']),
    productDiscounts() {
      return this.sampleProducts.filter(prod => prod.price_discount)
    }
  }
}
</script>
