const argv = require('./config/yargs').argv
const { createFile, listTable } = require('./multiply/multiply')

let command = argv._[0]
switch( command ) {
    case 'list':
        listTable(argv.base, argv.limite)
        break
    case 'create':
        createFile(argv.base, argv.limite)
            .then( archivo => console.log(archivo))
            .catch( e => console.log(e) )
        break
    default:
        console.log('invalid command')
}