const frisby = require('frisby');
require('dotenv').config();

const URL = `localhost:${process.env.PORT}`;

describe('rota /user/status/warning', () => {
  it('retorna "sinal warning enviado"', async () => {
    await frisby
      .post(`http://${URL}/user/status/warning`,
        {
          userId: 'uma string qualquer',
        })
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('sinal warning enviado');
      });
  });
});

describe('rota /test/connection', () => {});

describe('rota /test/error', () => {});
