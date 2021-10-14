const validCep = (cep) => {

    //Remove '-' e '.' e adiciona em uma nova variável
    var onlyNumberCep = cep.replace(/[\.-]/g, '');

    //Expressão regular para validar o CEP.
    var cepRegex = /^[0-9]{8}$/;

    //Valida o cep checando se possui 8 digitos numéricos
    if (cepRegex.test(onlyNumberCep)) {
        return true;
    } else {
        return false;
    }
}

const cepFormat = (cep) => {
    // Validação de cep
    if (!validCep(cep)) {
        return null;
    }
    //Nova variável "cep" somente com dígitos.
    var onlyNumberCep = cep.replace(/\D/g, '');

    //Adiciona o hífen ao cep que possuía apenas números
    return onlyNumberCep.substring(0, 5) + "-" + onlyNumberCep.substring(5);
}

module.exports = {
    validCep,
    cepFormat
}