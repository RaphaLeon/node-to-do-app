const description = {
    demand: true,
    alias: 'd',
    desc: 'description of to do work'
}

const complete = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('create', 'create a to do work', {
        description
    })
    .command('update', 'update status of a to do work', {
        description,
        complete
    })
    .command('delete', 'delete a to do work', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}