//1. ARRAY DESTRUCTURING

//Task 1: E-Commerce Product Details
const product=[ "Bag",3000,"Burgendy","Available"]
const [productname,price,color,availability]=product
console.log("----Product Details----")
console.log("Product Name :" + productname );
console.log("Price :" + price );
console.log("Color :" + color);
console.log("Availability :" + availability );

//Task 2: Restaurant Order Management
const order=["Noor","Pizza",2,2499,"cash"]
const [customername,fooditem,...orderdetails]=order
const [quantity,totalprice,payementType]=orderdetails
console.log("----Order Summary----")
console.log("Customer Name :" + customername)
console.log("Food item :" + fooditem)
console.log("Quantity :"+ quantity)
console.log("Total price :" + totalprice)
console.log("Payement Type :" + payementType)

//Task 3: Weather Application
const weather=["Karachi",32,"Sunny",65]
let [city,temp,condition,humidity]=weather;
[temp,humidity] = [humidity,temp];
console.log("----City Weather----")
console.log("City: " + city);
console.log("Temperature: " + temp);
console.log("Condition: " + condition);
console.log("Humidity: " + humidity);

const city2=["Peshawar"]
const [cityname,Temperature=23]=city2;
console.log("----- Another City -----");
console.log("City: " + cityname);
console.log("Temperature: " + Temperature);

//2. OBJECTS DESTRUCTURING

//Task 1: user profile
const user={
    name:"Noor-ul-ain",
    email:"noor2gmail.com",
    age:18,
    city:"Karachi",
    profession:"Frontend developer"
};
const {name,email,profession:jobTitle}=user;
console.log("----user profile----");
console.log("Name :" + name);
console.log("Email :" + email);
console.log("Profession :" +  jobTitle);

// Task 2: Checkout Summary
const customer = {
     namee: "Ahmed", 
     address: { 
        ciity: "Karachi",
         area: "Gulshan", 
         postalCode: 75300 
    },
      payment: { 
        method: "Cash on Delivery",
         status: "Pending" 
    } 
    };
const {namee,address: { ciity, area },payment: { method, status }} = customer    
console.log("---- Checkout Summary ----");
console.log("Customer Name: " + namee);
console.log("City: " + ciity);
console.log("Area: " + area);
console.log("Payment Method: " + method);
console.log("Payment Status: " + status);

//Task 3: Employee Profile 
const employee = {
    employeeName: "Sara",
    designation: "UI Designer",
    salary:80000
};
const {employeeName: nam, designation: jobtitle,salary,department = "Not Assigned"} = employee;
console.log("---- Employee Profile ----");
console.log("Name: " + nam);
console.log("Job Title: " + jobtitle);
console.log("Salary: Rs." + salary);
console.log("Department: " + department);


// 3. CALL-BACK FUNCTION
console.log("---callback function----")

//Task 1: Food Delivery Application
function placeorder(foodname,callback){
    console.log("your "+foodname+" order has been placed successfully!");
    callback();
}
function orderconfirm(){
    console.log("thank you for ordering!");
}
placeorder("Burger", orderconfirm);

//Task 2:Payment Processing System
function processPayment(amount,callback){
     if (amount > 0) {
        callback("Payment Successful!");
    } 
    else {
        callback("Payment Failed! Invalid amount.");
    }
}
function paymentResult(message) {
    console.log(message);
}
processPayment(5000, paymentResult);

//Task 3: Student Result Management System
function calculateResult(studentName,marks,callback){
    if (marks >= 50) {
        callback(studentName + " has Passed!");
    }
    else {
        callback(studentName + " has Failed!");
    }
}
function displayResult(message) {
    console.log(message);
}
calculateResult("Noor", 75, displayResult);


//4. Higher-Order Functions
console.log("----Higher-Order Functions----")

//Task 1: E-Commerce Discount System
const prices = [1000, 2500, 4000, 5000, 8000];
const discountedPrices = prices.map(price => {
    return price - (price * 10 / 100);
});
console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);

//Task 2: Job Portal Filter Eligible Candidates
const candidates = [
    { name: "Ali", experience: 1 },
    { name: "Sara", experience: 3 },
    { name: "Ahmed", experience: 5 },
    { name: "Zara", experience: 2 },
    { name: "Usman", experience: 4 }
];
const shortlisted = candidates.filter(candidate => {
    return candidate.experience >= 3;
});
console.log("---- Shortlisted Candidates ----");
console.log(shortlisted);
console.log("Total Shortlisted Candidates: " + shortlisted.length);

//Task 3: Shopping Cart Total Calculator

const cart = [
    { product: "Shoes", price: 3000, quantity: 2 },
    { product: "Shirt", price: 1500, quantity: 3 },
    { product: "Watch", price: 5000, quantity: 1 }
];
const subtotals = cart.map(item => {
    return {
        product: item.product,
        subtotal: item.price * item.quantity
    };
});
const totalBill = subtotals.reduce((total, item) => {
    return total + item.subtotal;
}, 0);
console.log("---- Shopping Cart ----");
subtotals.forEach(item => {
    console.log(item.product + ": Rs. " + item.subtotal);
});
console.log("Final Bill: Rs. " + totalBill);
