// Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system
// Declare an array prices using let and initialize it with at least five numerical values
let prices = [10.99, 15.50, 20.75, 5.99, 12.50];
console.log("Price List:", prices);
// Add a new price to the array
prices.push(18.25);
// Remove the first price from the array
prices.shift();
// Log the updated price list to the console
console.log("Updated Price List:", prices);

// Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities
// Declare an array orders with at least five numerical values representing quantities
let orders = [10, 25, 30, 15, 50];
console.log("Order List:", [...orders]);
// Increase the third order quantity by 5
orders[2] += 5;
// Calculate the total number of all orders
let totalOrders = orders.reduce((sum, order) => sum + order, 0);
// Log the updated array and total order count to the console
console.log("Updated Order List:", orders);
console.log("Total Order Count:", totalOrders);

// Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data
// Declare an object employee with properties: name, role, performanceScore, and isActive
let employee = {
    name: "John Doe",
    role: "Software Engineer",
    performanceScore: 85,
    isActive: true
};
console.log("Object Employee:", {...employee});
// Update the performanceScore property
employee.performanceScore = 92;
// Add a new property promotionEligible with a boolean value
employee.promotionEligible = employee.performanceScore > 90;
// Log the updated employee object to the console
console.log("Updated Object Employee:", employee);

// Task 4 - Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data
// Declare an array feedback containing at least three objects, each with properties: customerName, feedbackText, and rating
let feedback = [
    { customerName: "Alex", feedbackText: "Great service!", rating: 8 },
    { customerName: "Benny", feedbackText: "Good experience overall.", rating: 7 },
    { customerName: "Chris", feedbackText: "Could be better.", rating: 4 }
];
console.log("Feedback List:", [...feedback]);
// Add a new feedback object to the array
feedback.push({ customerName: "Devin", feedbackText: "Excellent support!", rating: 10 });
// Log the entire feedback list to the console
console.log("Updated Feedback List:", feedback);