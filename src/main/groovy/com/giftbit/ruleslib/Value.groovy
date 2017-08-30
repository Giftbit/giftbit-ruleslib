package com.giftbit.ruleslib

import groovy.json.StringEscapeUtils

class Value {

    final static Value NULL = new Value(NullValue.instance)
    final static Value ZERO = new Value(0L)
    final static Value FALSE = new Value(false)
    final static Value TRUE = new Value(true)
    final static Value EMPTY = new Value([])

    final protected Object innerValue

    private Value(NullValue n) {
        innerValue = n
    }

    Value(Boolean b) {
        innerValue = b
    }

    Value(List<Value> v) {
        innerValue = v
    }

    Value(Double d) {
        innerValue = d
    }

    Value(BigDecimal d) {
        innerValue = d.doubleValue()
    }

    Value(Float f) {
        innerValue = f.doubleValue()
    }

    Value(Long ell) {
        innerValue = ell
    }

    Value(BigInteger i) {
        innerValue = i.longValue()
    }

    Value(Integer i) {
        innerValue = i.longValue()
    }

    Value(Short s) {
        innerValue = s.longValue()
    }

    Value(Byte b) {
        innerValue = b.longValue()
    }

    Value(String s) {
        innerValue = s
    }

    Value(Map<String, Value> m) {
        innerValue = m
    }

    /**
     * Turns Objects into Values where any unrepresentable value is
     * turned into NULL.  Lists and Maps of non-values are acceptable.
     */
    static Value fromObject(Object o) {
        if (o == null) {
            return NULL
        } else if (o instanceof Value) {
            return o as Value
        } else if (o instanceof Boolean || o instanceof String || o instanceof Number) {
            //noinspection GroovyAssignabilityCheck
            return new Value(o)
        } else if (o instanceof List) {
            return new Value((o as List).collect({ i -> fromObject(i) }))
        } else if (o instanceof Map) {
            Map<String, Object> m = o
            Map<String, Value> cleanMap = [:]
            for (String key in m.keySet()) {
                Object value = m[key]
                if (value == null) {
                    cleanMap[key] = NULL
                } else if (value instanceof Value) {
                    cleanMap[key] = value
                } else {
                    cleanMap[key] = fromObject(value)
                }
            }
            return new Value(cleanMap)
        }
        return NULL
    }

    boolean isBoolean() {
        return innerValue instanceof Boolean
    }

    boolean isString() {
        return innerValue instanceof String
    }

    boolean isList() {
        return innerValue instanceof List
    }

    boolean isMap() {
        return innerValue instanceof Map
    }

    boolean isNumber() {
        return innerValue instanceof Long || innerValue instanceof Double
    }

    boolean isNull() {
        return innerValue instanceof NullValue
    }

    Boolean asBoolean() {
        if (innerValue instanceof Boolean) {
            return innerValue as Boolean
        } else if (innerValue instanceof List) {
            return true
        } else if (innerValue instanceof Map) {
            return true
        } else if (innerValue instanceof Number) {
            return innerValue != 0L && innerValue != 0.0D
        } else if (innerValue instanceof NullValue) {
            return false
        } else if (innerValue instanceof String) {
            return (innerValue as String).length() != 0
        }
        throw new UnsupportedOperationException()
    }

    List<Value> asList() {
        if (innerValue instanceof Boolean) {
            return []
        } else if (innerValue instanceof List) {
            return innerValue as List
        } else if (innerValue instanceof Map) {
            return []
        } else if (innerValue instanceof Number) {
            return []
        } else if (innerValue instanceof NullValue) {
            return []
        } else if (innerValue instanceof String) {
            return []
        }
        throw new UnsupportedOperationException()
    }

    Map<String, Value> asMap() {
        if (innerValue instanceof Boolean) {
            return [:]
        } else if (innerValue instanceof List) {
            return [:]
        } else if (innerValue instanceof Map) {
            return innerValue as Map
        } else if (innerValue instanceof Number) {
            return [:]
        } else if (innerValue instanceof NullValue) {
            return [:]
        } else if (innerValue instanceof String) {
            return [:]
        }
        throw new UnsupportedOperationException()
    }

    def asNativeValue() {
        if (innerValue instanceof NullValue) {
            return null
        }
        return innerValue
    }

    Number asNumber() {
        if (innerValue instanceof Boolean) {
            return innerValue ? 1L : 0L
        } else if (innerValue instanceof List) {
            return 0L
        } else if (innerValue instanceof Map) {
            return 0L
        } else if (innerValue instanceof Number) {
            return innerValue as Number
        } else if (innerValue instanceof NullValue) {
            return 0L
        } else if (innerValue instanceof String) {
            if ((innerValue as String).indexOf('.') == -1) {
                try {
                    return Long.valueOf(innerValue as String)
                } catch (NumberFormatException ignored) {
                }
            }
            try {
                return Double.valueOf(innerValue as String)
            } catch (NumberFormatException ignored) {
            }
            return 0L
        }
        throw new UnsupportedOperationException()
    }

    String asString() {
        if (innerValue instanceof Boolean) {
            return innerValue.toString()
        } else if (innerValue instanceof List) {
            return '[' + (innerValue as List<Value>).collect({ v -> v.asString() }).join(', ') + ']'
        } else if (innerValue instanceof Map) {
            Map<String, Value> map = innerValue
            return '{' + map.keySet().collect({ key -> "${key}: ${map[key].asString()}" }).join(', ') + '}'
        } else if (innerValue instanceof Number) {
            return innerValue.toString()
        } else if (innerValue instanceof NullValue) {
            return ''
        } else if (innerValue instanceof String) {
            return innerValue as String
        }
        throw new UnsupportedOperationException()
    }

    @Override
    String toString() {
        if (innerValue instanceof Boolean) {
            return innerValue.toString()
        } else if (innerValue instanceof List) {
            return '[' + (innerValue as List<Value>).collect({ v -> v.toString() }).join(', ') + ']'
        } else if (innerValue instanceof Map) {
            Map<String, Value> map = innerValue
            return '{' + map.keySet().collect({ key -> "${key}: ${map[key].toString()}" }).join(', ') + '}'
        } else if (innerValue instanceof Number) {
            return innerValue.toString()
        } else if (innerValue instanceof NullValue) {
            return 'null'
        } else if (innerValue instanceof String) {
            return '"' + StringEscapeUtils.escapeJava(innerValue as String) + '"'
        }
        throw new UnsupportedOperationException()
    }
}
