/*A Generator Function is a special type of function that can pause its execution and later resume from where it left off. Instead of returning a single value, it returns an iterator object which can yield multiple values over time using the yield keyword. */

function* generator() {
    yield 'First value';
    yield 'Second value';
    return 'Done';
}
const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen2 = generator();
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next());

// infinite sequencer
function* infinite() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const generateInfinite = infinite();
console.log(generateInfinite.next().value);
console.log(generateInfinite.next().value);
console.log(generateInfinite.next().value);
console.log(generateInfinite.next().value);
console.log(generateInfinite.next().value);

// Generator with async

function* asyncG(){
    yield new Promise ((resolve)=> setTimeout(() => resolve('Async Value'), 100))
}
const gen3 = asyncG()

gen3.next().value.then(console.log)


// Iterators

