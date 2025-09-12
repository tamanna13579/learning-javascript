//learning function
// learning addition through function

function toAddition(p,t){
return p+t;
}

let value= toAddition(10,50);
console.log(value);

//substruction + reuse

function substruction(m,n){    
    return m-n;
}
let result=substruction(99,29) + toAddition(50,26);
console.log(result);

//multilication + reuse

function toMultiplication(o,p){
    return o*p;
}
let sum =toMultiplication(9,8);

console.log(sum);

//multi function

function multiUse(a,b){
    // addition  // subtraction ,multiplication,division    
    let add = a+b;
    let sub = a-b;
    let mul = a*b;
   console.log(add + sub - mul);
}
multiUse(10,5);