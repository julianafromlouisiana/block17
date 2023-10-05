const coffeeMenu = require('./coffee_data.js');


//Print an array of all the drinks on the menu
// --Just the drink names
//--map function

const printNames = (item) => {
    return item.name;
}

const coffeeNames = coffeeMenu.map(printNames);
    console.log(coffeeNames);

    // Print array of drinks that cost 5 and Under
    // Filter Function
    // Filter Returns Boolean
    const fiveAndUnder = coffeeMenu.filter((item => {
        return item.price <= 5;
    }));
    console.log(fiveAndUnder.map(printNames));
// Print an array of drinks that are priced at an even #
// Filter Function
// ! Not Operator 

const evenPrice = coffeeMenu.filter((item) => {
    return item.price % 2 === 0;
});

    console.log(evenPrice.map(printNames));

    // Print the total if you bought one of every drink
    // Reduce Function
const orderTotal = coffeeMenu.reduce((acc, currentvalue) => {
   return acc + currentvalue.price;
},0);
   console.log(orderTotal);

// Print array of Seasonal Drinks
// Filter Seasonal

const seasonalDrinks = coffeeMenu.filter((item) => {
    return item.seasonal === true;
});
    console.table(seasonalDrinks);
    //console.log(seasonalDrinks.map(printNames));

// Print all the Seasonal Drinks by Name
// coffeeMenu.map((item) => {
//     console.log(`${item.name} with imported beans`);
// });
// //or console.log(`${item.name} with imported beans`):
//})

seasonalDrinks.map((item) => {
    console.log(`${item.name} with imported beans`);
});