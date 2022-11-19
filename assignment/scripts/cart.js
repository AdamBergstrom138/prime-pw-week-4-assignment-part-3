console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named `basket` and set it to an empty array.
let basket = [];
const maxItems = 5;

/*
- Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)
*/
function isFull() {
    if (basket.length >= maxItems) {
        return true;
    } else {
        return false;
    }
}
/*
- Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added 

  Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false`
*/
function addItem(item) {
    if (isFull()){
        console.log('running addItem, basket is too full for:', item);
        return false;
    } else {
        console.log('running addItem:', item);
        basket.push(item);
        return true;
    }
}
//Test - Adding soda, cake, pizza, chips to basket.
console.log('Test - adding soda to basket.', addItem('soda'));
console.log('Test - adding cake to basket.', addItem('cake'));
console.log('Test - adding pizza to basket.', addItem('pizza'));
console.log('Test - adding chips to basket.', addItem('chips'));
console.log('Test - adding dip to basket.', addItem('dip'));
console.log('Test - adding fish to basket.', addItem('fish'));
console.log('Test - Basket should have 5 items.', basket);
/*
- Create a function called `listItems`. It should:
  - loop over the items in the `basket` array
  - console.log each individual item on a new line
*/
function listItems() {
    console.log('running listItems:')
    for (let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
    return true;
}
//Test - All items in the basket should each be listed on a new line.
console.log('Test - listItems:', listItems());
/*
- Create a function called `empty`. It should:
  - reset the `basket` to an empty array
*/
function empty() {
    console.log('running empty');
    basket = [];
    return true;
}
//Test - empty should return true and the basket should be empty.
console.log('Test - empty basket:', empty());
console.log('empty basket:', basket);