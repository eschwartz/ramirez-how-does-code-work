console.log('In script.js');

// Computers never forget
//let myAnniversary = 'June 16, 2011';

// Declare
let myAnniversary;
// Assign
myAnniversary = 'June 16, 2011';



//                                             'June 16, 2011'
// console.log('When was my anniversary, again?', myAnniversary);


// Evaluation
// Computers compute
// let monthOfTheYear = 'June';        // camelCase
// let date = '16';
// let year = '2011';

let anniversaryDate = {
    month: 'June',
    date: '16',
    year: '2011',
    location: {                 // anniversaryDate.location
        city: 'Minneapolis',    // anniversaryDate.location.city
        state: 'MN'             // anniversaryDate.location.state
    },

    // 👇 anniversaryDate.attendees (array)
    attendees: [
        // 👇 anniversaryDate.attendees[0] (object)
        {
            name: 'John',
            relationship: 'friend',
            age: 24,
            // 👇 anniversaryDate.attendees[0].wearing
            wearing: ['shirt', 'hat', 'pants']
            // 👆 anniversaryDate.attendees[0].wearing[1]
        },
        {
            name: 'Sarah',
            relationship: 'unknown',
            wearing: ['gloves', 'pants', 'scarf']
        }
    ],
    moreStuff: [1, 2, 3, 4]
}

//              'June' + '16' + '2011';
//              'June162011'
//myAnniversary = month + date + year;
myAnniversary = `
    You anniversary is on ${anniversaryDate.month} ${anniversaryDate.date}, ${anniversaryDate.year}.
    Right smack in the middle of summer.

    We are using variable interpolation!
    We are in Week ${3 * 2}
`;
console.log('myAnniversary', myAnniversary);


console.log('state', anniversaryDate.location.state)



// camelCase
hoursToDriveToDuluth = 3;

if (hoursToDriveToDuluth > 2) {
    console.log('I will need a bathroom break');
    console.log('And I will buy snacks too');
}

// snake_case
// hours_to_drive_to_duluth = 3;    // Edan will judge you 

// SCREAMING_SNAKE_CASE
// UPPER_SNAKE_CASE
HOURS_TO_DRIVE_TO_DULUTH = 3;

// kebob-case
// hours-to-drive-to-duluth = 3;   // Breaks JS
// <button class="delete-btn">Delete me</button>


for (let person of anniversaryDate.attendees) {
    person.name; // 'John'

    for (let clothing of person.wearing){
        console.log(
            `${person.name} is wearing ${clothing}`
        )
    }
}



let person = {
    name: 'John',
    relationship: 'friend',
    age: 24,
    wearing: ['shirt', 'hat', 'pants']
};

let canJohnDrink = canTheyDrinkAtWedding(person);
console.log('canJohnDrink?', canJohnDrink);

// Input: a person
// Output: boolean (true/false)
function canTheyDrinkAtWedding(human) {
    // human = { name: 'Annie' }
    //  undefined >= 21
    if (human.age >= 21) {
        return true;
    }
    else {
        return false;
    }
}

//                                       { name: 'John', age: 24 }
//                 true
// canJohnDrink = true

let canAnnieDrink = canTheyDrinkAtWedding({
    name: 'Annie',
    //age: 8
});
console.log('canAnnieDrink', canAnnieDrink);


function isWordSilly(aWord) {
    let sillyWords = ['squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah'];

    sillyWords.forEach()

    for (let oneSillyWord of sillyWords) {
    // for (let i = 0; i < sillyWords.length; i++) {
    //     let oneSillyWord = sillyWords[i];
        if (oneSillyWord === aWord) {
            return true;
        }
        else {
            return false;
        }
    }

    return false;
} 

isWordSilly('banana');
isWordSilly('barnacle');