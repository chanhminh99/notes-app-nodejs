// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes"); // Object of notes.js

yargs.command({
  command: "add",
  describe: "Add a new node",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note content",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a node exist",
  handler: function () {
    console.log("Removing a note");
  },
});

yargs.command({
  command: "list",
  describe: "List all note",
  handler: function () {
    console.log("Listing out all notes");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

// yargs.parse();
console.log(yargs.argv);

// console.log(validator.isEmail("chanhchung9@gmail.com"));

// require("./utils");

// console.log(name);
