// RandomTextGenerator.js

// Function to generate random text
function generateRandomText() {
    // Array of words to choose from
    const words = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua.", "Ut", "enim", "ad", "minim", "veniam,", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat.", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur.", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident,", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum."];

    // Generate random text
    let randomText = "";
    for (let i = 0; i < 10; i++) {
        // Randomly choose words from the array
        const randomIndex = Math.floor(Math.random() * words.length);
        randomText += words[randomIndex] + " ";
    }

    return randomText;
}

// Example usage
console.log(generateRandomText());
