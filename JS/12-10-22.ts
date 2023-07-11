function isEven()
{
    document.write("<h2>Greatest of three numbers</h2>");
    var a,b,c,num1,num2,num3;
    a=window.prompt("Enter first number: ","0");
    b=window.prompt("Enter second number: ","0");
    c=window.prompt("Enter third number: ","0");
    num1=parseInt(a);
    num2=parseInt(b);
    num3=parseInt(c);
    if (num1>num2)
    {
        if (num1>num3)
        {
            document.writeln("The greatest number is "+num1);
        }
        else
        {
            document.writeln("The greatest number is "+num3);
        }
    }
    else
    {
        if (num2>num3)
        {
            document.writeln("The greatest number is "+num2);
        }
        else
        {
            document.writeln("The greatest number is "+num3);
        }
    }
}

isEven();
