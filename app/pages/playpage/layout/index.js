'use strict'

const BigLet = require('biglet')
const path = require('path')

class LayoutPagelet extends BigLet {
  constructor () {
    super()
    this.root = __dirname
    this.name = 'bpmodule-layout'
    this.tpl = path.join(__dirname, './index.html')
  }
}

module.exports = LayoutPagelet
