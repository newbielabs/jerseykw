<template>
  <div class="content">
    <div class="product-detail">
      <div class="product-detail-images">
        <VueSlickCarousel
          v-bind="imageOptions"
          class="product-detail-images-slider"
        >
          <a class="product-detail-images-item">
            <img src="/sample/shoes-1.jpeg" alt="">
          </a>
          <a class="product-detail-images-item">
            <img src="/sample/shoes-2.jpeg" alt="">
          </a>
          <a class="product-detail-images-item">
            <img src="/sample/shoes-3.jpeg" alt="">
          </a>
        </VueSlickCarousel>
      </div>
      <div class="product-detail-content">
        <h1>Jolie Eclat Suede</h1>
        <div class="mtop-small text-size-h3">
          <span class="text-line-through mright-small mbottom-tiny mright-medium">
            {{ formatNumber(310000, '$0,00', true) }}
          </span>
          <span class="mtop-tiny fg-orange text-weight-semi-bold">
            {{ formatNumber(299000, '$0,00', true) }}
          </span>
        </div>
        <hr>
        <div class="product-detail-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tempor elit ac sodales. In ultrices velit vel rutrum gravida. Aliquam ullamcorper odio lorem, id facilisis arcu fermentum in. Donec ipsum sem, auctor a dictum hendrerit, condimentum a leo. Morbi tempus tellus id est suscipit, sed auctor sapien iaculis. Mauris lacus enim, pretium at rutrum a, congue ut magna. In sollicitudin tortor velit, id ultrices ipsum convallis et. Vestibulum pellentesque odio in ante fermentum, et porta est consequat. Aliquam tristique ligula a cursus pretium. Maecenas feugiat dapibus augue non accumsan. Donec vitae turpis nec lectus dictum vestibulum. Nam auctor enim ut vulputate suscipit. In lacus tellus, interdum quis velit a, viverra efficitur dolor. Duis lacinia nibh at dui convallis semper.
          </p>
        </div>
        <hr>
        <button class="button button-big button-branding button-block">
          {{ lang.BUY_NOW }}
        </button>
        <hr>
      </div>
    </div>
    <div class="product-recommended mtop-huge">
      <div class="section bg-background pall-large radius-medium">
        <div class="section-title">
          <h3>{{ lang.YOU_MIGHT_ALSO_LIKE }}</h3>
        </div>
        <div class="section-content">
          <VueSlickCarousel
            v-if="sampleProducts.length > 0"
            v-bind="otherProductOptions"
            class="product-slider"
          >
            <a
              v-for="(product, index) in sampleProducts"
              :key="`product-slider-${index}`"
              class="product-slider-item"
            >
              <div class="product-image"><img :src="product.image" alt=""></div>
              <div class="product-desc">
                <div class="product-title text-size-h4">{{ product.name }}</div>
                <div v-if="product.price_discount" class="product-price text-line-through">
                  {{ formatNumber(product.price, '$0,00', true) }}
                </div>
                <div class="product-price fg-orange">
                  {{ formatNumber(product.price_discount || product.price, '$0,00', true) }}
                </div>
              </div>
            </a>
            <template #prevArrow>
              <a class="product-slider-arrow left">
                <i class="icon-chevron-left" />
              </a>
            </template>
            <template #nextArrow>
              <a class="product-slider-arrow right">
                <i class="icon-chevron-right" />
              </a>
            </template>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'ProductDetail',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      imageOptions: {
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'product-detail-images-dots'
      },
      otherProductOptions: {
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true
      }
    }
  },
  computed: {
    ...get(['sampleProducts'])
  }
}
</script>
