let firstName: string = 'tata';
let age:number = 22;
let guy:boolean = true;
console.log(guy);
console.log('hey')

// undefined 
// null

// const now = 2023
// const ageBilly  = now + 1997;
// const ageTata = now - 1998;
// console. log (ageBilly, ageTata);

// let x = 5;
// x++;
// x--;
// x+= 5;

// console.log("x =",x);;


// function test(){
//     let guy: Boolean = true;
//     console.log(guy)
// }
// test();
console.log("this works");

// run npm i --save-dev lite-server then add start indie the package-lock
// run npm init
// run tsc app.ts to refresh app.js
// run npm start to run live server


//arrays
//arrays are wrapped in [] inside can be data such as strings and numbers and booleans and objects and more arrays
// ex [1,4,3,5,6] data inside of arrays dont need to be ordered but data can be more easily findable if it is ordered
// ex ["joe", "momma", "dan", "pops"] strings in an array can look like this



//objects
//typescript format
const person
//: {
    //this explicitly explain your types
    // name: string;
    // age: number;
    // hobbies: [];
//} 
= {
    name:"tata",
    age:30,
    hobbies:['sports', 'cooking'],
    role:['batter', 'shooter']
}

person.role.push("Peanut butter");
console.log(person.role);

const notebook = {
    color:"tan",
    design:"pokadot",
    quantiy:1,
    
}

// console.log(notebook.color);


// sometimes this way is better
//javascript format
// const person = {
//     name:"tata",
//     age:30
// }
// console.log(person);
// console.log(person.age);



// person.role.push('admin');

//person.role[1] = 10; will not work because role[1] is a string, cannot be reassigned
// console.log(person.role);
//console.log(person.nickname); would not work here since nickname is not a property of the object
// person. then you will get an auto complete 
//hover over person to see the data format 
//objects are used when you want to pair data values to one type. its like a key, similar to an array

//nested objects 
const product: {

        id: string;
        price: number;
        tags: string[];
        details: {
            title: string;
            description: string;
        }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-neww!'
    }
}




//we will use this 
// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//         title: 'Red Carpet',
//         description: 'A great carpet - almost brand-new!'
//     }
// }
//nested objects are more descriptive and you are able to put more data if needed 

//arrays 
//define variable first 
let favoriteActivities: string[]; //can put any if you want it to do whatever it wants defeats the purpose of typescript
//populate variable afterwards
favoriteActivities = ['sports','cooking', 'driving' ]

//for loop to show all hobbies in the person array 
//hobby is a pointer that begins the loop
for(const hobby of person.hobbies){
    console.log(hobby);
    //console.log(hobby.toUpperCase());
    //console.log(hobby.map()); would not work on type strings
}
//run tsc app.ts


//tuples
//tuples are arrays but are fixed length/type arrays 
//ex [1,2]

const person2: {
    //this explicitly explain your types
    name: string;
    age: number;
    hobbies: string[];
    //this designates that it is a tuple since we defined it specifically
    role: [number, string];
} 
= {
    name:"billy",
    age:33,
    hobbies:['sports', 'cooking'],
    role:[2,'author']
};
person2.role.push('admin');
//things that will not work
// person2.role[1] = 10;
//person.role = [0,'admin', 'user'];
console.log(person2.role);

//Enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role{
    ADMIN = 'ADMIN', READ_ONLY = 200 , AUTHOR= "AUTHOR"
};

const person3 = {
    name:"tommy",
    age:55,
    hobbies:['sports', 'cooking'],
    role: Role.ADMIN
}

if (person3.role === Role.ADMIN){
    console.log('is an admin');
}else{
    console.log('is not an admin');
}
