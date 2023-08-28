const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');


yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },

        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    },

})

yargs.command({
    command: 'remove',
    descrobe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',

        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler() {
        notes.listNotes()
    }

})
yargs.command({
    command: 'read',
    describe: 'read a note',
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string',
    },
    handler(argv) {
       notes.readNote(argv.title)
    }

})

yargs.parse();



