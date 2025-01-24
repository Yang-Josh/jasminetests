// Make a function that says things in a tone

function say_things (tone, ...things){
    return (`In a ${tone} tone I say, ${things.join(" ")}"`);
}

console.log(say_things("excited", "Happy Friday"));