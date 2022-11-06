//asynchronous
// setTimeout(()=>{
//     console.log("hello");

//     },5000)

//     console.log("how are you?");
//     //callback , promise, asyncawait, 

//callback function
//arrow-function
var test=(a,b,c)=>{
    console.log("Addition is ",a+b);
    c(); //call back funtion call of demo 
};

var demo=()=>{
    console.log("hello"); //callback function
};

test(4,5,demo);//call back funtion call in test function

// Promise
//return new Promise(()=>{});
console.log("Promise");

//var abc=()=>{
//     let a=2;
//     let b=2;
//     let ab=a+b;
//     console.log("addition",ab);
//     return ab;
// };
// const xyz=()=>{
//     return new Promise((resolve,reject) => {
//         let flag=true;
//         if(flag===false){
//             resolve(abc());
//         } else{
//             reject("promise rejected");
//         }
//     })
// };

// xyz()
// .then((value)=> console.log("after resolve --->",value))
// .catch((error)=> console.log("after rejected-->",error));

var abc=()=>{
    let a=2;
    let b=2;
    let ab=a+b;
    console.log("addition is",ab);
    return ab;
  };
  
  function resolveAfter2Seconds(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(abc());
      },2000);
    });
  }
//   function asyncCall(){
//     let abc=6;
//     console.log("calling");
//     const result= resolveAfter2Seconds();
//     console.log("after resolve result ",result);
//     const FinalResult=result+abc;
//     console.log("after resolve ",FinalResult);
//   } 
//   asyncCall();


  
//   var clouser;
  console.log();
  console.log();
  console.log("asynchAwait()");

async function asyncCall(){
    let abc=6;
    console.log("asyncAwait function calling");
    const result= await resolveAfter2Seconds(); //await with asynch function 
    console.log("after resolve result ",result);
    const FinalResult=result+abc;
    console.log("after resolve ",FinalResult);
}
asyncCall();
