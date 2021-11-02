let email =document.getElementById("email");
let username=document.getElementById("namee")
let nameerror=document.getElementById("nameerror");
let error=document.getElementById("error");
let phno=document.getElementById("phno")
let phoneerror=document.getElementById("phnoerror");

let confirm_password=document.getElementById("confpsw")
let confirm_pass_error=document.getElementById("confpwderror")





//pasword
// var myInput = document.getElementById("psw");
var myInput = document.getElementsByClassName("input_p");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");





function nameval()
{
  if(username.value.trim()=="")
   {
    nameerror.innerHTML="Please enter your name";
    nameerror.style.color="red";
      return false;
   }
   else
   {
    nameerror.innerHTML=null;
     return true;
   }
}
function validate()
{
          let regexp = /^(?!\.)([[A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value.trim()))
    {
     error.innerHTML=null;
     
      return true;
    }
    else
    {
      error.innerHTML="Email ID is Invalid";
      error.style.color="red";
      return false;
    }

}


function phonenumb()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
  
  if(phoneno.test(phno.value.trim()))
        {
          phoneerror.innerHTML=null;
      return true;
        }
      else
        {

          phoneerror.innerHTML="Phone number must be in the form 111 111 1111,111-111-1111 or 111.111.1111";
          phoneerror.style.color="red";
          return false;
   

        }
      }
 
  
 

function matchPassword() {  
  var pw1 = document.getElementById("psw");  
  var pw2 = document.getElementById("confpsw");  
  if(pw1.value == pw2.value)  
  {   
    confirm_pass_error.innerHTML=null;
   // confirm_pass_error.style.color="green";
    return true;
  }
   
  else {  
    confirm_pass_error.innerHTML="Password doesn't  match";
    //alert("Password created successfully"); 
    confirm_pass_error.style.color="red";
 
    return false;
  }  
} 



function validatebutton(){
  var a = phonenumb();
  var b = validate();
  var c=nameval();
  var d=matchPassword();
  //var c = checkMessage();
  return a && b && c && d ;
}
