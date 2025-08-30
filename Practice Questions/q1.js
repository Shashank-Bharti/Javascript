// String reversal

// reverse a single word

let s = "string"
let reversedString = s.split('').reverse().join('')
console.log(reversedString);

// Reverse a sentence

let s1 = "I am a sentence"
let reversedSentence = s1.split(' ').reverse().join(' ')
console.log(reversedSentence);

// Reverse each 

let s2 = "I am a sentence"
let revString = s2.split(' ')
                .map(word => word.split('').reverse().join(''))
            
            .join(' ')
            console.log(revString);
            

