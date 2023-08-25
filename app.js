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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);
    }
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
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing a note')
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note')
    }
})

yargs.parse();



