import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    return response.json([
        'Guilherme',
        'Isaac',
        'Lucas'
    ]);
});

app.listen(3333);