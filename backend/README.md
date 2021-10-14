# LuizaCep 
Este projeto foi desenvolvido como parte do processo seletivo para LuizaLabs utilizando NodeJS, ReactJS e MongoDB
  
### O que faz essa aplicacão?
Esta aplicação nos retorna dados de um determinado CEP utilizando a API ViaCep
Ao buscar um endereço a partir de um Cep, o mesmo sera consultado via API ViaCep.
Para o usuário realizar a consulta de um endereço, é disponibilizado uma aplicação web, onde o usuário poderá inserir o número de Cep que deseja consultar.
O valor imputado no campo de busca será enviado para o backend da aplicação, que irá verificar se o Cep consultado já foi pesquisado anteriormente, caso não tenha sido pesquisado, será passado para a API ViaCep e retornara a informação solicitada, e salvo no banco de dados para uma futura consulta.

# Back-end
Foi desenvolvido utilizando ``Express`` para criação de uma API Restful que possui uma rota de teste e uma rota ``POST``, que  recebe uma sequência de números CEP, quando um número CEP é consultado pela primeira vez, os dados retornados são salvos em cache, utilizando um banco de dados não relacional ``MongoDB``, a conexão e acesso ao banco de dados foi feita utilizando o ``mongoose``, foi utilizado ``axios`` para poder trafegar a requisição para o serviço da API ViaCEP, para testes da aplicação foram usados ``Jest`` e ``supertest`` para testar as rotas.

# Front-end
Frontend desenvolvido para interação do usuário com a aplicação, onde teremos um campo para que seja imputado Cep de consulta e botão para buscar.
Caso o usuário tente acessar uma rota inexistente, será renderizado uma página informando que a página não existe.
Para essa aplicação foi utilizado ``axios`` para trafegar as requisições para nossa aplicação backend, que irá retornar o resultado do Cep consultado.
para estilização da página foi utilizado ``styled-components``. 


# Iniciando o Projeto
- Para iniciar o projeto precisamos ter :
    - Node.JS : [Link para a página de download do Node.JS](https://nodejs.org/pt-br/download/)
    - URL de conexão com o MongoDB: [Link para a página do MongoDB](https://www.mongodb.com/pt-br)

- Passo a passo para rodar o projeto
    
    - 1° Clone (ou download) o projeto na sua máquina
        ```
        $ git clone https://github.com/Mario-Luz/LuizaCep
        ```
    - 2° Configurando e Instalando o Backend
        ```
        #Acesse a pasta do backend
        $ cd ./backend
        
        #Crie um arquivo .env com o mesmo conteúdo do arquivo .env.example e altere o valor da variável 'mongodbConnection' para o valor da URL de conexão com o MongoDB
        $ cp .env.example .env

        #Instale os pacotes npm
        $ npm install
        ou
        $ yarn install
        
        #Execute o Projeto
        $ npm start
        ou
        $ yarn start
        ```
    - 3° Configurando e Instalando o Frontend
        ```
        #Acesse a pasta do frontend
        $ cd ./frontend
        
        #Crie um arquivo .env com o mesmo conteúdo do arquivo .env.example
        $ cp .env.example .env
        
        #Instale os pacotes npm
        $ npm install
        ou
        $ yarn install
        
        #Execute o Projeto
        $ npm start
        ou
        $ yarn start
        ```

### Lembrete! :thought_balloon:
A pasta node_modules não é enviada para o Github. Por isso, ao fazer download ou clone deste código fonte, lembre-se de abrir a pasta do projeto no terminal e executar o seguinte comando:

```console
npm install
```

E pronto, a pasta node_modules será gerada com os modulos que o projeto utilizar.


### Iniciar a aplicacão :checkered_flag:

Para rodar a aplicação, execute o comando: <br>
```console
npm start
```
### Aplicação Web
![Web](https://i.ibb.co/H7pJZSK/web2.jpg).
![Web](https://i.ibb.co/cNYB7gm/web1.jpg).

### Testes
![test-coverage](https://i.ibb.co/s6V1XDY/teste2.jpg).

### Arquitetura MVC
Atualmente é a arquitetura em que mais me sinto confortavel de utilizar e por esse motivo foi a escolhida para esse projeto.

### Tecnologias Preferenciais:
Escolhi NodeJS por questão de afinidade com a tecnologia, é onde me sinto mais confortavel para desenvolver.

###Quando você digita a URL de um site (http://www.netshoes.com.br) no browser e pressiona enter, explique da forma que preferir, o que ocorre nesse processo do protocolo HTTP entre o Client e o Server.
    O que espera-se como resposta - Dicas e direcionamentos:
    · Detalhe sua linha de raciocínio;
    · Elabore um plano de entendimento, por exemplo, lista, de forma a elencar os passos;
    · Não copie conteúdo da internet, responda com suas palavras.

1- Quando digitamos um link no navegador e pressionamos enter, o navegador faz uma requisição para o servidor atrelado ao endereço url digitado, essa requisição é do tipo GET. 
2- Temos 4 tipos principais de requisições dentro do protocolo HTTP, que são: GET, PUT, DELETE, POST. no caso nossa requisição enviada ao servidor é do tipo GET 
3- O servidor por sua vez, recebe essa requisição e verifica a possibilidade de responder ou não, se for possível responder, o servidor iria enviar uma resposta ao navegador.
4- O navegador após receber essa resposta do servidor, ira renderizar o conteúdo para o usuário.
