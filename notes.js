const fs = require("fs")
const chalk = require("chalk")
const getNote = function () {
    return "Yours Notes are.... "
}

// debugger

const addNote = function(title, body){
    //loading the notes JSON object from the notes.json file
    const notes = loadNote()
    //short hand notation of a call back function

    const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    //if title isn't taken than only 
    if(duplicateNotes.length === 0){
        //add a new object to the notes array
        notes.push({
            title: title,
            body: body
        })

        console.log(chalk.green.inverse(title+" : new note added"))
    } else {
        //when notes title already exist
        console.log(chalk.red.inverse("please choose a different title"))
    }
    

    //saving the notes array to the file
    saveNotes(notes)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNote = function () {
    
    //initially we wount have the file notes.json thus we returned an empty array 
    //in that case else we have read the file and convert the buffer into string
    //and later string into JSON object and returned the object
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const removeNote = function (title) {
    const notes = loadNote()
    //retain only notes which don't matches with the title
    //how notes.filter() method works??
    //Mead says its a function which would be called for each member of the array once
    const retainNotes = notes.filter(function (note) {
        return note.title !== title
    })

    //making sure if notes are deleted or not
    if(notes.length > retainNotes.length){
        saveNotes(retainNotes)
        console.log(chalk.inverse.green(title + " removed successfully!!"))
    } else {
        console.log(chalk.inverse.red(title + " : no match found"))
    }
}

const listNote = () => {
    const notes = loadNote()
    console.log(chalk.blue.inverse("your notes are here...."))
    var i = 1;
    notes.forEach((note) => {
        console.log(chalk.red.inverse("\n" + i + " " + note.title))
        console.log(chalk.green.inverse("\n" + " " + note.body))
        i++;
    });
} 

const readNote = (title) => {
    const notes = loadNote()
    //return the first match if found otherwise returns undefined
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("no match found"))
    }
}

module.exports = {
    getNote    : getNote,
    addNote    : addNote,
    removeNote : removeNote,
    listNote   : listNote,
    readNote   : readNote
}