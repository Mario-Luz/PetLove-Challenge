const router = require('express').Router();

const axios = require('axios');

const Cep = require('../models/cep.schema');

const {
    validCep,
    cepFormat
} = require('../controller/cep.controller');

//Rota de testes
router.route('/test').get((request, response) => {
    return response.status(200).json({
        success: true,
        message: 'Rota acessada'
    });
});

router.route('/search').post(async (request, response) => {
    try {
        let {
            cep
        } = request.body;

        //Checando se possui um cep na requisição
        if (!cep) {
            //Caso não retorne uma resposta BAD REQUEST
            return response.status(400).json({
                success: false,
                message: 'Necessário informar o CEP que será consultado'
            });
        }

        if (!validCep(cep)) {
            //Caso não retorne uma resposta BAD REQUEST
            return response.status(400).json({
                success: false,
                message: 'CEP inválido'
            });
        }

        //Formatando o Cep para realizar a pesquisa
        cep = cepFormat(cep);

        //Buscando Cep no banco de dados MongoDB utilizando função personalizada
        const cacheCep = await Cep.getAddressByCep(cep);

        //Caso não encontre o Cep
        if (!cacheCep) {

            //Realizando a pesquisa na API ViaCep
            const viaCepResult = await axios(`https://viacep.com.br/ws/${cep}/json/`);

            //Se possuir uma resposta
            if (viaCepResult.data) {
                //Se essa resposta for um erro entregue uma resposta com success false
                if (viaCepResult.data.erro) {
                    return response.status(200).json({
                        success: false,
                        message: 'Cep inválidado pela Api PetCEP'
                    });
                } else {
                    //Se a resposta não for um erro
                    //Cadastra o cep que no banco de dados para cache
                    await Cep.create(viaCepResult.data)

                    //Retorna resposta com sucesso true, cep não estava em cache e o endereço recebido da api viacep
                    return response.status(200).json({
                        success: true,
                        isCached: false,
                        address: viaCepResult.data
                    });
                }
            } else {
                //Caso não exista viaCep.data não possua valor
                return response.status(200).json({
                    success: false,
                    message: 'Resposta inesperada da Api PetCEP'
                });
            }
        } else {
            //Caso possua o Cep já em cache no banco de dados
            return response.status(200).json({
                success: true,
                isCached: true,
                address: cacheCep
            });
        }
    } catch (error) {
        //Caso ocorra um erro em qualquer momento
        return response.status(400).json({
            success: false,
            error: error.message
        });
    }

});

module.exports = router;