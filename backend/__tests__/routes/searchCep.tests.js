const app = require('../../src/app');

const database = require('../../src/data');
const databaseName = "testdatabase"; //Nome do banco de dados para testes

let CepModel = require('../../src/models/cep.schema');

const supertest = require("supertest");
const request = supertest(app);

//Antes dos testes iniciarem conecte-se ao banco de dados com um nome diferente para testes
beforeAll(async () => {
  	await database.connect(databaseName);
});

//Depois que os testes acabarem delete todos os dados do banco de dados de testes
afterAll(async () => {
  await CepModel.deleteMany();
});

describe("GET /cep/test", () => {
	it("Should access the route and return status 200 with message", () => {
		return request.get('/cep/test')			
			.expect(200)
			.then(response => {
				expect(response.body.success).toBe(true);
				expect(typeof response.body.message).toBe('string');
			});
	});
});

describe("POST /cep/search", () => {
	it("Should return status 400", () => {
		return request.post('/cep/search')			
			.expect(400);
	});

	it("Should return status 400 with success false and invalid cep message", () => {
		return request.post('/cep/search')
			.send({
				cep: 'invalid'
			})	
			.expect(400)
			.then(response => {
				expect(response.body.success).toBe(false);
				expect(typeof response.body.message).toBe('string');
			});
	});

	it("Should access and return status 200 with success true, with full address and isCached to be false", () => {
		return request.post('/cep/search')
			.send({
				cep: '08850120'
			})	
			.expect(200)
			.then(response => {
				expect(response.body.success).toBe(true);
				expect(response.body.isCached).toBe(false);
				expect(typeof response.body.address).toBe('object');
			});
	});

	it("Should access and return status 200 with success true, with full address and isCached to be true", () => {
		return request.post('/cep/search')
			.send({
				cep: '08850120'
			})	
			.expect(200)
			.then(response => {
				expect(response.body.success).toBe(true);
				expect(response.body.isCached).toBe(true);
				expect(typeof response.body.address).toBe('object');
			});
	});

	it("Should access and return status 200 with success true, with full address and isCached to be true", () => {
		return request.post('/cep/search')
			.send({
				cep: '08850-120'
			})	
			.expect(200)
			.then(response => {
				expect(response.body.success).toBe(true);
				expect(response.body.isCached).toBe(true);
				expect(typeof response.body.address).toBe('object');
			});
	});
});