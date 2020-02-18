'use strict'
import mocha from 'mocha'
const {describe, it} = mocha
import chai from 'chai'
const {expect} = chai
import executeModule from './execute-module.mjs'

describe('same-but-different (unit)', function() {
  it('cjs-main.js', async () => {
    expect(await executeModule('same-but-different/cjs-main.js')).to.eql(['9', '5'])
  })
})
