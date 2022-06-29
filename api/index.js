const express = require('express');
const bodyParser = require('body-parser');
const ClientRoute = require('./src/routes/index.js');
const cors = require('cors')
const db = require('./src/db.js')
 
const app = express();
 
try {
    db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.get('/test', (req, res) => {
    res.send('Hello World!')
  })
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  
app.use('/clients', ClientRoute);
 
app.listen(3001, () => console.log('Server running at port 3001'));