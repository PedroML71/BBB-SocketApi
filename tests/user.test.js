const frisby = require('frisby');

const HEROKU_URL = 'https://bbb-heroku-test.herokuapp.com';

describe('rota /user/status/warning', () => {
  it('retorna "sinal warning enviado"', async () => {
    await frisby
      .post(`${HEROKU_URL}/user/status/warning`,
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
