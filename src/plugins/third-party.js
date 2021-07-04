import Vue from 'vue'
import globalMixins from '~/mixins/global'

if (!Vue.__register_mixin__) {
  Vue.__register_mixin__ = true
  Vue.mixin(globalMixins)
}
