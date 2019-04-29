const fs = require('fs')
const colors = require('colors')

let listTable = (base, limit = 10) => {
    console.log('======================='.green)
    console.log(`===table: ${base}====`.green)
    console.log('======================='.green)
    for(let i = 1; i <=limit; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }
}

let createFile = (base, limit = 10) => {
    return new Promise( (resolve, reject) => {

        if ( !Number(base) ) {
            reject(`${base} it is not a number`)
            return
        }

        let data = ''

        for(let i = 1; i <=limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`
        }

        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`the file table-${base}-al-${limit}.txt has been created`.green)
        })
    })
}

module.exports = {
    createFile,
    listTable
}