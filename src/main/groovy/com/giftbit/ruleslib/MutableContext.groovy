package com.giftbit.ruleslib

import com.giftbit.ruleslib.functions.Function

class MutableContext implements Context {

    private final Map<String, Function> functions = new HashMap<>()
    private final Map<String, Value> values = new HashMap<>()

    MutableContext(Map<String, Function> functions = [:], Map<String, Value> values = [:]) {
        this.functions.putAll(functions)
        this.values.putAll(values)
    }

    @Override
    Function getFunction(String name) {
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

    void addFunction(String name, Function fxn) {
        functions[name] = fxn
    }

    void addValue(String identifier, Value value) {
        values[identifier] = value
    }
}
