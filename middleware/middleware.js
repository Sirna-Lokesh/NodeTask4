const userSchema=require('../schema/schema')

const validation = (req, res, next) => {
    const user = req.body;
    const { error } = userSchema.validate(user);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    next();
};

module.exports=validation;