<a name="C"></a>

## C
<p>Currency Toolkit</p>
<p><code>CurrencyValue</code> - value in format like <code>100 PLN</code>, <code>123.45 EUR</code></p>

**Kind**: global constant  

* [C](#C)
    * [.tryParse(value)](#C.tryParse) ⇒ <code>BigNumber</code> \| <code>undefined</code>
    * [.isNumber(value)](#C.isNumber) ⇒ <code>boolean</code>
    * [.$c(amount)](#C.$c) ⇒ <code>string</code>
    * [.format00(amount)](#C.format00) ⇒ <code>string</code>
    * [.value00(amount)](#C.value00) ⇒ <code>string</code>
    * [.$(arg)](#C.$) ⇒ <code>BigNumber</code>
    * [.times(multiplier, amount)](#C.times) ⇒ <code>string</code>
    * [.sum(currencyAmount1, currencyAmount2)](#C.sum) ⇒ <code>string</code>
    * [.subtract(currencyAmount1, currencyAmount2)](#C.subtract) ⇒ <code>string</code>

<a name="C.tryParse"></a>

### C.tryParse(value) ⇒ <code>BigNumber</code> \| <code>undefined</code>
<p>Tries to parse given value into BigNumber. If fails, returns undefined.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to parse</p> |

<a name="C.isNumber"></a>

### C.isNumber(value) ⇒ <code>boolean</code>
<p>Checks if given value is Number.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check</p> |

<a name="C.$c"></a>

### C.$c(amount) ⇒ <code>string</code>
<p>Returns currency from given <code>CurrencyValue</code>. If no value, returns empty string.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyValue</code></p> |

<a name="C.format00"></a>

### C.format00(amount) ⇒ <code>string</code>
<p>Formats given <code>CurrencyValue</code> into this format <code>100.00 PLN</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyValue</code></p> |

<a name="C.value00"></a>

### C.value00(amount) ⇒ <code>string</code>
<p>Formats given <code>CurrencyValue</code> into this format <code>100.00</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyValue</code></p> |

<a name="C.$"></a>

### C.$(arg) ⇒ <code>BigNumber</code>
<p>Returns BigNumber object from given <code>CurrencyValue</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | <p><code>CurrencyValue</code></p> |

<a name="C.times"></a>

### C.times(multiplier, amount) ⇒ <code>string</code>
<p>Multiplies given <code>CurrencyValue</code> with given multiplier</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| multiplier | <code>string</code> | <p>value to multiply with</p> |
| amount | <code>string</code> | <p><code>CurrencyValue</code></p> |

<a name="C.sum"></a>

### C.sum(currencyAmount1, currencyAmount2) ⇒ <code>string</code>
<p>Sums given <code>CurrencyValue</code>'s in same currency</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| currencyAmount1 | <code>string</code> | <p><code>CurrencyValue</code></p> |
| currencyAmount2 | <code>string</code> | <p><code>CurrencyValue</code></p> |

<a name="C.subtract"></a>

### C.subtract(currencyAmount1, currencyAmount2) ⇒ <code>string</code>
<p>Subtracts given <code>CurrencyValue</code>'s in same currency</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| currencyAmount1 | <code>string</code> | <p><code>CurrencyValue</code></p> |
| currencyAmount2 | <code>string</code> | <p><code>CurrencyValue</code></p> |

