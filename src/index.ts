import { type Node } from '#lib';

// Path alias doesn't seem to be what's causing the error.
declare module "#lib" {
    export interface Node {
        visitor: (node: Node) => unknown
    }
}

export { Node }