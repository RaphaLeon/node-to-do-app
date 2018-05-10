//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let work = toDo.create(argv.d);
        console.log(work);
        break;
    case 'read':
        let toDoList = toDo.getList();

        console.log('====To-Do List===='.green);
        for (let work of toDoList) {
            console.log(work.description);
            console.log('status: ', work.complete);
        }
        console.log('=================='.green);
        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.complete);
        console.log(updated);
        break;
    case 'delete':
        let deleted = toDo.delete(argv.description);
        console.log(deleted);
    default:
        console.log('Command not found');
}