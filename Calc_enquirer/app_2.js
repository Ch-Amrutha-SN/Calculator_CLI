const { List } = require('enquirer');
const prompt = new List({
  name: 'keywords',
  message: 'Type comma-separated keywords:'
})

prompt.run()
.then(answers=>{
    var opr=answers[0];
    var num1=Number(answers[1]);
    var num2=Number(answers[2]);
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
    

});
