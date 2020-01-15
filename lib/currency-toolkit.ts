import BigNumber from 'bignumber.js'

/**
 * Currency Toolkit
 */
const C = {
  /**
   * Tries to parse given value into BigNumber. If fails, returns undefined.
   * @param {any} value - value to parse.
   * @returns {BigNumber | undefined}
   */
  tryParse: (value: any): BigNumber | undefined => (!value || isNaN(value) ? undefined : C.$(value)),
  /**
   * Checks if given value is Number.
   * @param {any} value - value to check.
   * @returns {boolean}
   */
  isNumber: (value: any): boolean => Object.prototype.toString.call(value) === '[object Number]',
  /**
   * Returns currency from given value. If no value, returns empty string.
   * @param {string} amount - value in format `100.00 PLN`.
   * @returns {string}
   */
  $c: (amount: string): string => {
    const i = amount ? amount.lastIndexOf(' ') : -1
    return i < 0 ? '' : amount.substr(i + 1)
  },
  /**
   * Formats given value into this format `100.00 PLN`
   * @param {string} amount - value in format `100 PLN`.
   * @returns {string}
   */
  format00: (amount: string): string => `${C.$(amount).toFixed(2)} ${C.$c(amount)}`.trim(),
  /**
   * Formats given value into this format `100.00`
   * @param {string} amount - value in format `100 PLN`.
   * @returns {string}
   */
  value00: (amount: string): string => C.$(amount).toFixed(2),
  /**
   * Returns BigNumber object from given value
   * @param {string} arg - value in format `100 PLN`.
   * @returns {BigNumber}
   */
  $: (arg: string): BigNumber => new BigNumber(C.isNumber(arg) ? arg : arg ? arg.replace(',', '.').replace(/[^0-9.\-]/g, '') : 0),
  times: (multiplier, amount) =>
    `${C.$(amount)
      .times(C.$(multiplier))
      .toFixed(2)} ${C.$c(amount)}`.trim(),
  times_: (multiplier) => (amount) => C.times(multiplier, amount),
  sum: (currencyAmount1, currencyAmount2) => {
    const c1 = C.$c(currencyAmount1)
    const c2 = C.$c(currencyAmount2)
    const c = c1 === c2 ? c1 : undefined
    return (
      c &&
      `${C.$(currencyAmount1)
        .plus(C.$(currencyAmount2))
        .toFixed(2)} ${c}`
    )
  },
  sum_: (currencyAmount1) => (currencyAmount2) => C.sum(currencyAmount1, currencyAmount2),
  subtract: (currencyAmount1, currencyAmount2) => {
    const c1 = C.$c(currencyAmount1)
    const c2 = C.$c(currencyAmount2)
    const c = c1 === c2 ? c1 : undefined
    return (
      c &&
      `${C.$(currencyAmount1)
        .minus(C.$(currencyAmount2))
        .toFixed(2)} ${c}`
    )
  },
  abs: (amount) =>
    `${C.$(amount)
      .abs()
      .toFixed(2)} ${C.$c(amount)}`,
  zero: (amount) => {
    const c = C.$c(amount)
    return c ? `0 ${c}` : '0' // or maybe should we preserve a decimal point?
  },
  gt: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).gt(C.$(amount2)),
  gte: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).gte(C.$(amount2)),
  lt: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).lt(C.$(amount2)),
  lte: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).lte(C.$(amount2)),
  eq: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).eq(C.$(amount2)),
  gt0: (amount: string): boolean => C.$(amount).gt(0),
  compare: (amount1, amount2) => (C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).comparedTo(C.$(amount2))),
  max: (amount1, amount2) =>
    !amount1
      ? amount2
      : !amount2
      ? amount1
      : C.$c(amount1) !== C.$c(amount2)
        ? undefined
        : C.$(amount1).gt(C.$(amount2))
          ? amount1
          : amount2,
  max_: (amount1) => (amount2) => C.max(amount1, amount2),
  min: (amount1, amount2) =>
    !amount1
      ? amount2
      : !amount2
      ? amount1
      : C.$c(amount1) !== C.$c(amount2)
        ? undefined
        : C.$(amount1).gt(C.$(amount2))
          ? amount2
          : amount1,
  min_: (amount1) => (amount2) => C.min(amount1, amount2),
  HALF_UP: BigNumber.ROUND_HALF_UP,
}

export default C
