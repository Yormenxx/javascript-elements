const groceries = ["Apples", "Bananas", "Carrots", "Dairy Milk", "Eggs", "Flour", "Grapes", "Honey"];
const findItem = ( item ) =>{
    for(let i = 0; i< groceries.length; i++){
        if(groceries[i]===item){
            console.log(`Item found ${item}`);
        }
    }
}
findItem("Grapes")