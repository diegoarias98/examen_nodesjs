const argv = require('yargs')
const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('datos.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
let mostrar = (base, pais, anio) => {
    return new Promise((resolve, reject) => {
        fs.readFile(inputPath, function(err, fileData) {
            parse(fileData, { columns: false, trim: true }, function(err, rows) {
                //Your CSV data is in an array of arrys passed to this callback as rows.
            })
        })
    })
}