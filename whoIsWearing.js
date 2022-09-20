

/* let letters = ['a', 'b', 'c', 'd'];
console.log('letters', letters.length);

letters.push('e');
console.log('letters, with e', letters.length);

let char = 'something special'

function logLetters(letters) {
    for (let char of letters) {
        for (let n of [1, 2, 3]) {
            console.log('char', char)
        }
        console.log(char);
    }
}
logLetters(letters);

console.log('char', char);


const tiles = [];
//tiles = [{ tile: 'n', score: 5}]
tiles.push(
    {},
    {},
    {}
) */


let people = [
    {
        name: 'John',
        relationship: 'friend',
        age: 24,
        wearing: ['shirt', 'hat', 'pants']
    },
    {
        name: 'Sarah',
        relationship: 'unknown',
        wearing: ['gloves', 'pants', 'scarf']
    },
    {
        name: 'Naseem',
        relationship: 'Uncle',
        wearing: ['shoes', 'jacket', 'hat']
    }
];

// Return an array of the names of people
// wearing that item of clothing
function whoIsWearing(human, itemOfClothing) {
    let matchingPeople = [];
    // console.log('in whoIsWearing', people, itemOfClothing);

    for (let person of human) {

        // console.log('person', person);

        for (let item of person.wearing) {
            // console.log(`${person.name} is wearing ${item}`);

            // console.log('is it a match?', item === itemOfClothing);

            if (item === itemOfClothing) {
                // person.name
                console.log('it\'s a match!', person.name);
                matchingPeople.push(person.name);
                console.log(matchingPeople);
            }
        }
    }

    return matchingPeople;
}

let hatWearers = whoIsWearing(people, 'hat');
console.log('hatWearers are', hatWearers);

console.log('pant wearers are', whoIsWearing(people, 'pants'));

console.log('cardigan wearers are', whoIsWearing(people, 'cardigan'));

console.log('with no people', whoIsWearing([], 'hat'));
