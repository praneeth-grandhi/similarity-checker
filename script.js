const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const percentage = document.getElementById('percentage');

function checkSimilarity() {
    const value1 = word1.value.toLowerCase();
    const value2 = word2.value.toLowerCase();
    const maxLength = Math.max(value1.length, value2.length);

    let matchCount = 0;
    for (let i = 0; i < maxLength; i++) {
        if (value1[i] === value2[i]) {
            matchCount++;
        }
    }

    const similarityPercentage = (matchCount / maxLength) * 100;
    percentage.innerHTML = `Similarity: ${similarityPercentage.toFixed(2)}%`;
}
