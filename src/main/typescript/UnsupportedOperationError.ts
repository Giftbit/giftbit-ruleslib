export class UnsupportedOperationError extends Error {

    constructor(msg?: string) {
        super(msg || "Unsupported operation");
    }
}
