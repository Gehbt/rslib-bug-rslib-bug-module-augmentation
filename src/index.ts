import { type Node } from '#lib';

declare module "#lib" {
    export interface Node {
        visitor: (node: Node) => unknown
    }
}

export { Node }