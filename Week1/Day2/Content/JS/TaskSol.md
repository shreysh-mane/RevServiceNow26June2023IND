- 3. 

```js

const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess = parseInt(prompt("Guess a number between 1 and 100:"));

let attempts = 1;

while (guess !== randomNumber) {
  if (guess > randomNumber) {
    guess = parseInt(prompt("Lower. Guess again:"));
  } else {
    guess = parseInt(prompt("Higher. Guess again:"));
  }
  attempts++;
}

alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);


```