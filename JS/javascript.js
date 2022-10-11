/*
document.write("<h2>Sum of two numbers</h2>");
var a,b,num1,num2,sum;
a=window.prompt("Enter first number: ","0");
b=window.prompt("Enter second number: ","0");
num1=parseInt(a);
num2=parseInt(b);
sum=num1+num2;
document.writeln("<strong>The sum of "+a+" and "+b+" is: "+sum+"</stong>")

document.write("<br><br>");

document.write("<h2>Greater of two numbers</h2>");
var a,b,num1,num2,sum;
a=window.prompt("Enter first number: ","0");
b=window.prompt("Enter second number: ","0");
num1=parseInt(a);
num2=parseInt(b);
if (num1>num2)
{
    document.writeln("The greater number is "+num1);
}
else
{
    document.writeln("The greater number is "+num2);
}
*/
document.write("<h2>Product of three numbers</h2>");
var a,b,c,num1,num2,num3,prod;
a=window.prompt("Enter first number: ","0");
b=window.prompt("Enter second number: ","0");
c=window.prompt("Enter third number: ","0");
num1=parseInt(a);
num2=parseInt(b);
num3=parseInt(c);
prod=num1*num2*num3;
document.writeln("<strong>The product of "+a+", "+b+" and "+c+" is: "+prod+".</stong>")