import { get as lodashGet } from 'lodash'
import { get as pathifyGet } from 'vuex-pathify'
import { formatDate, formatNumber } from '~/helpers/formatter'

export default {
  computed: {
    ...pathifyGet(['shop', 'lang', 'locale'])
  },
  methods: {
    formatDate,
    formatNumber,
    getValue(obj, key, defaultValue = '') {
      return lodashGet(obj, key, defaultValue) || defaultValue
    }
  }
}
