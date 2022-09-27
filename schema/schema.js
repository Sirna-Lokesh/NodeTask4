const joi=require('joi');
const userSchema= joi.object(
    {
        id: joi.string().required(),
        
        login:joi.string().required(),
        
        password: joi.string()
                    .alphanum()
                    .pattern(new RegExp('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$'))
                    .required(),
        
        age: joi.number().integer().min(1).max(130).required(),
        isDeleted:joi.boolean().required()
    }
)

module.exports=userSchema;