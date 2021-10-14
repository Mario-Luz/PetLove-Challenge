const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cepSchema = new Schema({
    cep: {
        type: String,
        required: [true, "Cep is required"],
        unique: true
    },
    logradouro: {
        type: String
    },
    complemento: {
        type: String
    },
    bairro: {
        type: String
    },
    localidade: {
        type: String
    },
    uf: {
        type: String
    },
    gia: {
        type: String
    },
    ddd: {
        type: String
    },
    siafi: {
        type: String
    }
}, {
    timestamps: true
});

//Método personalizado para não retornar ID, created_at e updated_at, para ficar com o mesmo padrão do retorno da Api ViaCep
cepSchema.statics.getAddressByCep = async (cep) => {
    return await Cep.findOne({
        cep: cep
    }, {
        _id: 0,
        cep: 1,
        logradouro: 1,
        complemento: 1,
        bairro: 1,
        localidade: 1,
        uf: 1,
        gia: 1,
        ddd: 1,
        siafi: 1
    });
}

const Cep = mongoose.model('Cep', cepSchema);

module.exports = Cep;