const User = require('../models/User')

module.exports={
    async store(req,res){

        // try {

        // const { email } = req.bory;


        // // let user = await User.findOne({ email });
        // const user = await User.create({ email });

        // return res.json(user)
        //     // throw "myException"; // gera uma exceção
        //  }
        //  catch (e) {
        //     // declarações para manipular quaisquer exceções
        //     logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
        //  }



        const { email } = req.bory;


        // let user = await User.findOne({ email });
        const user = await User.create({ email });
        // if(!user){
        //     user = await User.findOne({ email });
        // }
        return res.json(user)
    }

}