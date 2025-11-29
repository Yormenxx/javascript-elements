// Una Lista Enlazada (Linked List) es una de las estructuras de datos fundamentales en la programación y la informática. Es una colección lineal de elementos de datos, donde el orden no está dado por su ubicación física en la memoria (como en un array), sino por punteros. Cada elemento en una lista enlazada se llama "nodo" y contiene dos partes principales: los datos y un puntero (o referencia) al siguiente nodo en la secuencia. En el caso de listas enlazadas dobles, cada nodo también contiene un puntero al nodo anterior.


class Node {

    constructor(value) {
        this.head = value;
        this.next = null;
    }


}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

    }

    pop() {
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        return temp;
    }

    unshift() {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    shift() {
        if (!this.head) {
            return undefined;

        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return temp;

    }

    getFirts() {
        return this.head;
    }

    getLast() {

        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {

            if (!node.next) {
                return node;
            }

            node = node.next;

        }



    }


    get(index) {

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }



    }

    clear() {
        this.head = null;
    }

    set(index, value) {
        let temp = this.get(index);
        console.log("----------", temp);

        if (temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    size() {

        let counter = 0;
        let node = this.node;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        const newNode = new Node(value);

        const temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
console.log(myLinkedList);














