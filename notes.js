const fs = require('fs');
const chalk = require('chalk');

console.log('notes.js');

const getNotes = function () {
    return 'My notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added'));
    } else {
        console.log(chalk.bgRed('Note title taken'));
    }
}

const saveNotes = function (notes) {
    const dataJDON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJDON);
}



const loadNotes = function () {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = function (title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });
    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen('Note removed'));
    } else {
        console.log(chalk.bgRed
            ('No Note found!'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
};

