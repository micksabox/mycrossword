#!/usr/bin/env bun

import { calculateCluePoseidonHash } from '../lib/utils/hash';

const solution = process.argv[2];

if (!solution) {
  console.error('Usage: bun scripts/calculate-hash.ts <solution_string>');
  process.exit(1);
}

const hash = await calculateCluePoseidonHash(solution);
console.log(`Poseidon Hash for "${solution}": ${hash}`);

