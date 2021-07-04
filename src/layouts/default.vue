<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'LayoutDefault',
  computed: {
    ...sync('app', ['isScrolled'])
  },
  mounted() {
    Object.keys(this.getValue(this.shop, 'colors', {}))
      .filter(key => this.getValue(this.shop, `colors[${key}]`))
      .forEach((key) => {
        document
          .documentElement
          .style
          .setProperty(`--${key}`, this.getValue(this.shop, `colors[${key}]`))
      })

    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  }
}
</script>
