const expect = require('chai').expect
const myFunc = require('./main');

let whiteboard;

beforeEach(function() {
  whiteBoard = [{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}];
});

//User should be able to add list items to the "white board", edit items already existing on the board, and remove items already existing on the board.

describe("add item", function () {
  it("should be able to add list items to the 'white board'", function () {
      let updatedWhiteboard = [{text:'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}, {text: 'find lost dog', color: 'black', smudged: false}];
     //add 'find lost dog' to white board
     myFunc.addItem(whiteBoard, 'find lost dog');
     expect(whiteBoard).to.deep.equal(updatedWhiteboard);
  })

  it("should be able to add list items to the 'white board'", function () {
      let whiteBoard = myFunc.newWhiteBoard();
      let updatedWhiteboard = [{text: 'find lost dog', color: 'black', smudged: false}];
     //add 'find lost dog' to white board
     myFunc.addItem(whiteBoard, 'find lost dog');
     expect(whiteBoard).to.deep.equal(updatedWhiteboard);
  })
})

describe("edit item", function () {
  it("should be able to edit items already existing on the board", function () {

     //edit 'wash car' item to read 'have party' instead
     myFunc.editItem(whiteBoard, 'wash car', 'have party');
     expect(whiteBoard).to.deep.equal([{text:'have party', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}]);
  })
})

describe("remove item", function () {
  it("should be able to remove items already existing on the board", function () {

     //remove 'cook food' item
     myFunc.removeItem(whiteBoard, 'cook food');
     expect(whiteBoard).to.deep.equal([{text:'wash car', color: 'black', smudged: false}]);
  })
})

//user should be able to dynamically move items within the list to reorder items.


describe("move", function () {
 it("should be able to dynamically move items within the list to reorder items.", function () {
   expect(myFunc.moveItems(whiteboard[0], whiteboard[2]).to.deep.equal([
     {text: "Wow, neat!", color: "black", smudge: true},
     {text: "This is fun!", color: "yellow", smudge: false},
   {text: "cool", color: "black", smudge: false}]));
 });
});

//For removing items, user has the option to permanently remove list items by choosing the eraser function. User can also choose the hand option in order to "smudge" the item but not full remove from the list, allowing them to retrieve smudged items.
let whiteBoard = [{text: 'wash car', color: 'black', smudged: false}, {text: 'cook food', color: 'black', smudged: false}];

describe('remove', function(array){
  it("removes the item permanently", function(){
    expect(myFunc.removeItems(array).to.equal())
  })

})
describe('smudge', function(array){
  it('smudges or not smudges', function(){
    expect(myFunc.smudge().to.equal('smudge: true'));
  })
})
