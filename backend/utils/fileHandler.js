const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/notes.json');

function readNotes() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

module.exports = { readNotes, writeNotes };
