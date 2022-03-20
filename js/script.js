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

