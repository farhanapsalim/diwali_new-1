const express =require('express');
const WishFormData = require('../model/wishformdata');

const WishFormRouter=express.Router();

function router()
{

WishFormRouter.get('/',function(req,res)
{
 
   res.render('wishform', 
   {
      
      title:'Wishform'
      
   })
 

})
WishFormRouter.post('/add',function(req,res)
{
   const WishForm=new WishFormData(
      {
        
         username: req.body.username,
         friendname: req.body.friendname,
         friendemail:req.body.friendemail,
         
      }
    );
    WishForm.save((err)=>
  {
    if(err)
    {
      res.json({message:err.message,type:'danger'});
    }
    else
    {                                    
      
      res.redirect('/sendpage');
    }
  })
  
});
// signupRouter.get('/add',function(req,res)
// {
//    res.redirect("/books");
// })

return WishFormRouter;
}
module.exports=router;