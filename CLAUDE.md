# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an Advent of Code solutions repository containing TypeScript implementations for daily programming challenges. The project is structured with yearly directories containing day-by-day solutions.

## Project Structure

```
2024/
├── day-1/
│   ├── inputData.ts     # Puzzle input data
│   ├── part-1/
│   │   └── index.ts     # Part 1 solution
│   └── part-2/
│       └── index.ts     # Part 2 solution
└── day-2/
    ├── inputData.ts     # Puzzle input data
    └── part-1/
        └── index.ts     # Part 1 solution
```

Each day's directory contains:

- `inputData.ts`: Exports the puzzle input data as constants
- `part-1/index.ts`: Solution for part 1 of the daily challenge
- `part-2/index.ts`: Solution for part 2 of the daily challenge (when available)

## Build Commands

- **Build**: `npm run start` (runs TypeScript compiler)
- **Development**: Code is compiled to `./dist` directory
- **Execution**: Run compiled JavaScript files from the dist folder

### Solution Pattern

Solutions are standalone TypeScript files that:

1. Import required data from `../inputData.js` (note .js extension for ES modules)
2. Implement algorithmic solutions using functional programming patterns
3. Output results via `console.log()`
4. Use TypeScript with strict mode enabled

### Common Patterns

- **Data Processing**: Array manipulation, sorting, filtering
- **Algorithms**: Mathematical calculations, recursive functions, iteration
- **Type Safety**: Strong typing with TypeScript interfaces and type annotations
- **ES Modules**: Import/export syntax with `.js` extensions in imports

## Development Notes

- TypeScript target: ES2015
- Module system: ES modules (`"type": "module"`)
- Strict TypeScript compilation enabled
- No testing framework - solutions output directly to console
- Each solution is self-contained and executable
