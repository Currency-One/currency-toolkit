<a name="C"></a>

## C
<p>Currency Toolkit</p>
<p><code>CurrencyAmount</code> - value in format like <code>100 PLN</code>, <code>123.45 EUR</code></p>

**Kind**: global constant  

* [C](#C)
    * [.tryParse(value)](#C.tryParse) ⇒ <code>BigNumber</code> \| <code>undefined</code>
    * [.isNumber(value)](#C.isNumber) ⇒ <code>boolean</code>
    * [.$c(amount)](#C.$c) ⇒ <code>string</code>
    * [.format00(amount)](#C.format00) ⇒ <code>string</code>
    * [.value00(amount)](#C.value00) ⇒ <code>string</code>
    * [.$(arg)](#C.$) ⇒ <code>BigNumber</code>
    * [.times(multiplier, amount)](#C.times) ⇒ <code>string</code>
    * [.times_(multiplier, amount)](#C.times_) ⇒ <code>string</code>
    * [.sum(currencyAmount1, currencyAmount2)](#C.sum) ⇒ <code>string</code>
    * [.subtract(currencyAmount1, currencyAmount2)](#C.subtract) ⇒ <code>string</code>
    * [.abs(amount)](#C.abs) ⇒ <code>string</code>
    * [.zero(amount)](#C.zero) ⇒ <code>string</code>
    * [.gt(amount1, amount2)](#C.gt) ⇒ <code>boolean</code> \| <code>undefined</code>
    * [.gte(amount1, amount2)](#C.gte) ⇒ <code>boolean</code> \| <code>undefined</code>
    * [.lt(amount1, amount2)](#C.lt) ⇒ <code>boolean</code> \| <code>undefined</code>
    * [.lte(amount1, amount2)](#C.lte) ⇒ <code>boolean</code> \| <code>undefined</code>
    * [.eq(amount1, amount2)](#C.eq) ⇒ <code>boolean</code> \| <code>undefined</code>
    * [.gt0(amount)](#C.gt0) ⇒ <code>boolean</code>
    * [.compare(amount1, amount2)](#C.compare) ⇒ <code>number</code> \| <code>undefined</code>
    * [.max(amount1, amount2)](#C.max) ⇒ <code>string</code> \| <code>undefined</code>
    * [.max_(amount1, amount2)](#C.max_) ⇒ <code>string</code> \| <code>undefined</code>
    * [.min(amount1, amount2)](#C.min) ⇒ <code>string</code> \| <code>undefined</code>
    * [.min_(amount1, amount2)](#C.min_) ⇒ <code>string</code> \| <code>undefined</code>

<a name="C.tryParse"></a>

### C.tryParse(value) ⇒ <code>BigNumber</code> \| <code>undefined</code>
<p>Tries to parse given value into <code>BigNumber</code>. If fails, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to parse</p> |

<a name="C.isNumber"></a>

### C.isNumber(value) ⇒ <code>boolean</code>
<p>Returns <code>true</code> if given value is <code>Number</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check</p> |

<a name="C.$c"></a>

### C.$c(amount) ⇒ <code>string</code>
<p>Returns currency from given <code>CurrencyAmount</code>. If no value, returns empty string.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.format00"></a>

### C.format00(amount) ⇒ <code>string</code>
<p>Returns given <code>CurrencyAmount</code> in this format <code>100.00 PLN</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.value00"></a>

### C.value00(amount) ⇒ <code>string</code>
<p>Returns given <code>CurrencyAmount</code> in this format <code>100.00</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.$"></a>

### C.$(arg) ⇒ <code>BigNumber</code>
<p>Returns <code>BigNumber</code> object from given <code>CurrencyAmount</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.times"></a>

### C.times(multiplier, amount) ⇒ <code>string</code>
<p>Multiplies given <code>CurrencyAmount</code> with given multiplier</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| multiplier | <code>string</code> | <p>value to multiply with</p> |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.times_"></a>

### C.times\_(multiplier, amount) ⇒ <code>string</code>
<p>Multiplies given <code>CurrencyAmount</code> with given multiplier</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| multiplier | <code>string</code> | <p>value to multiply with</p> |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.sum"></a>

### C.sum(currencyAmount1, currencyAmount2) ⇒ <code>string</code>
<p>Sums given <code>CurrencyAmount</code>'s in same currency</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| currencyAmount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| currencyAmount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.subtract"></a>

### C.subtract(currencyAmount1, currencyAmount2) ⇒ <code>string</code>
<p>Subtracts given <code>CurrencyAmount</code>'s in same currency</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| currencyAmount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| currencyAmount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.abs"></a>

### C.abs(amount) ⇒ <code>string</code>
<p>Returns absolute value of given <code>CurrencyAmount</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.zero"></a>

### C.zero(amount) ⇒ <code>string</code>
<p>Returns zero value <code>CurrencyAmount</code> in given currency. If no currency in <code>CurrencyAmount</code> returns zero string.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.gt"></a>

### C.gt(amount1, amount2) ⇒ <code>boolean</code> \| <code>undefined</code>
<p>Returns <code>true</code> if value of <code>amount1</code> is greater than value of <code>amount2</code>.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.gte"></a>

### C.gte(amount1, amount2) ⇒ <code>boolean</code> \| <code>undefined</code>
<p>Returns <code>true</code> if value of <code>amount1</code> is greater or equal value of <code>amount2</code>.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.lt"></a>

### C.lt(amount1, amount2) ⇒ <code>boolean</code> \| <code>undefined</code>
<p>Returns <code>true</code> if value of <code>amount1</code> is less than value of <code>amount2</code>.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.lte"></a>

### C.lte(amount1, amount2) ⇒ <code>boolean</code> \| <code>undefined</code>
<p>Returns <code>true</code> if value of <code>amount1</code> is less or equal value of <code>amount2</code>.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.eq"></a>

### C.eq(amount1, amount2) ⇒ <code>boolean</code> \| <code>undefined</code>
<p>Returns <code>true</code> if value of <code>amount1</code> is equal to value of <code>amount2</code>.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.gt0"></a>

### C.gt0(amount) ⇒ <code>boolean</code>
<p>Returns <code>true</code> if value of <code>amount</code> is greater than zero.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.compare"></a>

### C.compare(amount1, amount2) ⇒ <code>number</code> \| <code>undefined</code>
<p>Compares given <code>CurrencyAmount</code>'s.
Returns <code>1</code> if the value of <code>amount1</code> is greater than the value of <code>amount2</code>
Returns <code>0</code> if the value of <code>amount1</code> is the same as value of <code>amount2</code>
Returns <code>1</code> if the value of <code>amount1</code> is less than the value of <code>amount2</code>
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.max"></a>

### C.max(amount1, amount2) ⇒ <code>string</code> \| <code>undefined</code>
<p>Returns <code>CurrencyAmount</code> whose value is the maximum of the arguments.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.max_"></a>

### C.max\_(amount1, amount2) ⇒ <code>string</code> \| <code>undefined</code>
<p>Returns <code>CurrencyAmount</code> whose value is the maximum of the arguments.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.min"></a>

### C.min(amount1, amount2) ⇒ <code>string</code> \| <code>undefined</code>
<p>Returns <code>CurrencyAmount</code> whose value is the minimum of the arguments.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

<a name="C.min_"></a>

### C.min\_(amount1, amount2) ⇒ <code>string</code> \| <code>undefined</code>
<p>Returns <code>CurrencyAmount</code> whose value is the minimum of the arguments.
If values are with different currencies, returns <code>undefined</code>.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount1 | <code>string</code> | <p><code>CurrencyAmount</code></p> |
| amount2 | <code>string</code> | <p><code>CurrencyAmount</code></p> |

