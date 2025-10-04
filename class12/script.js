function greet(user)
{
    console.log("Good Afternoon "+ user)
    console.log(`Good afternon , ${user}`)// other method for concat a string with variable
}

let r = greet('Abhinav')
console.log(r)
//by default undefined is returned

function sum(a,b)
{
    return a+b;
}

let s = sum(10,20)
console.log(s)

function product(a,b,c)
{
    return a*b*c;
}
console.log(product(10,20,30))

const sub = function (a,b)
{
    return a-b;
}
// new way
console.log(sub(10,20))
console.log(sub(20,14))

function greeting(user='guest')
{
    console.log(`Good evening , ${user}`)// other method for concat a string with variable
}
greeting('Abhinava')
greeting()//default parameter is set as guest

function sum1(n1=100,n2)
{
    return n1+n2;
}

function sum2(n1,n2=100)
{
    return n1+n2;
}

console.log(sum1(400)) // since second parameter is not defined it returns NaN
console.log(sum2(400))  // if only one parameter is given it is considered first