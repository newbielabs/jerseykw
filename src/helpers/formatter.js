import moment from 'moment'
import numeral from 'numeral'

// register locale ID
if (numeral.locales.id === undefined) {
  numeral.register('locale', 'id', {
    delimiters: {
      thousands: '.',
      decimal: ','
    },
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'T'
    },
    currency: {
      symbol: 'Rp'
    }
  })
}

if (numeral.locale() !== 'id') {
  numeral.locale('id')
}

export function formatNumber(number, format, allowZero = false) {
  if (!allowZero && format.includes('$') && !number) {
    return '-'
  } else if (format.includes('$') && typeof number !== 'number') {
    return '-'
  }

  return numeral(number).format(format)
}

export function formatDate(date, format = 'MM/DD/YYYY') {
  if (!date) {
    return '-'
  }

  return moment(date).format(format)
}
