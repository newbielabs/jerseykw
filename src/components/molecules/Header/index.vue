<template>
  <header class="header" :class="{ 'is-scrolled': isScrolled }">
    <div class="header-wrapper">
      <a class="header-toggle-nav" @click="toggleNav()"><i class="icon-menu" /></a>
      <div class="header-logo">
        <Logo class="logo" />
      </div>
      <ul class="header-nav" :class="{ 'is-active': isNavOpen }">
        <li class="close">
          <a @click="toggleNav()">
            <i class="icon-x" />
            {{ lang.CLOSE }}
          </a>
        </li>
        <li>
          <NuxtLink to="/">
            <i class="icon-home" />
            {{ lang.HOME }}
          </NuxtLink>
        </li>
        <li class="left">
          <NuxtLink to="/catalog">
            <i class="icon-columns" />
            {{ lang.CATALOG }}
          </NuxtLink>
        </li>
        <li class="right">
          <NuxtLink to="/price">
            <i class="icon-tag" />
            {{ lang.PRICE_LIST }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/order">
            <i class="icon-clipboard" />
            {{ lang.ORDER }}
          </NuxtLink>
        </li>
      </ul>
      <a class="header-toggle-search" @click="toggleSearch()"><i class="icon-search" /></a>

      <div class="header-search" :class="{ 'is-active': isSearchOpen }">
        <a class="header-search-toggle" @click="toggleSearch()"><i class="icon-x" /></a>
        <div class="header-search-input">
          <input
            v-model="keywords"
            type="text"
            :placeholder="lang.SEARCH_PLACEHOLDER"
            @keyup.enter="submitSearch()"
          >
          <i class="icon-search" />
        </div>
      </div>

      <!-- <li>
        <a
          :class="{ 'active': isLangOpen }"
          @click="isLangOpen = !isLangOpen"
        >
          <img :src="activeLanguage.flag" alt="">
          <span>{{ lang.CHOOSE_LANGUAGE }}</span>
          <i class="mleft-tiny text-size-h2" :class="isLangOpen ? 'icon-chevron-up' : 'icon-chevron-down'" />
        </a>
        <ul class="header-subnav is-vertical" :class="{ 'active': isLangOpen }">
          <li
            v-for="(value, key) in locales"
            :key="`lang-${key}`"
          >
            <a @click="setLocale(value.locale)">
              <img :src="value.flag" alt="" class="mright-small">
              {{ value.name }}
            </a>
          </li>
        </ul>
      </li> -->
    </div>
  </header>
</template>

<script>
import { get, sync } from 'vuex-pathify'
import { locales, languages } from '~/helpers/lang'

export default {
  name: 'Header',
  data() {
    return {
      keywords: this.getValue(this.$route, 'query.keywords') || ''
    }
  },
  computed: {
    ...get('app', ['isScrolled']),
    ...sync(['lang', 'locale']),
    ...sync('app', ['isLangOpen', 'isNavOpen', 'isSearchOpen', 'isCategoryOpen']),
    locales() {
      return locales
    },
    activeLanguage() {
      return this.locales.find(v => v.locale === this.locale) || {}
    }
  },
  watch: {
    $route: {
      handler() {
        this.toggleNav(true)
        this.toggleSearch(true)
        this.keywords = this.getValue(this.$route, 'query.keywords') || ''
      },
      immediate: true
    }
  },
  methods: {
    toggleNav(forceClose = false) {
      if (forceClose) {
        this.isNavOpen = false
      } else {
        this.isNavOpen = !this.isNavOpen
      }

      if (process.client) {
        const body = document.getElementsByTagName('body')[0]

        if (this.isNavOpen) {
          body.classList.add('nav-is-active')
        } else {
          body.classList.remove('nav-is-active')
        }
      }
    },
    toggleSearch(forceClose = false) {
      if (forceClose) {
        this.isSearchOpen = false
      } else {
        this.isSearchOpen = !this.isSearchOpen
      }

      if (process.client) {
        const body = document.getElementsByTagName('body')[0]

        if (this.isSearchOpen) {
          body.classList.add('search-is-active')
        } else {
          body.classList.remove('search-is-active')
        }
      }
    },
    setLocale(value) {
      if (
        value !== this.locale &&
        this.getValue(languages, value)
      ) {
        this.$cookies.set('locale', value)
        this.$set(this, 'locale', value)
        this.$set(this, 'lang', languages[value])
      }

      this.$set(this, 'isLangOpen', false)
    },
    submitSearch() {
      this.$router.replace({
        path: '/catalog',
        query: {
          keywords: this.keywords
        }
      })
    }
  }
}
</script>

<style src="./Header.style.scss" lang="scss"></style>
