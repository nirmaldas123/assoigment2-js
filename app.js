var math=+prompt("Enter your marks");
var bio=+prompt("Enter your marks");
var physics=+prompt("Enter your marks");
var chemistry=+prompt("Enter your marks");
var botony=+prompt("Enter your marks");

result=math+bio+physics+chemistry+botony;
result1=result*100;
percentage=result1/500;

console.log(percentage + "%" );

if(percentage>=80)
{
    console.log(" Grade = A+");
}
else if (percentage>=70 && percentage <= 80)
{
console.log("Grade=B+");
}
else if(percentage>=60 &&percentage<=70)
{
    console.log("Grade=C");
}
else if(percentage>=50 &&percentage<=60)
{
    console.log("Grade=D");
}
else 
{
    console.log("fAIL");
}
