const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    codigo_produto: {
        type: Number,
        required: true,
    },
    descricao: {
        type: String,
        required: true
    },
    preco_compra: {
        type: Number,
        required: true,
        min: 0
    },
    preco_venda: {
        type: Number,
        required: true,
        min: 0
    },
    quantidade: {
        type: Number,
        required: true,
        default: 0 // Valor padrão
    },
    categoria: {
        type: String,
        required: true,
        default: 'Roupas de Verão'
    },
    fornecedor: {
        type: mongoose.ObjectId,
        ref: 'Fornecedor', // Nome do model referenciado
        required: true
    }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no
      MongoDB
*/
module.exports = mongoose.model('Produto', esquema, 'produtos')