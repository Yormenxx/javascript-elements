// Una Lista Enlazada (Linked List) es una de las estructuras de datos fundamentales en la programación y la informática. Es una colección lineal de elementos de datos, donde el orden no está dado por su ubicación física en la memoria (como en un array), sino por punteros. Cada elemento en una lista enlazada se llama "nodo" y contiene dos partes principales: los datos y un puntero (o referencia) al siguiente nodo en la secuencia. En el caso de listas enlazadas dobles, cada nodo también contiene un puntero al nodo anterior.


class Node {

    constructor(value){
        this.head=value;
        this.next=null;
    }


}

class LinkedList{
    constructor(value){
        this.head= new Node(value);
        this.tail=this.head;
        this.length=1;
    }

    push(value){
        const newNode=new Node(value);
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        
    }
}

const myLinkedList=new LinkedList(10);
myLinkedList.push(5);
console.log(myLinkedList);














