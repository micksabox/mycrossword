import { poseidon2 } from 'poseidon-lite';

export const calculateCluePoseidonHash = (solution: string): string => {
  // Map solution characters to BigInts (using ASCII values)
  // Treat potential empty strings/undefined chars in a solution string as 0
  const inputs = solution
    .split('')
    .map((char) => BigInt(char ? char.charCodeAt(0) : 0));

  // Calculate the Poseidon hash iteratively using poseidon2
  // poseidon2 takes exactly two inputs.
  let currentHash = 0n; // Start with 0 (as BigInt)
  for (const input of inputs) {
    currentHash = poseidon2([currentHash, input]);
  }

  // Return the hash as a string
  return currentHash.toString();
};

