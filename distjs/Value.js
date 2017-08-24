"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnsupportedOperationError_1 = require("./UnsupportedOperationError");
function valueToString(v) {
    if (v === null) {
        return "";
    }
    else if (v === false) {
        return "false";
    }
    else if (v === true) {
        return "true";
    }
    else if (typeof v === "string") {
        return v;
    }
    else if (typeof v === "number") {
        return v.toString();
    }
    else if (Array.isArray(v)) {
        return `[${v.map(x => this.valueToString(x)).join(", ")}]`;
    }
    else if (typeof v === "object") {
        return "{" + Object.keys(v).map(key => `${key}: ${this.valueToString(v[key])}`).join(", ") + "}";
    }
    throw new UnsupportedOperationError_1.UnsupportedOperationError();
}
exports.valueToString = valueToString;
function valueToNumber(v) {
    if (v === null) {
        return 0;
    }
    else if (v === false) {
        return 0;
    }
    else if (v === true) {
        return 1;
    }
    else if (typeof v === "string") {
        return +v || 0;
    }
    else if (typeof v === "number") {
        return v;
    }
    else if (Array.isArray(v)) {
        return 0;
    }
    else if (typeof v === "object") {
        return 0;
    }
    throw new UnsupportedOperationError_1.UnsupportedOperationError();
}
exports.valueToNumber = valueToNumber;
