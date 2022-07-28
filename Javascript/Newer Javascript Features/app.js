// =============== Default Prams ===============
//old way
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

//new way
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`);
}


// ============== Spread ===============
/* Sread syntax allows an iterable such as an array to be expanded in places where zero
or more arguments or elements are expected, or an object expression to be expanded in places where
zero or more key-value pairs are expected. */

const nums = [1, 2, 3];
const nums2 = [4, 5, 6];


console.log(nums, nums2);
console.log(...nums);
console.log(...nums2);
console.log(...nums, ...nums2);

//We can use it for string also.

//====== Spread with Objects =======
/* Copies properties from one object into another object literal.*/

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// =============== Rest =================

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneelse) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneelse}`)
}

// ================== Destructuring arrays ====================
const scores = [92931, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

// const [gold, silver, bronze] = scores;

const [gold, silver, bronze, ...everyoneElse] = scores;


// =================== Destructuring Object ==================

const user = {
    email: 'harvey@gmail.com',
    password: 'aufui7877ahf',
    firstName: 'Atharv',
    lastName: 'Adsul',
    born: '2002',
    bio: 'Persuing CSE at DYPCET Kolhapur',
    city: 'Kolhapur',
    state: 'Maharashtra'
}

//old way 
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

//New way
const { email, firstName, lastName, city, bio, state } = user;

const { born: birthYear } = user;


// =================== Destructuring Params =================

// Before Destructuring
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// After Destructuring
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${user.firstName} ${user.lastName}`;
// }

// More simpler way
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}




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
        title: 'Nothing Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90)
//OR
//movies.filter((score) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
//OR
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
})