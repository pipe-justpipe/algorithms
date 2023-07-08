const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    length++;

    if (sentence[i] === ' ') {
      wordCount++;
    }

    const lowercaseChar = sentence[i].toLowerCase();
    if (lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u') {
      vowelCount++;
    }
  }

  wordCount++; // Account for the last word after the final space

  console.log('Length of the sentence:', length);
  console.log('Number of words:', wordCount);
  console.log('Number of vowels:', vowelCount);

  rl.close();
});
