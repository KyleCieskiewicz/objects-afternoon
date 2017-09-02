// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here
var user = {
    name: 'Kyle',
    age: 29,
    password: 'jimbob'
}


// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here
user.email = 'jimbob@yahoo.com';
user.alertUser = function() {
    console.log(user.name);
}


// Now loop over your user object and alert each of the keys.

// Code Here
for (var key in user) {
    console.log(user[key]);
}


// Now loop over your user object and alert each of the values for each key.

// Code Here
for (var key in user) {
    console.log(key);
}


// Remove the username from your user object

// Code Here
delete user.name;


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

// Code Here
var creditCard = {
    number: 74758575,
    cvc: 876,
    type: 'Mastercard',
    limit: 5000
}


// Create a variable called alternating. Set it equal to the string bonusCategories.

// Code Here
var alternating = 'bonusCategories';


/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */

// Code Here

creditCard[alternating] = [{Oil: "3%"}, {Credit: "5%"}, {Debit: "2%"}];
creditCard.bank = {name: "Exxon", address: "E Mogul St"};


// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here
function objs(creditCard, user) {
    var obj = {};
    for (var key in creditCard) { obj[key] = creditCard[key]; }
    for (var key in user) { obj[key] = user[key]; }
    return obj;
}

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here
  function loop() {
    for (var key in obj.allies) {
        if (obj.allies[key] === 'LittleFinger') {
            obj.allies[key] = 'Dragon Lady';
        }
    }
    obj.alive = 'More than Ever';
    return obj;
}
  
