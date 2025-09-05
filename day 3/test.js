
//let obj = [10, 50,"sumon","rumon",true,undefined,null];

let info ={
    name:"sumon",
    age:50,
    mobile: "2559265930"
};

//let sumon_age = info.age;
//console.log(obj);

//want to find "null" value  type 

let nullvalue = null;
console.log(typeof nullvalue);

// finding number type 

let model = 20;
console.log(typeof model);


// finding boolean type
let question = true;

console.log(typeof question);

//finding object type

let obj_array = [30,"rumon",];

console.log(typeof obj_array);

// learned proper use of const,  that reassigning  value dosnt work in const

const region = "odevilas";
//region = "martim monij"    
// 
/* tried to put another
 value named as martim monij,but 
 previous value was odevilas.thats
  why i got uncaught type error according to const rules.*/

// var region_var = "odevilas"
// var region_var = "martim monij"

let region_var;
 region_var = "martim monij"

console.log(region_var);

// var                                     // let           //const
// var er moode value reassign kora jai    same              reassign kora jai na
