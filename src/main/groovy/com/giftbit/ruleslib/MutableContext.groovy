package com.giftbit.ruleslib

import com.giftbit.ruleslib.functions.RuleFunction

class MutableContext implements Context {

    private final Map<String, RuleFunction> functions = new HashMap<>()
    private final Map<String, Value> values = new HashMap<>()

    MutableContext(Map<String, RuleFunction> functions = [:], Map<String, Value> values = [:]) {
        this.functions.putAll(functions)
        this.values.putAll(values)
    }

    @Override
    RuleFunction getFunction(String name) {
        return functions[name]
    }

    @Override
    Value getValue(String identifier) {
        def value = values[identifier]
        if (value == null) {
            value = Value.NULL
        }
        return value
    }

    void addFunction(String name, RuleFunction fxn) {
        functions[name] = fxn
    }

    void addValue(String identifier, Value value) {
        values[identifier] = value
    }
}
