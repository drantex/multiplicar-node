const fs = require('fs');
const color = require('colors');

let createFile = async(base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado no es un numero....`);
            return;
        }
        let data = '';

        for (let x = 1, length = limit; x <= length; x++) {

            data += `${base} * ${ x } = ${ x * base}\n`;
        }

        fs.writeFile(`multiplicar/tablas/table-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${ base }.txt`.green);
        });
    });
}

let listFile = async(base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado no es un numero....`);
            return;
        }
        let data = '';
        console.log('=================================='.red);
        console.log(`Tabla del ${ base }`.blue);
        console.log('=================================='.green);
        for (let x = 1, length = limit; x <= length; x++) {

            console.log(`${base} * ${ x } = ${ x * base}\n`);
        }
    });
}

module.exports = {
    createFile,
    listFile
}