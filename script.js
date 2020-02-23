//  JAVASCRIPT METHODS

// exercise 1
// var car = {
//     make: "Dolorian",
//     color: "grey",
//     year: "The hip 80s",
//     driver: "Dr. Emmett Brown",
//     quote: function(){
//         console.log("I sent him Back To The FUTURE!!!")
//     }
// }
// console.log(car.make,car.color,car.year,car.driver)
// console.log(car.quote())

// exercise 2
// A name ("Dennis", "Stacy", "Flapjack", etc)
// A species (bird, lizard, cat, etc)
// An array that contains the pet's favorite things
// A method called vocalize that logs to the console whatever sound you think that animal would make.
// Call the vocalize method for each animal.

// var PetShopInfo1 ={
//     PetOwner: "Scary Larry",
//     Species: "Lizard",
//     PetsFavs: ["Bugs","Moles","Stink Chedder"],
//     Vocalize: function(){
//     console.log("slither slither slither")
// }
// }
// var PetShopInfo2 ={
//     PetOwner: "Scary Mary",
//     Species: "SnakePeople",
//     PetsFavs: ["Rats","Bats","Cats"],
//     Vocalize: function(){
//     console.log("slurp slurp slurp")
// }
// }
// var PetShopInfo3 ={
//     PetOwner: "Scary Jerry",
//     Species: "Wombat",
//     PetsFavs: ["Ants","Worms","Fruit"],
//     Vocalize: function(){
//     console.log("Jiggle Wiggle Wiggle")
// }
// }
// console.log(PetShopInfo1.Vocalize())
// console.log(PetShopInfo2.Vocalize())
// console.log(PetShopInfo3.Vocalize())

// exercise 3
//  var jordanContactInfo = {
//      name: "Jordan Castelloe",
//      cell: "(999) 999-9999",
//      email: "jordan.123@gmail.com",
//      address: "123 Sesame St",
//      callCellPhone: function(){
//         console.log(`${this.name} is now calling ${jordanContactInfo.cell}`);
//       },
//       emailAddress: function(){
//         console.log(`${this.name} has sent you an E-mail ${jordanContactInfo.email}`);
//       },
//       mailing: function(){
//         console.log(`${this.name} has sent you a letter in your postbox ${jordanContactInfo.address}`);
//       }

//  }
//  console.log(jordanContactInfo.callCellPhone())
//  console.log(jordanContactInfo.emailAddress())
//  console.log(jordanContactInfo.mailing())

//  var larryContactInfo = {
//      name: "Larry MoonPie",
//      cell: "(888) 888-888",
//      email: "Larry.123@gmail.com",
//      address: "123 Larry St",
//      callCellPhone: function(){
//        console.log(`${this.name} is now calling ${larryContactInfo.cell}`);
//      },
//      emailAddress: function(){
//         console.log(`${this.name} has sent you an E-mail ${larryContactInfo.email}`);
//       },
//       mailing: function(){
//         console.log(`${this.name} has sent you a letter in your postbox ${larryContactInfo.address}`);
//       }
//  }
//  console.log(larryContactInfo.callCellPhone())
//  console.log(larryContactInfo.emailAddress())
//  console.log(larryContactInfo.mailing())

//  var steveContactInfo = {
//      name: "Steve Mcgirk",
//      cell: "(777) 777-7777",
//      email: "Steve.123@gmail.com",
//      address: "123 Steve St",
//      callCellPhone: function(){
//        console.log(`${this.name} is now calling ${steveContactInfo.cell}`);
//      },
//      emailAddress: function(){
//         console.log(`${this.name} has sent you an E-mail ${steveContactInfo.email}`);
//       },
//       mailing: function(){
//         console.log(`${this.name} has sent you a letter in your postbox ${steveContactInfo.address}`);
//       }
//  }
//  console.log(steveContactInfo.callCellPhone())
//  console.log(steveContactInfo.emailAddress())
//  console.log(steveContactInfo.mailing())

// exercise 4
// var shoppingCart = {
//     items: [
//       {
//         name: "Bananas",
//         totalPrice: 2.75
//       },
//       {
//         name: "English Muffins",
//         totalPrice: 3.99
//       },
//       {
//         name: "Peanut Butter",
//         totalPrice: 2.99
//       }
//     ],
//     addToCart: function(addItem){
//        shoppingCart.items.push(addItem)
//        console.log(shoppingCart.items)
//     },
//     calculateTotal: function(a,b,c){
//      return(a + b + c)

//     },
//     printShoppingCart: function(i){
// for(i=0;i<shoppingCart.items.length; i++){
//         console.log(shoppingCart.items[i])
// }
//     }
//   }
// console.log(shoppingCart.addToCart("BEEF"))
// console.log(shoppingCart.printShoppingCart())
// console.log(shoppingCart.calculateTotal(2.75,3.99,2.99))

// exercise 5
// Library System

// library= {
//     name: "Sir Read-A-Lot Library",
//     address: "123 Library Lane",
//     currentInventory: ["My sweet cupcake", "Little Plump One","Mad Hatter Tickle Games"]
// }
// patron = {
//     firstName: "Gereldine Toothrot",
//     lastName: " Mahooney",
//     checkedOutBooks: ["The Sweedish Meatball and Me","My love of Donkey Kong","The lil shrimp that could"],
//     overdueFees: [9.00,],

//     printBooks: function(){
//    for (i=0; i<patron.checkedOutBooks.length; i++){
//        console.log(patron.checkedOutBooks[i])
//    }
//     }
// }
// librarian ={
//     firstName: "Plumpy",
//     lastName: "JiggleWart",
//     checkOutBook: function(bookTitle,patronObject,libraryObject){
//  for(i=0; i<library.currentInventory.length; i++){
//     if(bookTitle == library.currentInventory[i]){
//         patron.checkedOutBooks.splice(2,0,bookTitle)
//     }
//  }
//     },

//   chargeFee: function(fee,patronObject){
//       for(i=0; i<patron.overdueFees; i++){
//      patron.overdueFees.push(fee)
//   }
// }
// }
// patron.printBooks()
// librarian.checkOutBook("My sweet cupcake")
// librarian.chargeFee(10)
// console.log(patron.checkedOutBooks)
// console.log(library.currentInventory)
// console.log(patron.overdueFees)