/* Question 20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

const indexOfHoney = shoppingCart.indexOf('Honey');
if (indexOfHoney !== -1) {
  shoppingCart.splice(indexOfHoney, 1);
}

const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
  shoppingCart[indexOfTea] = 'Green Tea';
}

console.log(shoppingCart);
