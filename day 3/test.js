import move from "../my practice2"
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


let firstname = "jony";
let lastname = "lever";

let fullname = "jony lever"
console.log(fullname); 

/*let x = 6;
let y = 7;
let sum = y+x+y;

console.log(sum); 


//implicit type coersion , type of data 
//string
//number
//boolean

/*let a = 5;//number
 let b = "7";// string
 console.log(a+b); // addition er time e number k string e convert kora hoy, thats why a= 5 ke string hisebe dhora hoy.
  etake concat bole
 console.log(typeof(a+b));
 //type of check korle number string hisebe present hoy.


 console.log(a-b);// but substruction er somoy string k number hiebe dhora hoy. 
 // console.log(a*b); // multiplication and division er jonno o same way te kaj korbe

console.log(a/b);
 
 */


/*let a = 5;
let b = "7ab";

console.log(a-b);//etar result NAN(not a number) asche because b er value only number na .

console.log(Number(b)) ; //ekhane b er value kono exact number na.tai NAN asche.

console.log(parseInt(b)); 

//parseInt diye b er value k number hisebe count kora zay.zodi first er dike numeric thake.but  first e number na theke like(7ab) ab thakto thokhon parseInt kaj korbe na .

*/


//boolean (true/false)

let a = 5;
let b = "7";

console.log(a>b); // result false asche, a er value b er theke small .ekhane o "b" er value string ke number hisebe count kora hoise.


let x = "hello"&& 123;

console.log(x); //ekhane x value 123 asche. karon duita e true value.ar duita true value thakle send value k count kora hoy.but first er ta false value hole first er ta e count kora hobe. 