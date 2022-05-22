const process = require('process');
  
// Printing process.argv property value
var args = process.argv.slice(2);
  
//console.log(JSON.stringify(process.argv.slice(2)));
  
var result=fun();
function fun(){
    var opr=args[0];
    var num1=Number(args[1]);
    var num2=Number(args[2]);
    var ans=0
   if(opr=='add'){
         ans=num1+num2;
         console.log(ans);
   }
   else if(opr=='sub'){
    ans=num1-num2;
    console.log(ans);
   }
   else if(opr=='mul'){
    ans=num1*num2;
    console.log(ans);
    }
    else if(opr=='div'){
    ans=num1/num2;
    console.log(ans);
    }
    else {
    console.log("Error")
    process.exit(9)
    }
}   
