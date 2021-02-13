import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


 app.listen(3333);


 //Metods HTTP possible for use:
// GET: Buscar ou listar um informação (filtrar usuário,)
// POST: Criar um nova info no backend
//PUT: Atualizar uma info existente
//DELETE: Deletar uma info existente no backend


// Parametros:
//    Corpo (Resquest-body): Dados-para-criação-ou-para-atualização-de-um-registro
//    Route Params: identificra qual recurso eu quero atualizar ou deletar
//    Query Params Paginação, filtros, ordenação