function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      length++;
  
      if (char === ' ') {
        wordCount++;
      }
  
      const lowercaseChar = char.toLowerCase();
      if (lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u') {
        vowelCount++;
      }
    }
  
    wordCount++; // Account for the last word after the final space
  
    return {
      length: length,
      wordCount: wordCount,
      vowelCount: vowelCount
    };
  }
  
  // Example usage:
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const analysis = analyzeSentence(sentence);
  
  console.log('Length of the sentence:', analysis.length);
  console.log('Number of words:', analysis.wordCount);
  console.log('Number of vowels:', analysis.vowelCount);