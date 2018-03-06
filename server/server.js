require ('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')
, port = 4020
, app = express()
, controller = require('./controller');

//76F
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
}).catch(console.error);

//70C
const db = app.get('db');

//Endpoints
//76C
app.post('/api/creatUser', controller.createUser)
app.get('/api/getUser', controller.getUser)

app.listen(port, () => {
    console.log(`I'm listening on port: ${port}.`)
})