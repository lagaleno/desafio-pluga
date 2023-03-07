const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/context/(.*)$': '<rootDir>/src/context/$1',
        '^@/interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
        '^@/layout/(.*)$': '<rootDir>/src/layout/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
        
    }
}

module.exports = createJestConfig(customJestConfig)