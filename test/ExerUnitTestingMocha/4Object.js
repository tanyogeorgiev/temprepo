let sharedObject = require('../../Mocha Exercises/4Object').sharedObject
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
<input type="text" id="name">
<input type="text" id="income">
</div>`


describe('sharedObject', function(){
it('should property, should start as null', function (){
    expect(sharedObject.name).to.equal(null,"Name did not start with NULL")
})
it('should property, should start as null', function (){
    expect(sharedObject.income).to.equal(null,"Name did not start with NULL")
})



})