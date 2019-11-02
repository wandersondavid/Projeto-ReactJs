const User = require('../models/User');

module.exports = {
    async store(req, res) {
<<<<<<< HEAD
        // return res.json({massage: 'hello world'});

        const { email } = req.body;
=======
        const { email } = req.body;

>>>>>>> login

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }
        return res.json(user);



    }

}