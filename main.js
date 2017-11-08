function addItem(whiteboard, item) {
  whiteboard.push({text: 'find lost dog', color: 'black', smudged: false});
}

function editItem(whiteboard, oldItem, newItem) {
  whiteboard.forEach((e, i) => {
    console.log(e);
    if (e.text == oldItem) {
      whiteboard[i].text = newItem;
    }
  });
}

function removeItem(whiteboard, item) {
  whiteboard = whiteboard.filter((e) => {
    return e.name !== item;
  });
};

module.exports = {
  addItem: addItem,
  editItem: editItem,
  removeItem: removeItem
}
