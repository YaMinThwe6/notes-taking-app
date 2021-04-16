const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
   const data = loadNotes()
   console.log(chalk.bgBlue.white.italic.bold.inverse('Your notes...'))
   data.forEach((x)=>console.log(x.title))
}

const addNote = (title, body) => {
   const data = loadNotes()

   const duplicateCheck = data.find((data) => data.title===title)

   if (!duplicateCheck) {
      data.push({
         title: title,
         body: body
      })

      saveNotes(data)
      console.log(chalk.bgGreen('New note added!'))
   } else {
      console.log(chalk.bgRed('Note title taken! Please choose an another title.'))
   }
}
const removeNote = (title) => {
   const data = loadNotes()
   const remaining = data.filter((data) => data.title!==title)
   const r = data.filter((data) => data.title===title)
   if (r.length===0){
      console.log(chalk.bgRed('Sorry! Note not found. Please check the title!'))
   } else {
      saveNotes(remaining)
      console.log(chalk.bgGreen('The note '+title+' has been successfully deleted!'))
   }   
}

const readNotes = (title) => {
   const data = loadNotes()
   const noteToRead = data.find((x) => x.title===title)
   if (noteToRead){
      console.log(chalk.inverse.bold.bgRed(noteToRead.title))
      console.log(noteToRead.body)
   } else {
      console.log(chalk.bgRed('Sorry! Note not found. Please check the title!'))
   } 
}

const loadNotes = () => {
   try {
      const databuffer = fs.readFileSync('notes.json')
      const tostring = databuffer.toString()
      const currentdata = JSON.parse(tostring)
      //console.log(currentdata)
      return currentdata
   }
   catch {
      return []
   }
}

const saveNotes = (data) => {
   const dataJSON = JSON.stringify(data)
   fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
   getNotes : getNotes,
   addNote : addNote,
   removeNote : removeNote,
   readNotes : readNotes
}   