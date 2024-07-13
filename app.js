yargs = require("yargs");
data = require("./data");

yargs.command({
  command: "add",
  describe: "add person to the list",
  builder: {
    id: {
      describe: "id of the person",
      demandOption: true,
      type: "number",
    },
    fullName: {
      describe: "fullName of the person",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.addPerson(x.id, x.fullName, x.age);
  },
});

yargs.command({
  command: "delete",
  describe: "delete person from the list",
  builder: {
    id: {
      describe: "id of the person",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data.deleteData(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "find person from the list",
  builder: {
    id: {
      describe: "id of the person",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data.readData(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "list all data",
  handler: () => {
    data.listData();
  },
});
yargs.parse();
