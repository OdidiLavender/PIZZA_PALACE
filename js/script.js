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


// Loops over each pizza and adds image to type
pizzas.forEach(function(pizza){
    $('#' + pizza.id + '-btn').click(function(){
        $('#pizza-img').prepend('<img src=' + pizza.img + ' id=' + pizza.id + '>');

        $('#pizza-name').prepend('<h2 id=pepperoni-title>' + pizza.name + '</h2>');

        $('#initial-price-pre-text').append('<h2 id="initial-price-text"> Ksh. ' + pizza.price + '</h2>');

        pizzaPrice = pizza.price;
        pizzaName = pizza.name;
    });
    $("#myModal").on('hidden.bs.modal', function(){
        $('#' + pizza.id).remove();

        $('#' + pizza.id + '-title').remove();

        $('#initial-price-text').remove();

    });

});

$("#calculate").click(function(){
    $(".title").show();
});

$("form").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var crust = $("#select-crust").val();
    var quantity = $("#quantity").val();
    var orderType = $("#order-type").val();
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var emailAddress = $("#email-address").val();
    var phoneNumber = $("#phone").val();
    var county = $("#county").val();
    var address = $("#address").val();

    var newName = new Contact(firstName, lastName, phoneNumber, emailAddress, address);

    var newPizza = new Pizza(size, quantity, crust, orderType);

    var deliveryFee = 250;


         // var newAddress = new Address(county, address);

        // newName.address.push(newAddress);

        // alert(newPizza.orderType);

        // ### LARGE ###
        // dine
        if (newPizza.size === "large" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300));
        }else if (newPizza.size === "large" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 100));
        }else if (newPizza.size === "large" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 200));
        }


