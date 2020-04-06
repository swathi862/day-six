function JS () {
    console.log("I love JavaScript!");
}

JS();

function vacation(name, destination) {
    console.log(`${name} would love to visit ${destination}.`)
}

vacation("Livvy", "the Bahamas");
vacation("Natalie", "Thailand");
vacation("Nick", "Zimbabwe");

function tacoTruck(typeOfShell, topping) {
    var order = `Your ${typeOfShell} taco with ${topping} is ready!`;
    return order;
}

// var order1 = tacoTruck("soft shell", "potatoes");
// console.log(order1);

console.log(tacoTruck("soft shell", "potatoes"));