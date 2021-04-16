//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//const msg = notes.getNotes()
//console.log(msg)

yargs.command({
   command: 'add',
   describe: 'To add a new note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'Body of the note',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.addNote(argv.title, argv.body)
   }
})

yargs.command({
   command: 'remove',
   describe: 'To remove a note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },   
   handler(argv) {
      //console.log('Removing the note!')
      notes.removeNote(argv.title)
   }
})

yargs.command({
   command: 'list',
   describe: 'To list all the notes',
   handler() {
      notes.getNotes()
   }
})

yargs.command({
   command: 'read',
   describe: 'To read a note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.readNotes(argv.title)
   }
})

yargs.parse()

//const isemail = validator.isEmail('premaymt')
//console.log(validator.isEmail('premaymt@gmail.com'))
//console.log(chalk.red.inverse('Yay for red and not bold colored text!'));

//console.log(yargs.argv)

//const red = require('./utils.js')
//const sum = red(4, 2)
//console.log(sum)