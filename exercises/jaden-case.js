'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string) {
  let tab = string.split(' ');
  for (let i = 0; i < tab.length; i++) {
    let word = tab[i].split('');
    word[0] = word[0].toUpperCase();
    tab[i] = word.join('');
  }
  return tab.join(' ');
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('Je code'), 'Je Code')
assert.strictEqual(jadenCase('blabla'), 'Blabla')
assert.strictEqual(jadenCase('je suis un wilder'), 'Je Suis Un Wilder')
assert.strictEqual(jadenCase('tu es Sympa'), 'Tu Es Sympa')
// assert.fail('You must write your own tests')
// End of tests */
