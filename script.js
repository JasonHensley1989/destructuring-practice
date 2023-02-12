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

// let { 
//     firstname, 
//     location,
//     todos, 
//     todos:{a, b, c, d}
// } = user;

let { firstName: name, country: location1, todos,  todos: { a, b, c, d }} = user;
console.log(location1, a);
