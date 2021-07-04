// eslint-disable-next-line import/no-named-default
import { default as pathify, make } from 'vuex-pathify'
import get from 'lodash/get'

// Modules
import app from './modules/app'

// Others
import { languages } from '~/helpers/lang'

export const state = () => {
  return {
    lang: {},
    locale: 'id',
    shop: null
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // console.log(req)
    commit('SET_SHOP', req.shop)

    // BEGIN: SET Lang & Locale
    let locale = this.$cookies.get('locale')

    if (!get(languages, locale)) {
      locale = 'id'
      this.$cookies.set('locale', locale)
    }

    commit('SET_LANG', languages[locale])
    commit('SET_LOCALE', locale)
    // BEGIN: SET Lang & Locale
  }
}

export const getters = {
  ...make.getters(state)
}

export const mutations = {
  ...make.mutations(state)
}

export const modules = {
  app
}

export const plugins = [pathify.plugin]
