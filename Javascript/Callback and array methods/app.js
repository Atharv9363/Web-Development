//============ The forEach Method ==============

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

 // numbers.forEach(function(el) {
 //     console.log(el);
 // })

// numbers.forEach(function(el) {
//     if(el%2 == 0){
//     console.log(el);
//     }
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand by me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

 // movies.forEach(function(movie){
 //     console.log(movie);
 // })

// movies.forEach(function(movie){
//     console.log(`${movie.title}- ${movie.score}/100 `);
// })


// ================ The Map method ===============
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

// const movies = [
//         {
//             title: 'Amadeus',
//             score: 99
//         },
//         {
//             title: 'Stand by me',
//             score: 85
//         },
//         {
//             title: 'Parasite',
//             score: 95
//         },
//         {
//             title: 'Alien',
//             score: 90
//         }
// ]

// const titles = movies.map(function(movie){
//     return movie.title;
// })


// ============== Arrow Function =================
    //without arrow function

    // const add = function(x,y){
    //     return x+y;
    // }

    //Using arrow function
    // const add = (x,y) => {
    //     return x + y;
    // }

    // const square = (x) => {
    //     return x * x;
    // }

    // const rollDie = () => {
    //     return Math.floor(Math.random() * 6) + 1;
    // }

    //Arrrow function implicit returns
    // implicit returns only works only when there is only one value/single expression 
    // const rollDie = () => (
    //     Math.floor(Math.random() * 6) + 1
    // )

    //we can do it this way also
    // const add = (a, b) => a + b

    // const movies = [
    //    {
    //         title: 'Amadeus',
    //         score: 99
    //     },
    //     {
    //         title: 'Stand by me',
    //         score: 85
    //     },
    //     {
    //         title: 'Parasite',
    //         score: 95
    //     },
    //     {
    //         title: 'Alien',
    //         score: 90
    //     }
    // ]

    // const newMovies = movies.map(movie =>(
    //     `${movie.title} - ${movie.score / 10}`
    // ))
                    //OR
    // const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)
                


//============== setTimeout and setInterval ===============

//1. setTimeout

// setTimeout(() => {
//     console.log("Hello!!");
// },3000)

// console.log("Hello ... ");
// setTimeout(() => {
//     console.log(".....are you still there?")
// }, 3000)

//2. setInterval

// setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);
// //To stop this we use clearInterval(id)


// =============== The filter method ================
//Creates a new array with all elements that pass th test implemented by the provided function

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// numbers.filter(n => {
//     return n === 4
// })

// numbers.filter(n => {
//     return n < 10
// })

// const movies = [
//      {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going on 30',
//         score: 35,
//         year: 2004
//     },
//     {
//         title: 'Stand by me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Jingle all the way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title:'Nothing Hill',
//         score: 77,
//         year:1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year:1979
//     }
// ]

// const goodMovies = movies.filter(movie =>{
//     return movie.score > 80;
// })
            //OR
// const goodMovies = movies.filter(movie => movie.score > 80)
// const goodTitles = goodMovies.map(m => m.title)
//             //OR
// movies.filter(m => m.score > 80).map(m => m.title);            

// const badMovies = movies.filter(movie => movie.score < 70)

// const recentMovies = movies.filter(m => 2000)

// ============== Some and Every methods ================
// //Every : tests whether all elements in the array pass the provided function. It returns a boolean value.

// const exams = [80,90,85,70,78,90,89,84,81,77]

// exams.every(score => score >= 75)



// //Some : similar to everry, but returns true if any of the array element pass the test function.

// exams.some(score => score >= 75)

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//     title: '13 Going on 30',
//             score: 35,
//             year: 2004
//         },
//         {
//             title: 'Stand by me',
//             score: 85,
//             year: 1986
//         },
//         {
//             title: 'Jingle all the way',
//             score: 71,
//             year: 1996
//         },
//         {
//             title: 'Parasite',
//             score: 95,
//             year: 2019
//         },
//         {
//             title:'Nothing Hill',
//             score: 77,
//             year:1999
//         },
//         {
//             title: 'Alien',
//             score: 90,
//             year:1979
//         }
// ]

// movies.some(movie => movie.year >= 2015);

// ============== Reduce Method =================

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices){
//     total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + price;
// })
            //OR
const total = prices.reduce((total, price) => total + price)


//Minimum price
const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

//Maximum price
const maxPrice = prices.reduce((min, price) => {
    if(price > min){
        return price;
    }
    return min;
})



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
    title: '13 Going on 30',
            score: 35,
            year: 2004
        },
        {
            title: 'Stand by me',
            score: 85,
            year: 1986
        },
        {
            title: 'Jingle all the way',
            score: 71,
            year: 1996
        },
        {
            title: 'Parasite',
            score: 95,
            year: 2019
        },
        {
            title:'Nothing Hill',
            score: 77,
            year:1999
        },
        {
            title: 'Alien',
            score: 90,
            year:1979
        }
]

const highestRated = movies.reduce((bestMovie, currMovie) =>{
    if (currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})

const evens = [2,3,6,8];
evens.reduce((sum,num) => sum + num, 100);