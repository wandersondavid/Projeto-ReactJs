const User = require('../models/User');

module.exports = {
    async store(req, res) {
        // return res.json({massage: 'hello world'});

        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }
        return res.json(user);



    }

}