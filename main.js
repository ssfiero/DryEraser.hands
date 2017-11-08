function addItem(whiteboard, item) {
  whiteboard.push({text: 'find lost dog', color: 'black', smudged: false});
}

module.exports = {
  addItem: addItem
}
