
//accessing mongoose package
const mongoose=require('mongoose');

//database connection
//mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/diwali_app?retryWrites=true&w=majority');
//mongodb+srv://userone:<password>@ictakfiles.kj5za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//schema definition
const Schema=mongoose.Schema;

const WishFormSchema=new Schema(
                            {
                            username:String,
                            friendname: String,
                            friendemail:String,
                           
                            }
);


//model creation
var WishFormData=mongoose.model('wishform_data',WishFormSchema);
module.exports=WishFormData;