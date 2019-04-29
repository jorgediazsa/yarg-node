const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('list', 'list table', opt)
                .command('create', 'generate a file with the table', opt)
                .help()
                .argv

module.exports = {
    argv
}