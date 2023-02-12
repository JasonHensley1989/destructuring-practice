const user = {
    firstName: "Jason",
    country: "United States",
    todos: {
        1: "Learn Destructuring",
        2: "Spread Operators",
        3: "Constructors",
        4: "Getters and Setters",
    }
}

// let { 
//     firstname, 
//     location,
//     todos, 
//     todos:{a, b, c, d}
// } = user;

let { 
    firstName: name, 
    country: location1, 
    todos, 
    todos: { 1:a, 2:b, 3:c, 4:d },
} = user;
console.log(a, b, c, d);

// REMEMBER TO PUT REASSIGNMENTS WITH THE ORIGINAL FOLLOWED BY THE COLON AND NEW NAME