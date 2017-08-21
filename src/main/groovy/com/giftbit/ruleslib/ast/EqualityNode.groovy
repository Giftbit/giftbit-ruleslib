package com.giftbit.ruleslib.ast

import com.giftbit.ruleslib.Context
import com.giftbit.ruleslib.NullValue
import com.giftbit.ruleslib.Value

class EqualityNode extends InfixNode {

    EqualityNode(ExpressionNode left, ExpressionNode right) {
        super(left, right)
    }

    @Override
    String getOperator() {
        return "=="
    }

    @Override
    Value getValue(Context context) {
        Value leftValue = left.getValue(context)
        Value rightValue = right.getValue(context)
        return new Value(compareValues(leftValue, rightValue))
    }

    /**
     * Check for loose equality matching the js algorithm.
     * see: https://developer.mozilla.org/en/docs/Web/JavaScript/Equality_comparisons_and_sameness
     */
    private static boolean compareValues(Value left, Value right) {
        if (left.innerValue instanceof Boolean) {
            if (right.innerValue instanceof Boolean) {
                return left.innerValue == right.innerValue
            } else if (right.innerValue instanceof List) {
                return left.asBoolean() == right.asBoolean()
            } else if (right.innerValue instanceof Map) {
                return false
            } else if (right.innerValue instanceof Number) {
                return left.asNumber() == right.innerValue
            } else if (right.innerValue instanceof NullValue) {
                return false
            } else if (right.innerValue instanceof String) {
                return left.asBoolean() == right.asBoolean()
            }
        } else if (left.innerValue instanceof List) {
            if (right.innerValue instanceof Boolean) {
                return left.asBoolean() == right.asBoolean()
            } else if (right.innerValue instanceof List) {
                if ((left.innerValue as List).size() != (right.innerValue as List).size()) {
                    return false
                }
                int size = (left.innerValue as List).size()
                for (int i = 0; i < size; i++) {
                    if (!compareValues((left.innerValue as List<Value>)[i], (right.innerValue as List<Value>)[i])) {
                        return false
                    }
                }
                return true
            } else if (right.innerValue instanceof Map) {
                return false
            } else if (right.innerValue instanceof Number) {
                return false
            } else if (right.innerValue instanceof NullValue) {
                return false
            } else if (right.innerValue instanceof String) {
                return false
            }
        } else if (left.innerValue instanceof Map) {
            if (right.innerValue instanceof Boolean) {
                return false
            } else if (right.innerValue instanceof List) {
                return false
            } else if (right.innerValue instanceof Map) {
                Map<String, Value> leftMap = left.innerValue as Map
                Map<String, Value> rightMap = right.innerValue as Map
                if (leftMap.size() != rightMap.size()) {
                    return false
                }

                Set<String> rightKeys = rightMap.keySet().collect()
                for (String key in leftMap.keySet()) {
                    if (!rightKeys.remove(key) || !compareValues(leftMap[key], rightMap[key])) {
                        return false
                    }
                }

                return rightKeys.empty
            } else if (right.innerValue instanceof Number) {
                return false
            } else if (right.innerValue instanceof NullValue) {
                return false
            } else if (right.innerValue instanceof String) {
                return false
            }
        } else if (left.innerValue instanceof Number) {
            if (right.innerValue instanceof Boolean) {
                return left.asNumber() == right.asNumber()
            } else if (right.innerValue instanceof List) {
                return false
            } else if (right.innerValue instanceof Map) {
                return false
            } else if (right.innerValue instanceof Number) {
                return left.innerValue == right.innerValue
            } else if (right.innerValue instanceof NullValue) {
                return false
            } else if (right.innerValue instanceof String) {
                return left.innerValue == right.asNumber()
            }
        } else if (left.innerValue instanceof NullValue) {
            if (right.innerValue instanceof Boolean) {
                return false
            } else if (right.innerValue instanceof List) {
                return false
            } else if (right.innerValue instanceof Map) {
                return false
            } else if (right.innerValue instanceof Number) {
                return false
            } else if (right.innerValue instanceof NullValue) {
                return true
            } else if (right.innerValue instanceof String) {
                return false
            }
        } else if (left.innerValue instanceof String) {
            if (right.innerValue instanceof Boolean) {
                return left.asBoolean() == right.asBoolean()
            } else if (right.innerValue instanceof List) {
                return false
            } else if (right.innerValue instanceof Map) {
                return false
            } else if (right.innerValue instanceof Number) {
                return left.asNumber() == right.innerValue
            } else if (right.innerValue instanceof NullValue) {
                return false
            } else if (right.innerValue instanceof String) {
                return left.innerValue == right.innerValue
            }
        }
        throw new UnsupportedOperationException()
    }
}
