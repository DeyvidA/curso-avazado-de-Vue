import numeral from 'numeral'

const formatNumber = num => !num ? 0 : numeral(Number(num)).format()

export {
  formatNumber
}
