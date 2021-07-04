import { make } from 'vuex-pathify'

export const namespaced = true

export const state = () => {
  return {
    isCategoryOpen: false,
    isLangOpen: false,
    isNavOpen: false,
    isSearchOpen: false,
    isScrolled: false
  }
}

export const mutations = {
  ...make.mutations(state)
}

export default {
  namespaced,
  state,
  mutations
}
