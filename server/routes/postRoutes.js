const Schemas = require("../models/Schemas");

const saveDetails = (app) => {

  app.post("/save_details", async (req, res) => {

    let {   Firstname, date, leader, members } =
      req.body;

    try {

      let post = new Schemas({

         Firstname,date, leader, members
      });
      const postSaved = await post.save();

      res.send({ message: "succesfully saved", postSaved });

    } catch (error) {

      console.error("post error", error);

      res.send({ message: "post error" }).status(404);
    }
  });

  app.get("/getDetails", async (req, res) => {
    try {
      const findDetails = await Schemas.find();

      res.send(findDetails);

    } catch (error) {

      console.log("error", error);
    }
  });
  
  app.delete('/deleteParty/:id' , async (req , res)  =>  {
    try{
        const {id} = req.params                    
        const partyDelete = await Schemas.deleteOne({_id : id})
        res.send({message: "Parliament Party Successfully deleted", partyDelete})
    }catch(err){
        console.log(err);
        res.sendStatus(404)
    }
})
  
};

module.exports = { saveDetails};