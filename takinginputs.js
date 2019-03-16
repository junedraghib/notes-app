//taking inputs using cli arguments
//1. just provide inputs at cli argumets
//2. access them using process.argc[ith aregument]

//to dump all the argv : argument vector information
// console.log(process.argv)
//accessing first cli argument 
// console.log(process.argv[0])
// console.log(process.argv[1])
// console.log(process.argv[2])

//a npm package yarg may help process cli arg in a beautiful way 
//than the convemtional one ans thus provides more flexiblity 

const yargs = require("yargs")

//customizing yargs version
yargs.version("1.1.0")

//adding commands to yargs
// command : add
yargs.command({
    command:"add",
    description: "Add a new note",
    //configuring options for a command
    builder:{
        title : {
            description: 'Note Title',
            demandOption:true,
            type: "string"
        },

        body: {
            description: 'Note Body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Title : "+ argv.title+"\nBody : "+argv.body)
    }
})

// command : remove
yargs.command({
    command: "remove",
    description: "remove an existing note",
    handler: function () {
        console.log("removing note!!")
    }
})

// command : list
yargs.command({
    command: "list",
    description: "list all notes",
    handler: function () {
        console.log("listing all notes!!")
    }
})

// command : read
yargs.command({
    command: "read",
    description: "reading note",
    handler: function () {
        console.log("reading note!!")
    }
})

// console.log(yargs.argv)
//to remove unnecessary details obtained comment above line instead use
yargs.parse() 

