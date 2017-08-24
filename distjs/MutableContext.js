"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MutableContext {
    constructor(functions, values = {}) {
        this.functions = functions;
        this.values = values;
    }
    getFunction(name) {
        return this.functions[name];
    }
    getValue(identifier) {
        if (this.values.hasOwnProperty(identifier)) {
            return this.values[identifier];
        }
        return null;
    }
}
exports.MutableContext = MutableContext;
