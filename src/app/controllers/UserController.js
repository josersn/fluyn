import User from "../models/User";

class UserController {
 
    async store(req,res){

     const exists = await User.findOne({where: { email: req.body.email}});
     
     if(exists){
        return res.status(401).json({ error: "this e-mail already register "});
    }

    const { name , email , password, author } = await User.create(req.body);

      return res.json({ name , email , password, author } );
 }
}

export default new UserController();