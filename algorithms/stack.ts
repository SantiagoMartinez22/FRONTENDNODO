class StackNumberNode {
    data: number;
    next: StackNumberNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class NumberStack {
    head: StackNumberNode | null;
    tail: StackNumberNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public push(data: number): void {
        const stackNode: StackNumberNode = new StackNode(data);
        if (this.tail) {
            this.tail.next = stackNode;
            this.tail = stackNode;
        } else {
            this.head = stackNode;
            this.tail = stackNode;
        }
        this.size++;
    }

    public pop(): number | null {
        if (!this.head) {
            return null; // La pila está vacía
        }

        const datas: number = this.tail!.data;

        if (this.head === this.tail) {
            // La pila tiene un solo elemento
            this.head = null;
            this.tail = null;
        } else {
            // Recorrer la lista hasta el penúltimo nodo
            let node: StackNumberNode = this.head;
            while (node.next !== this.tail) {
                node = node.next!;
            }

            node.next = null;
            this.tail = node;
        }

        this.size--;
        return datas;
    }
}

let stack: NumberStack = new Stack();
stack.push(2);
stack.push(5);
stack.push(3);
stack.push(8);

console.log("Elementos de la pila:");
while (stack.head != null) {
    console.log(stack.pop());
}

