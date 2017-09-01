export class AstError extends Error {

    constructor(public readonly row: number, public readonly column: number, public readonly expression: string, public readonly msg: string) {
        super(msg);
    }
}
