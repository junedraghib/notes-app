//to use our file
const add = require("./utils.js");
//notes.js returns a object with functionalities
const notes = require("./notes.js")
//to use npm packages
var validator = require("validator")

// console.log(add(2,3));
// console.log(getNotes())
// console.log("is Email : " + validator.isEmail("raghibjuned@gmail.com"))
// console.log("is URL : " + validator.isURL("www.google.com"))
// console.log("iscurrency : " + validator.isCurrency("$21"))

//a npm package yarg may help process cli arg in a beautiful way 
//than the convemtional one ans thus provides more flexiblity 
const yargs = require("yargs")

//customizing yargs version
yargs.version("1.1.0")

//adding commands to yargs
// command : add
yargs.command({
    command: "add",
    description: "Add a new note",
    //configuring options for a command
    builder: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: "string"
        },

        body: {
            description: 'Note Body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        // console.log("Title : " + argv.title + "\nBody : " + argv.body)
        
        //now lets use the functionalities returned by the node.js file
        notes.addNote(argv.title, argv.body)
    }
})

// command : remove
yargs.command({
    command: "remove",
    description: "remove an existing note",
    //configuring options
    builder: {
        title: {
            description : "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// command : list
yargs.command({
    command: "list",
    description: "list all notes",
    handler: function () {
        notes.listNote()
    }
})

// command : read
yargs.command({
    command: "read",
    description: "reading note",
    builder:{
        title:{
            description: "Note Title",
            demandOption : true,
            type : "string"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
//to remove unnecessary details obtained comment above line instead use
yargs.parse() 


//witing the content to a file

// const fs = require('fs')
// fs.writeFileSync("notes.txt", "this file is created using node js fs module!!")
// fs.appendFileSync("notes.txt", "i am appending this line from nodejs app")