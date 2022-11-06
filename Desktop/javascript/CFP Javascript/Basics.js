
//function defination
let test1=(a,b)=>{
    console.log(a,b);
};
test1(1,2);
//function defination
let a=4 ;
let b  ;
demo()
function demo(a,b){
     a=5;
     b=6;
     c=" anjali";
     let add=a+b+c;
     console.log(add);
     //callback("Anjali");
     return add;
    console.log("addition",a+b);
}
console.log(a);
a=6;
console.log("outside function",a);

function test(a,b,name){
    console.log("hello",name,a+b);
}

test(2,4,true);// test -function call
console.log(a);


//function expression or anonymous function

let d=(c1,c2)=>{
    console.log("Anonymous function",c1+c2);
};
d(2,3); //  Anonymous function-call
xyz(3,5,d); 
let xyz=(m,n,p)=>{
    console.log(p);
    let str=p(2,3);
    console.log("str--->",str);
};
//xyz(3,5,d); //function expression

//arrow function

//var:Variables declared with "var" are in the function scope and values can be reassigned.
var q=5;
var s=5;
function varScope(){
    var q=5;
    var s=6;

    console.log("inside varScope() function itself",q);
    {
        var q=5;
        console.log("inside block ", q);
    }
}
console.log("outside of function ",q);
varScope();

//Let:Variables declared as "let" are in the block scopre and values can be reassigned
let y=4;
function letscope(){
y=8;
y=6;
console.log("inside letscope func ",y);
{
    let a=4;
    a=5;
    console.log("inside blk",a);
}
console.log("inside function itself",a);
}

console.log("outside letScope function itself",y);
letscope();
console.log("outside function itself",y);

//const: variable with 'const' keyword has block level of scope and values can not be reassigned.

var sychVsAsych;

//Blocking methods execute synchronously and non-blocking methods execute asynchronously.

//Blocking

console.log("hii");
console.log("hello");
console.log("how are you ?");

//non-bloccking 
console.log("hi");

//asynchronous
setTimeout(()=>{
    console.log("hello");

    },5000);

    //var hoisting;
// hosting means you can defined a variable before its declaration.

//var:Allowed
x=8;
console.log("how are you?");
//callback , promise, asyncawait, 