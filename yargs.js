let opt = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        demand: true,
        alias: 'c',
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3 (Enlaces a un sitio externo.).'
    },
    anio: {
        demand: true,
        alias: 'y',
        description: 'Permite especificar el año para el cual se requiere las estadísticas.'
    }
};


const argv = require('yargs')
    .command('archivo', 'Establece el path del archivo CSV', opt)
    .command('pais', 'Muestra el pais', opt)
    .command('anio', 'El anio de estadisticas', opt).help().argv;
module.exports = {
    args
};