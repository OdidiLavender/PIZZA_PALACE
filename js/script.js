// Business Logic
// Name constructor
function Contact(first, last, phone, email, address){
    this.firstName = first;
    this.lastName = last;
    this.phoneNumber = phone;
    this.emailAddress = email;
    this.address = address;
}
// Name prototype
Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
// // Addresses constructor
// function Address(county, address){
//     this.county = county;
//     this.homeAddress = address;
// }

// // Addresses prototype
// Address.prototype.fullAddress = function(){
//     return this.homeAddress + ", " + this.county;
// }

// pizza constructor
function Pizza(size, quantity, crust, orderType){
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this.orderType = orderType;
}

Pizza.prototype.total = function(price){
    return price * this.quantity;
}
// UI Logic
$(document).ready(function(){

    var pizzas = [
        {name: "Pepperoni", id: "pepperoni", img: "./images/pepperoni.png", price: 950}, 
        {name: "Hawaiian", id: "hawaiian", img: "./images/hawaiian.png", price: 550}, 
        {name: "Margherita", id: "margherita", img: "./images/margherita.png", price: 450},
        {name: "Chicken Tikka", id: "chicken", img: "./images/chicken.png", price: 850},
        {name: "Sausage & Kale", id: "sausage", img: "./images/sausage.png", price: 650},
        {name: "Bbq Beef", id: "bbq", img: "./images/bbq.png", price: 750}
    ];

    var pizzaPrice;
    var pizzaName;



