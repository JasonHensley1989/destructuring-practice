// const user = {
//     firstName: "Jason",
//     country: "United States",
//     todos: {
//         1: "Learn Destructuring",
//         2: "Spread Operators",
//         3: "Constructors",
//         4: "Getters and Setters",
//     }
// }

// let { 
//     firstname, 
//     location,
//     todos, 
//     todos:{a, b, c, d}
// } = user;

// let { 
//     firstName: name, 
//     country: location1, 
//     todos, 
//     todos: { 1:a, 2:b, 3:c, 4:d },
// } = user;
// console.log(a, b, c, d);

// REMEMBER TO PUT REASSIGNMENTS WITH THE ORIGINAL FOLLOWED BY THE COLON AND NEW NAME
// Create Array with list of values and use destructuring to destructure the values
// Add a nested array with any 5 values, to the destructuring while skipping second value, and forth
// const learningList = 
//     ["recursion", 
//     "nickelodeon", 
//     "closures", 
//     "hulu",
//     "Elohim",
//     ["Easy", "Medium", "Hard"]
    
    
//     ];

// let [ a,,b,,c, [d, e, f]] = learningList;

// console.log(d, e, f);

//  Final Project Test Object with a nested array

// const myBelongings = {
//     pet : "Doika",
//     professional: "computer",
//     hobbies: ["music", "art", "survival"]
// }

// let { pet, professional, hobbies: funTime, hobbies: [a, b, c] } = myBelongings;


// console.log(a, b, c);

// This is a successful example of using both of these togetjer

const myHobbies = [
    "music", "art", {
        survival: "hunting",
        building: "shelters",
        fishing: "trout",
        trapping: ["snakes", "mice", "beavers"]
    }
]

let  [ a, b, c ]  = myHobbies;

let { survival: survive, building, fishing, trapping } = c

let [ a1,, a2 ] = trapping;

console.log(a1, a2);

// final example multi layered deep for nesting action
// 100% 