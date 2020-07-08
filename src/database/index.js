const mongoose = require('mongoose');

console.log('Conectando...')

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    () => { console.log('\x1b[32m', 'Banco de Dados conectado com Sucesso', '\x1b[0m') },
    err => { console.log('\x1b[31m', 'Não é possível conectar ao Banco de Dados' + err, '\x1b[0m') }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;