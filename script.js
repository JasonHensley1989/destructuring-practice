console.log("Hello");

const user = {
    firstName: "Jason",
    country: "United States",
    todos: {
        1: "Learn Destructuring",
        2: "Spread Operators",
        3: "Constructors",
        4: "Getters and Setters"
    }
}

let { firstName, country, todos, todos:{a, b, c, d}} = user;

console.log(a);
