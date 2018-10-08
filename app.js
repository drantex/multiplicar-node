const { createFile, listFile } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;

let command = argv._[0];

switch (command) {

    case 'listar':
        listFile(argv.base, argv.limite)
            .then(archivo => {
                console.log(`nombre del archivo: ${archivo}`);
            })
            .catch(err => {
                console.log(`Este es el error ${err}`);
            })
        break;

    case 'crear':

        createFile(argv.base, argv.limite)
            .then(archivo => {
                console.log(`nombre del archivo: ${archivo}`);
            })
            .catch(err => {
                console.log(`Este es el error ${err}`);
            })
        break;

    default:
        console.log('comando no reconocido');
}


// console.log(argv);

// let argV2 = process.argv;
// let base;
// let flg = false;
// for (var i in argV2) {
//     debugger;
//     if (argV2[i].indexOf('base') !== -1 && argV2[i].indexOf('=') !== -1) {
//         base = argV[i].split('=')[1];
//         console.log(base);
//         if (base !== undefined && base !== '') {
//             flg = true;
//             
//         }

//     }
// }

// if (!flg) {
//     console.log('Ingrese el parametro base con su respectivo valor');
// }