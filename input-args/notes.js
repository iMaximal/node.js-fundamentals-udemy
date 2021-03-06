const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  let notes = fetchNotes()
  const note = {
    title,
    body,
  }

  const deDuplicatedNotes = notes.filter((note) => note.title === title)

  if (deDuplicatedNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  return fetchNotes()
}

const getNote = (title) => {
  console.log('Getting note', title)
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title === title)

  return filteredNotes[0]
}

const removeNote = (title) => {
  const notes = fetchNotes()

  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}

const logNote = (note) => {
  console.log('--')
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
}
