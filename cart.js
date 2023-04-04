///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const calculateTotal = (cart) => {
    return cart.reduce((total,food) => {
        return total + food.price;
    }, 0);
}

console.log(calculateTotal(cart));
// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTottal, couponValue, tax) => {
    const totalWithTax = cartTottal * (1 + tax);
    const finalPrice = totalWithTax - couponValue;
    return finalPrice;
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
const customerOutline = {
    name: "name",
    phone: Number,
    email: "email",
    address:'adress'


       
}

/*
    TEXT ANSWER HERE
I chose name because you must be able to identify who an order belongs to. This will print as a stirng because we need to be able to read the name.
I chose phone number, because it allows the company to call the customer to a. let them know there order is ready, b. have the ability to contact the customer if any questions or concerns arise.
I chose email because it allows the company to send a recipt and/or tracking information
i chose address because the company must know where to deliver the food to.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Richard",
    phone: 801-456-7890,
    email: "richiscool@gmail.com",
    address: "3435 e shred road, Shredtown CO, 67890"
}