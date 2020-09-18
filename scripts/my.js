var da = new Date();
var year = da.getFullYear();
var dayt =da.getDay();

/*
    if( day == 0) day= "Sunday";
    else if(day == 1) day = "Monday";
    else if(day == 2) day = "Tuesday";
    else if(day ==3) day = "Wednesday" ;
    else if(day == 4) day = "Thursday";
    else if(day == 5) day = "Friday";
    else day = "Saturday";
 */
   var days = new Array("Sunday" , "Monday" , "Tuesday", "Wednesday" , "Thursday" , "Friday" , "Saturday");
   day = days[dayt];

    
var tdate = da.getDate();
var cmonth = da.getMonth()+1;
   switch(cmonth)
      {
          case 1:
              { cmonth="January"; break;}
          case 2:
                { cmonth="Feburary"; break;}   
          case 9:
                { cmonth="September"; break;} 
          default:{ cmonth="December"; break; }
      }
document.writeln("<br/>Today is: "+ day + ", "+ tdate+" "+cmonth +" "+ year);

var name = "Ram";
let age = 21;
college = "The British College";
document.writeln("<br>" + name + " is "+ age + "<b>Years</b> old and he goes to <b>" + college+ "</b>");

num1 = 10;
num2 = 30;
sum = num1 + num2;
document.writeln("<br> The sum of " +num1 + " and "+ num2+ " is  "+sum);

//dialogue boxes in javascript
//prompt used for taking input from the user
/*
var name = prompt("Enter your name? ");
document.write("Welcome, "+ name);
*/

//example for adding two numbers from users input
//parseInt  or parseFloat
/*
var num1 = parseInt(prompt("Entter the First NUmber? "));
var num2 = parseInt(prompt("Enter the SEcond NUmber? "));
var sum = num1 + num2;
document.writeln ("THe sum is "+sum);
*/

//using of confirm dialogue box
//return true or false

function closeMe(){
    clo=confirm("Are you sure you want to close this Webpage?")
   if(clo==true){
       window.close();
   }
   else{

   } 
}

function mulTable(num) {
       var num 
       /*
       for(i = 1; i <= 10; i++ )
       {
           var mul = i * num ;
           document.write("<br>" + num + " x " + i + " = " + mul);
       }
       */
       i=1;
       while(i<=10)
       {
        var mul = i * num ;
        document.write("<br>" + num + " x " + i + " = " + mul);
        i++;
       }
}

/*
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5
================
*
$ $
* * *
$ $ $ $
* * * * *

*/
document.write("<br/>")
document.write("<br/>")
for ( i = 1; i <= 5; i++ ){
  for( j = 1; j <= i; j++ ) {
      document.write("  " + i + "  ")
  }
    document.write("<br/>");
}

//function no parameter yes return type
function sumT() {
    num1 = 10;
    num2 = 30;
    total =  num1 + num2;
    return total;
  }

//Function with parameter and Return type
  function subT(num1, num2) {
      su = num1 -  num2;
      return su;
  }

  //num1= "x4";
  //num2= 5;
  ///sum =  eval(num1) + num2;
 // document.write("<br/>Again The sum is "+sum);


  if(!isNaN(num1)) {
      sum = num1 + num2;
      alert("The sum is "+ sum)
  }
  else {
      alert("Inputs incorrect!");
  }

  function startClock(){
     setInterval(curTime, 1000);
    curTime();
  }
  function curTime() {
      var ti = new Date;
      var hh = ti.getHours();
      var mi = ti.getMinutes(); 
      var ss = ti.getSeconds();

      document.getElementById("hh").innerHTML=hh;
      document.getElementById("mi").innerHTML=mi;
      document.getElementById("ss").innerHTML=ss;
  }

  function bmw(){
      document.getElementById("car1").src="images/bmw1.png";
  }
  function car(){
    document.getElementById("car1").src="images/car1.png";
}

function changeBg() {
    document.body.style.backgroundColor="#ff0000";

}

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  const newDiv = document.createElement("div"); 
  
  // and give it some content 
  const newContent = document.createTextNode("Hi there and greetings!"); 
  
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
  return false;
}


function validateLogin() {
    //     alert("Form Submitted");
    //Getting the data from form DOM
    var uname = document.login.user.value;
    var upass = document.login.pass.value;

    //checking the form elements are filled or not
    if(uname == "" && upass == "") {
        document.getElementById("loginError").innerHTML="Username and Password is required";
        document.login.user.focus();
        return false;
    }
    else if(uname == "") {
        document.getElementById("loginError").innerHTML="Username is required";
        document.login.user.focus();
        return false;
    }
   else if(upass == "") {
        document.getElementById("loginError").innerHTML="Password is required";
        document.login.pass.focus();
        return false;
    }
    else if(uname=="ram" && upass=="ram123")
    {
        window.location.href="/welcome.html";
        return false;
    }
    else{
        document.getElementById("loginError").innerHTML="Username and Password is incorrect";
        return false;
    }
    return true;
}


function singupValidate(){
    var uname = document.register.username.value;
    var upass = document.register.password.value;
    var uemail = document.register.email.value;

    var filter = /^([a-zA-Z])+ {6,}$ /;
    var validuname = uname.match(filter);

    var passfilter = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
     var validpassword = upass.match(passfilter);   
var emailfilter = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/ ;
var validuemail= uemail.match(emailfilter);
      if(validuname == null)
    { 
         document.getElementById("singUpError").innerHTML="Username must be a-z or A-Z only between 6 to 12 characters";
         document.register.username.focus();
         return false;
    }
    else if (validpassword == null)
    {
        document.getElementById("singUpError").innerHTML="Password Complexcity not Match";
        document.register.password.focus();
        return false;
    }
    else if (validuemail == null)
    {
        document.getElementById("singUpError").innerHTML="Email is not valid";
        document.register.email.focus();
        return false;
    }
    else
    {
        document.getElementById("singUpError").innerHTML="Validate Success";
        return false;

    }


    return true;
}
