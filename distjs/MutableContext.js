"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutableContext = void 0;
class MutableContext {
    constructor(functions, values = {}) {
        this.functions = functions;
        this.values = values;
    }
    getFunction(name) {
        return this.functions[name];
    }
    getValue(identifier) {
        if (this.values[identifier] !== undefined) {
            return this.values[identifier];
        }
        return null;
    }
}
exports.MutableContext = MutableContext;
