const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cnpj: {
        type: String,
        required: true // Atributo obrigatório
    },
    razao_social: {
        type: String,
        required: true
    },
    nome_fantasia: {
        type: String
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Fornecedor', esquema, 'fornecedores')