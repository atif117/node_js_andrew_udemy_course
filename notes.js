const fs = require('fs');
const chalk = require('chalk');

console.log('notes.js');



const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) =>
        note.title === title
    )
    if (!duplicateNote) {
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

const saveNotes = (notes) => {
    const dataJDON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJDON);
}



const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) =>
        note.title !== title)
        ;
    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen('Note removed'));
    } else {
        console.log(chalk.bgRed
            ('No Note found!'));
    }
}

const listNotes = () => {
    const listNotes = loadNotes();
    if (listNotes.length > 0) {
        console.log(chalk.bgGreen('your notes:'));
        listNotes.forEach((note) => console.log(note.title));
    } else {
        console.log(chalk.bgRed('No notes found!'));
    }
}

const readNote = (title) => {
    try {
        const availbleNotes = loadNotes();
        const readNote = availbleNotes.find((note) => note.title === title);
        console.log(chalk.bgGreen.bold(readNote.title) + '\n' + chalk.inverse(readNote.body));
    } catch (e) {

        console.log(chalk.bgRed('No note found!'));
    }


}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};

