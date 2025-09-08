//creating a family story with object

console.log("Our family story");

//Family events

let family = {
    name :"AT family",
    male : "sohel",
    female: "tania",
    marriage : 2017,
    babyname : "inaaya",
    birthday : "23.04.2023",
    city: "Dhaka",
    country : "bangladesh",
    fathervisa :2022,
    mothervisa:2025,
    new_country: "portugal",
    new_city: "lisbon",
}
// making the story with the object 


console.log(family.male +"  "+ 'and' + "  "+family.female+ " "+ "got married" + " "+"in "+ family.marriage +" .");

console.log("they gave birth a baby"+" "+family.babyname+" "+"in"+" "+family.birthday+" "+" "+"at"+" "+family.city+","+family.country+".");

console.log(family.male+" "+" got visa"+" "+ "in" +" "+family.fathervisa +".");

console.log(family.female+" "+"got visa"+" "+"in" +" "+family.mothervisa+".");

console.log("finally"+" "+family.name+" "+"started living"+" "+"in"+" "+family.new_city+" "+"in"+" "+family.new_country+".");
