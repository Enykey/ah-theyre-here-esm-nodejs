import mocha from 'mocha'
const {describe, it} = mocha
import chai from 'chai'
const {expect} = chai
import executeModule from './execute-module.mjs'

describe('esm-is-statically-parsed (unit)', function() {
  it('esm should not load if dependencies are bad', async () => {
    expect(
      await executeModule('04-esm-is-statically-parsed/module-with-bad-deps.mjs').catch(err =>
        err.toString().split('\n'),
      ),
    ).to.include(
      "SyntaxError: The requested module './greet.mjs' does not provide an export named 'greet'",
    )
  })
})