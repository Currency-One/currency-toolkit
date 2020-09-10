import BigNumber from 'bignumber.js'

/**
 * Currency Toolkit
 *
 * `CurrencyAmount` - value in format like `100 PLN`, `123.45 EUR`
 */
const C = {
  /**
   * Tries to parse given value into `BigNumber`. If fails, returns `undefined`.
   * @param {any} value - value to parse
   * @returns {BigNumber | undefined}
   */
  tryParse: (value: any): BigNumber | undefined => (!value || isNaN(value) ? undefined : C.$(value)),
  /**
   * Returns `true` if given value is `Number`.
   * @param {any} value - value to check
   * @returns {boolean}
   */
  isNumber: (value: any): boolean => Object.prototype.toString.call(value) === '[object Number]',
  /**
   * Returns currency from given `CurrencyAmount`. If no value, returns empty string.
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  $c: (amount: string): string => {
    const i = amount ? amount.lastIndexOf(' ') : -1
    return i < 0 ? '' : amount.substr(i + 1)
  },
  /**
   * Returns amount from given `CurrencyAmount`. If no value, returns empty string.
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  $a: (amount: string): string => {
    const i = amount ? amount.lastIndexOf(' ') : -1
    return i < 0 ? '' : amount.substr(0, i)
  },
  /**
   * Returns given `CurrencyAmount` in this format `100.00 PLN`
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  format00: (amount: string): string => `${C.$(amount).toFixed(2)} ${C.$c(amount)}`.trim(),
  /**
   * Returns given `CurrencyAmount` in this format `100,00 PLN`
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  currencyFormat00: (amount: string): string =>
    `${C.$(amount)
      .toFixed(2)
      .replace('.', ',')} ${C.$c(amount)}`.trim(),
  /**
   * Returns given `CurrencyAmount` in this format `100.00`
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  value00: (amount: string): string => C.$(amount).toFixed(2),
  /**
   * Returns `BigNumber` object from given `CurrencyAmount`
   * @param {string} arg - `CurrencyAmount`
   * @returns {BigNumber}
   */
  $: (arg: string): BigNumber => new BigNumber(C.isNumber(arg) ? arg : arg ? arg.replace(',', '.').replace(/[^0-9.\-]/g, '') : 0),
  /**
   * Multiplies given `CurrencyAmount` with given multiplier
   * @param {string} multiplier - value to multiply with
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  times: (multiplier: string, amount: string): string =>
    `${C.$(amount)
      .times(C.$(multiplier))
      .toFixed(2)} ${C.$c(amount)}`.trim(),
  /**
   * Multiplies given `CurrencyAmount` with given multiplier
   * @param {string} multiplier - value to multiply with
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  times_: (multiplier: string) => (amount: string): string => C.times(multiplier, amount),
  /**
   * Sums given `CurrencyAmount`'s in same currency
   * @param {string} currencyAmount1 - `CurrencyAmount`
   * @param {string} currencyAmount2 - `CurrencyAmount`
   * @returns {string}
   */
  sum: (currencyAmount1: string, currencyAmount2: string): string => {
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
  /**
   * Subtracts given `CurrencyAmount`'s in same currency
   * @param {string} currencyAmount1 - `CurrencyAmount`
   * @param {string} currencyAmount2 - `CurrencyAmount`
   * @returns {string}
   */
  subtract: (currencyAmount1: string, currencyAmount2: string): string => {
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
  /**
   * Returns absolute value of given `CurrencyAmount`
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  abs: (amount: string): string =>
    `${C.$(amount)
      .abs()
      .toFixed(2)} ${C.$c(amount)}`,
  /**
   * Returns zero value `CurrencyAmount` in given currency. If no currency in `CurrencyAmount` returns zero string.
   * @param {string} amount - `CurrencyAmount`
   * @returns {string}
   */
  zero: (amount: string): string => {
    const c = C.$c(amount)
    return c ? `0 ${c}` : '0' // or maybe should we preserve a decimal point?
  },
  /**
   * Returns `true` if value of `amount1` is greater than value of `amount2`.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {boolean | undefined}
   */
  gt: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).gt(C.$(amount2)),
  /**
   * Returns `true` if value of `amount1` is greater or equal value of `amount2`.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {boolean | undefined}
   */
  gte: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).gte(C.$(amount2)),
  /**
   * Returns `true` if value of `amount1` is less than value of `amount2`.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {boolean | undefined}
   */
  lt: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).lt(C.$(amount2)),
  /**
   * Returns `true` if value of `amount1` is less or equal value of `amount2`.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {boolean | undefined}
   */
  lte: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).lte(C.$(amount2)),
  /**
   * Returns `true` if value of `amount1` is equal to value of `amount2`.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {boolean | undefined}
   */
  eq: (amount1: string, amount2: string): boolean | undefined =>
    C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).eq(C.$(amount2)),
  /**
   * Returns `true` if value of `amount` is not equal zero`.
   * @param {string} amount - `CurrencyAmount`
   * @returns {boolean}
   */
  ne0: (amount: string): boolean => amount && !C.$(amount).eq(0),
  /**
   * Returns `true` if value of `amount` is greater than zero.
   * @param {string} amount - `CurrencyAmount`
   * @returns {boolean}
   */
  gt0: (amount: string): boolean => C.$(amount).gt(0),
  /**
   * Compares given `CurrencyAmount`'s.
   * Returns `1` if the value of `amount1` is greater than the value of `amount2`
   * Returns `0` if the value of `amount1` is the same as value of `amount2`
   * Returns `1` if the value of `amount1` is less than the value of `amount2`
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {number | undefined}
   */
  compare: (amount1: string, amount2: string): number | undefined =>
    (C.$c(amount1) !== C.$c(amount2) ? undefined : C.$(amount1).comparedTo(C.$(amount2))),
  /**
   * Returns `CurrencyAmount` whose value is the maximum of the arguments.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {string | undefined}
   */
  max: (amount1: string, amount2: string): string | undefined =>
    !amount1
      ? amount2
      : !amount2
      ? amount1
      : C.$c(amount1) !== C.$c(amount2)
        ? undefined
        : C.$(amount1).gt(C.$(amount2))
          ? amount1
          : amount2,
  /**
   * Returns `CurrencyAmount` whose value is the maximum of the arguments.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {string | undefined}
   */
  max_: (amount1: string) => (amount2: string): string | undefined => C.max(amount1, amount2),
  /**
   * Returns `CurrencyAmount` whose value is the minimum of the arguments.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {string | undefined}
   */
  min: (amount1: string, amount2: string): string | undefined =>
    !amount1
      ? amount2
      : !amount2
      ? amount1
      : C.$c(amount1) !== C.$c(amount2)
        ? undefined
        : C.$(amount1).gt(C.$(amount2))
          ? amount2
          : amount1,
  /**
   * Returns `CurrencyAmount` whose value is the minimum of the arguments.
   * If values are with different currencies, returns `undefined`.
   * @param {string} amount1 - `CurrencyAmount`
   * @param {string} amount2 - `CurrencyAmount`
   * @returns {string | undefined}
   */
  min_: (amount1: string) => (amount2: string): string | undefined => C.min(amount1, amount2),
  HALF_UP: BigNumber.ROUND_HALF_UP,
}

export default C
