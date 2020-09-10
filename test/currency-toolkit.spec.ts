import C from '../lib'

describe('Currency toolkit', () => {
  it('should parse and format numbers', () => {
    expect(C.$('5423.211 USD').toFixed(4)).toEqual('5423.2110')
    expect(C.$('5423 USD').toFixed(2)).toEqual('5423.00')
    expect(C.$('-10234.42 USD').toFixed(4)).toEqual('-10234.4200')
    expect(C.$('- 666.22 USD').toFixed(2)).toEqual('-666.22')
    expect(C.$('- 666 USD').toFixed(2)).toEqual('-666.00')
  })

  it('should format00 amounts', () => {
    expect(C.format00('1')).toEqual('1.00')
    expect(C.format00('-1')).toEqual('-1.00')
    expect(C.format00('1 USD')).toEqual('1.00 USD')
    expect(C.format00('-1 USD')).toEqual('-1.00 USD')
    expect(C.format00('- 666 USD')).toEqual('-666.00 USD')
  })

  it('should currency format00 amounts', () => {
    expect(C.currencyFormat00('1')).toEqual('1,00')
    expect(C.currencyFormat00('-1')).toEqual('-1,00')
    expect(C.currencyFormat00('1 USD')).toEqual('1,00 USD')
    expect(C.currencyFormat00('-1 USD')).toEqual('-1,00 USD')
    expect(C.currencyFormat00('- 666 USD')).toEqual('-666,00 USD')
  })

  it('should sum amount strings', () => {
    const sum = C.sum_('124.56 EUR')
    expect(C.sum('130.97 EUR', '204.05 EUR')).toEqual('335.02 EUR')
    expect(C.sum('100.00 EUR', '-200.00 EUR')).toEqual('-100.00 EUR')
    expect(sum('108.56 EUR')).toEqual('233.12 EUR')
  })

  it('should subtract amount strings', () => {
    expect(C.subtract('100.03 EUR', '200.02 EUR')).toEqual('-99.99 EUR')
    expect(C.subtract('100.00 EUR', '-200.00 EUR')).toEqual('300.00 EUR')
  })

  it('should return currency of amount string', () => {
    expect(C.$c('123 CHF')).toEqual('CHF')
    expect(C.$c(' - 123 CHF')).toEqual('CHF')
    expect(C.$c('123.3')).toEqual('')
    expect(C.$c('')).toEqual('')
  })

  it('should return amount of currency amount string', () => {
    expect(C.$a('123 CHF')).toEqual('123')
    expect(C.$a(' - 123 CHF')).toEqual(' - 123')
    expect(C.$a('123.3')).toEqual('')
    expect(C.$a('')).toEqual('')
  })

  it('should return absolute payout amount', () => {
    expect(C.abs('-10234.42 USD')).toEqual('10234.42 USD')
    expect(C.abs('- 665.44 EUR')).toEqual('665.44 EUR')
  })

  it('should verify if string is a number', () => {
    expect(C.isNumber(Number('10234.42'))).toBeTruthy()
    expect(C.isNumber('10234.42')).toBeFalsy()
  })

  it('should make zero out of currency amount', () => {
    expect(C.zero('10 USD')).toEqual('0 USD')
    expect(C.zero('-10 CZK')).toEqual('0 CZK')
  })

  it('should check if one amount is greater than other', () => {
    expect(C.gt('10 USD', '9 USD')).toBeTruthy()
    expect(C.gt('9 USD', '10 USD')).toBeFalsy()
    expect(C.gt('10 USD', '10 USD')).toBeFalsy()
    expect(C.gt('10 USD', '9 GBP')).toBeUndefined()
  })

  it('should check if one amount is greater or equal than other', () => {
    expect(C.gte('10 USD', '9 USD')).toBeTruthy()
    expect(C.gte('9 USD', '10 USD')).toBeFalsy()
    expect(C.gte('10 USD', '10 USD')).toBeTruthy()
    expect(C.gte('10 USD', '9 GBP')).toBeUndefined()
  })

  it('should check if amount is greater than 0', () => {
    expect(C.gt0('10 USD')).toBeTruthy()
    expect(C.gt0('10')).toBeTruthy()
    expect(C.gt0('0 USD')).toBeFalsy()
    expect(C.gt0('0')).toBeFalsy()
  })

  it('should check if amount is greater than 0', () => {
    expect(C.ne0('10 USD')).toBeTruthy()
    expect(C.ne0('10')).toBeTruthy()
    expect(C.ne0('0 USD')).toBeFalsy()
    expect(C.ne0('0')).toBeFalsy()
  })

  it('should return max of two values', () => {
    const max = C.max_('20 USD')
    expect(C.max('10 USD', '9 CHF')).toBeUndefined()
    expect(C.max('9 USD', '10 USD')).toEqual('10 USD')
    expect(C.max('10 USD', '9 USD')).toEqual('10 USD')
    expect(C.max('10 USD', undefined)).toEqual('10 USD')
    expect(max('10 USD')).toEqual('20 USD')
  })

  it('should return min of two values', () => {
    const min = C.min_('20 USD')
    expect(C.min('10 USD', '9 CHF')).toBeUndefined()
    expect(C.min('9 USD', '10 USD')).toEqual('9 USD')
    expect(C.min('10 USD', '9 USD')).toEqual('9 USD')
    expect(C.min('10 USD', undefined)).toEqual('10 USD')
    expect(min('10 USD')).toEqual('10 USD')
  })

  it('should zero a value', () => {
    expect(C.zero('23.1')).toEqual('0')
    expect(C.zero('23.1 CHF')).toEqual('0 CHF')
  })

  it('should multiply two values', () => {
    const times = C.times_('4.5')
    expect(C.times('4.2', '10 USD')).toEqual('42.00 USD')
    expect(times('10 USD')).toEqual('45.00 USD')
  })
})
