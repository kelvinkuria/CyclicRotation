/**
 * Finds the length of the longest gap of zeros in the binary representation of a given number.
 * @param {number} N - The input number.
 * @returns {number} - The length of the longest gap of zeros.
 */
function binaryGap(N) {
    // Validate if the input is a non-negative number
    if (typeof N !== 'number' || N < 0 || !Number.isInteger(N)) {
        throw new Error('Input must be a non-negative integer.');
    }
    
    // Convert the given number N to its binary representation
    let binaryString = N.toString(2);
    
    // Initialize variables to keep track of the maximum gap and the current gap
    let maxGapLength = 0; // This will store the maximum gap encountered
    let currentGapLength = 0; // This will store the current gap being calculated
    
    // Iterate through each digit of the binary representation
    for (let i = 0; i < binaryString.length; i++) {
        // Check if the current digit is '0'
        if (binaryString[i] === '0') {
            // If it's '0', increment the current gap
            currentGapLength++;
        } else {
            // If it's '1', update the maximum gap if the current gap is greater
            maxGapLength = Math.max(maxGapLength, currentGapLength);
            // Reset the current gap to 0 since we encountered '1'
            currentGapLength = 0; 
        }
    }
    
    // Return the maximum gap encountered in the binary representation
    return maxGapLength;
}
