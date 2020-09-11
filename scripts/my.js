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

  num1= "x4";
  num2= 5;
  sum =  eval(num1) + num2;
  document.write("<br/>Again The sum is "+sum);


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


