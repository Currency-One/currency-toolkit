import BigNumber from 'bignumber.js'

const C = {
  isNumber: (n) => Object.prototype.toString.call(n) === '[object Number]',
  tryParse: (str) => (!str || isNaN(str) ? undefined : C.$(str)),
  $c: (amount) => {
    const i = amount ? amount.lastIndexOf(' ') : -1
    return i < 0 ? '' : amount.substr(i + 1)
  },
  format00: (amount): string => `${C.$(amount).toFixed(2)} ${C.$c(amount)}`.trim(),
  value00: (amount): string => C.$(amount).toFixed(2),
  $: (arg) => new BigNumber(C.isNumber(arg) ? arg : arg ? arg.replace(',', '.').replace(/[^0-9.\-]/g, '') : 0),
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
