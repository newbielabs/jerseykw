<template>
  <div v-if="loading" class="page-loader">
    <div class="loading-ring">
      <div v-for="index in 4" :key="`loader-ring-${index}`" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
