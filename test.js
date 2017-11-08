const expect = require('chai').expect
const myFunc = require('../src/main');

let whiteBoard = [{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}];

//User should be able to add list items to the "white board", edit items already existing on the board, and remove items already existing on the board.

describe("add item", function () {
  it("should be able to add list items to the 'white board'", function () {
     let whiteBoard = [{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}];
     let markerColor = 'black';
     //add 'find lost dog' to white board
     myFunc.addItem(whiteBoard, 'find lost dog');
     expect(whiteBoard).to.deep.equal([{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}, {text: 'find lost dog', color: 'black', smudged: false}]);
  })
})

describe("edit item", function () {
  it("should be able to edit items already existing on the board", function () {
     let whiteBoard = [[{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}];
     //edit 'wash car' item to read 'have party' instead
     myFunc.editItem('wash car', 'have party');
     expect(whiteBoard).to.deep.equal([{text:'have party', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}]);
  })
})

describe("remove item", function () {
  it("should be able to remove items already existing on the board", function () {
     let whiteBoard = [{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}];
     //remove 'cook food' item
     myFunc.removeItem('cook food');
     expect(whiteBoard).to.deep.equal([{text:'wash car', color: 'black', smudged: false}]);
  })
})

//User can access "color picker" in order to pick "marker color" to write and draw on "white board"
