const readline=require('readline-sync');
var num1=Number(readline.question('Enter Num1'));
var num2=Number(readline.question('Enter Num2'));
var opr=readline.promptCLLoop({
  'add':function(){
    ans=num1+num2;
    console.log(ans);
    return true;
  },
  'sub':function(){
    ans=num1-num2;
    console.log(ans);
    return true;
  },
  'mul':function(){
    ans=num1*num2;
    console.log(ans);
    return true;
  },
  'dsn':function(){
    ans=num1/num2;
    console.log(ans);
    return true;
  }
})
