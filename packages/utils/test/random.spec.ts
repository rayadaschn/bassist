import { describe, expect, it } from 'vitest'
import { randomNumber, randomUserAgent } from '..'

console.log(randomUserAgent())
console.log(randomUserAgent())
console.log(randomUserAgent())

describe('randomNumber', () => {
  function inRange(value: number, min: number, max: number) {
    return value >= min && value <= max
  }

  it('Valid data', () => {
    expect(inRange(randomNumber(), 0, 100)).toBeTruthy()
    expect(inRange(randomNumber(-100, -50), -100, -50)).toBeTruthy()
  })
})
