const app = require('./src/app');
const database = require('./src/data');

const port = process.env.NODE_PORT || 8000;
const databaseName = process.env.DATABASE || 'Pet-CEP';

app.listen(port, () => {
	console.log(`Aplicação rodando na Porta =====> ${port}`);
});

if(database.connect(databaseName)){
	console.log("Conexão com MongoDB realizada com Sucesso!");
} else {
	console.log('Não foi possivel se conectar ao MongoDB');
}