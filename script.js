console.log("Guessing game in js");
console.log("To play this game you need to be at least 18 y.o");
const age = prompt("Enter your age");
const name = prompt("Enter your name")
console.log("Your age:", age);
console.log("Your name:", name);
if (age>=18) {
    console.log("You can try your luck :)");
    let min = 10;
    let max = 20;
    const guess = Math.floor(Math.random() * (max-min+1) +min)
    var count =0;
    do {
        count++;
        var user_guess = prompt("Enter your number")
        if (user_guess == guess) {
        console.log("Correct answer");
        }else {
            if (user_guess>guess) {
                console.log("Wrong! Number to high");
            } else {
                console.log("Wrong! Number to low");
            }
        }
        console.log("Your guess", user_guess);        
    } while (user_guess != guess);
        console.log("Number of tries:", count);

} else {
    console.log("You are not allowed to play this game, come back when you grow up :)");
}