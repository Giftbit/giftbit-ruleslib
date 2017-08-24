export class AstError extends Error {

    constructor(public readonly line: number, public readonly character: number, public readonly expression: string, public readonly msg: string) {
        super(msg);
    }
}
