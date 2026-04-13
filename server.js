//get, get with id, git with filter,  post, put, patch, delete
// Frontend envia cachorro
// Backend recebe (req.body)
// Backend valida dados
// Backend envia para o banco
// Banco salva
// Backend responde pro frontend

//import 'dotenv/config';

import {app} from './src/app.js';
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Acessar http://localhost:${PORT}`);
})