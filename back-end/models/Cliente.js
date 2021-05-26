const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        index: {
            unique: true // Não deixa repetir CPF no cadastro
        }
    },
    rg: {
        type: String
    },
    data_nascimento: {
        type: String
    },
    endereco: {
        type: String,
        required: true
    },
    tell1: {
        type: String,
        required: true
    },
    tell2: {
        type: String
    },
    email: {
        type: String,
    }

})

/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Cliente', esquema, 'clientes')