<a name="C"></a>

## C
<p>Currency Toolkit</p>

**Kind**: global constant  

* [C](#C)
    * [.tryParse(value)](#C.tryParse) ⇒ <code>BigNumber</code> \| <code>undefined</code>
    * [.isNumber(value)](#C.isNumber) ⇒ <code>boolean</code>
    * [.$c(amount)](#C.$c) ⇒ <code>string</code>
    * [.format00(amount)](#C.format00) ⇒ <code>string</code>
    * [.value00(amount)](#C.value00) ⇒ <code>string</code>
    * [.$(arg)](#C.$) ⇒ <code>BigNumber</code>

<a name="C.tryParse"></a>

### C.tryParse(value) ⇒ <code>BigNumber</code> \| <code>undefined</code>
<p>Tries to parse given value into BigNumber. If fails, returns undefined.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to parse.</p> |

<a name="C.isNumber"></a>

### C.isNumber(value) ⇒ <code>boolean</code>
<p>Checks if given value is Number.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>value to check.</p> |

<a name="C.$c"></a>

### C.$c(amount) ⇒ <code>string</code>
<p>Returns currency from given value. If no value, returns empty string.</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p>value in format <code>100.00 PLN</code>.</p> |

<a name="C.format00"></a>

### C.format00(amount) ⇒ <code>string</code>
<p>Formats given value into this format <code>100.00 PLN</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p>value in format <code>100 PLN</code>.</p> |

<a name="C.value00"></a>

### C.value00(amount) ⇒ <code>string</code>
<p>Formats given value into this format <code>100.00</code></p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | <p>value in format <code>100 PLN</code>.</p> |

<a name="C.$"></a>

### C.$(arg) ⇒ <code>BigNumber</code>
<p>Returns BigNumber object from given value</p>

**Kind**: static method of [<code>C</code>](#C)  

| Param | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | <p>value in format <code>100 PLN</code>.</p> |

