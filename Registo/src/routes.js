const express = require('express');
const multer = require('multer');
const uploadConfig = require('./../config/uploads');
const registroControllers = require('./controllers/registroControllers');


const routes = express.Router();
const upload = multer(uploadConfig);



routes.get('/bi/:bi', registroControllers.show);
routes.post('/cadastra',upload.single('fileimg') ,registroControllers.store);
routes.get('/', (req, res) => {
    res.json({'msg' : ' Estou bem ! '});
});
module.exports = routes;