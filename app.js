
const express=require("express");


const nodemailer=require("nodemailer");
const app=new express();

// 
const WishFormData = require('./src/model/wishformdata');

// 
const port=process.env.PORT||2000;




app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

//app.use('/wishform',wishformRouter);



app.get('/',function(req,res)
{
   res.render("index",
   {
     
      title:'Diwali app',
 
   });
  
});

app.get('/wishform',function(req,res)
{
  res.render("wishform");
  
});

// app.post('/wishform/add',function(req,res)
// {
//    const WishForm=new WishFormData(
//       {
        
//          username: req.body.username,
//          friendname: req.body.friendname,
//          friendemail:req.body.friendemail,
         
//       }
//     );
//     WishForm.save((err)=>
//   {
//     if(err)
//     {
//       res.json({message:err.message,type:'danger'});
//     }
//     else
//     {                                    
      
//       res.redirect('/sendpage');
//     }
//   })
  
// });


app.post('/wishform/add', function (req, res) {
   console.log(req.body);
   var item = {
      username: req.body.username,
         friendname: req.body.friendname,
         friendemail:req.body.friendemail
   }
   var diwali = WishFormData(item);
   diwali.save().then((response) => {
       console.log(response);

       let mailTransporter = nodemailer.createTransport({
           service: 'gmail',
           auth: {
               user: 'creationzv@gmail.com',
               pass: 'Vishnu@123'
           },
           tls:
           {
              rejectUnauthorized:false
           }
       });
   
       console.log("started mail");
       
   
       let mailDetails = {
           from: 'creationzv@gmail.com',
           to: response.friendemail,
           subject: 'Diwali Wishes from ' + response.username,
           text: 'your friend is wishing u a happy diwali https://diwaliapp3.herokuapp.com/'+response._id
       };
       console.log(mailDetails);
       mailTransporter.sendMail(mailDetails, function (err, data) {
   
           if (err) {
               console.log(err);
               res.json({ success: false });
               console.log('Error Occurs! Bad Request');
           } else {
               res.json({ success: true ,name:response.friendname});
   
               console.log('Email sent successfully');
              // res.redirect('/sendpage');
           }
       });
   }) // saving to database

 
});

// app.get('/sendpage',function(req,res)
//  {
//    res.render("sendpage")
  
//  });
app.get('/:id', function (req, res) {


   let id = req.params.id;
   console.log(id);
   WishFormData.findOne({ _id: id }, function (err, data) {
       console.log(err);

       console.log(data);

       res.render("sendpage", {
         username: data.username,
         friendname: data.friendname
       })
     

   })

});





//   app.get('/sendpage',function(req,res)
//   {
//    res.render("sendpage")
  
//  });




app.listen(port,()=>{console.log("server ready at"+port)});