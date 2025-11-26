class MyArray {


    constructor() {
        this.length = 0;
        this.data = {};

    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {

        return this.data[index]; 

    }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    shift(){
        const firsItem = this.data[0];
        
        for(let i = 0; i<this.length -1; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firsItem;

    }

    delete(itemIndex){
        const item = this.data[itemIndex];
        for(let i = itemIndex; i< this.length -1; i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}

const myArray = new MyArray();

console.log(myArray)

myArray.push("apple");
myArray.push("banana");
myArray.push("cherry");
// console.log(myArray)

console.log(myArray.get(0));
console.log(myArray.get(1));
console.log(myArray.get(2));

myArray.pop();
console.log(myArray)

console.log(myArray.get(0));
console.log(myArray.get(1));

console.log(myArray)

myArray.delete(1);
console.log(myArray)