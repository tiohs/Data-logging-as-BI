const getUser = require('./../model/getUser');
const User = require('./../model/User');

module.exports = {
    async show(req, res){
        const { bi } = req.params;
        const users = await User.findOne({bi});
        if(!users){
            return res.status(400).json({error : ' User not exist '});
        }
        return res.json(users);
    },
    async store(req, res){
        const  { filename } = req.file;
        const { name, bairro, provincia, municipio, bi, idade } = req.body;
        const users = await User.findOne({bi});
      
        if(!!users){
            return res.status(400).json({error : ' User exist ', users});
        }
        const user = await User.create({
            fileimg : filename,
            name,
            bairro,
            provincia,
            municipio,
            bi ,
            idade
        });
        return res.json(user);
    }
}
