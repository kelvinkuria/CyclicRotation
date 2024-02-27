function solution(A, K) {
    // Check if the array is empty or if rotation is unnecessary
    if (A.length === 0 || K % A.length === 0) {
        return A; // If so, return the original array
    }

    // Calculate the effective number of rotations needed
    const rotations = K % A.length;

    // Slice the array into two parts:
    // 1. Last 'rotations' elements
    // 2. Remaining elements
    const rotatedArray = A.slice(-rotations).concat(A.slice(0, A.length - rotations));

    return rotatedArray; // Return the rotated array
}



