// 1 - ES6 Strict Mode
"use strict";

// 1 - Let, Const, Arrow Function
let data1=()=>{
    let x1=10;
    console.log(x1);
    x1=5
    console.log(x1);

    const x2=10;
    console.log(x2);

    let k1=44;
    if(3>1){
        let k1=23;
        console.log(k1);
    }
    console.log(k1);
}
// data1();

// 2 - Template Literal
let data2=()=>{
    const name="Oğuzhan";
    const surname="Demir";
    console.log(name+" "+surname);
    console.log(`${name} ${surname}`);
}
// data2();

// 3 - Destruction (Array)
let data3=()=>{
    const array=[1,2,3,4,5];

    const [one,two,three]=[1,2,3];
    console.log(one);
    console.log(two);
    console.log(three);

}
// data3();

// 4 - Destruction (Object)
let data4=()=>{
    const person={
        name:"Oğuzhan",
        surname:"Demir",
        city:"Ankara"
    };
    console.log(person.name);
    console.log(person.surname);
    console.log(person.city);

    const {name,surname,city}=person;
    console.log(name);
    console.log(surname);
    console.log(city);


}
// data4();

// 5 - Rest
let data5=()=>{
    function sum(...temp){
        return temp.reduce((total,n)=>total+n,0);
        // return temp.reduce(()=>{});
    }
    let result1=sum(1,2);
    console.log(result1);
}
// data5();

// 6 - Spread Operators
let data6=()=>{
    const array1=[1,2,3];
    const array2=[4,5,6];
    const combine=[...array1,...array2];
    console.log(combine);
}
// data6();

// 7 - Classes
let data7=()=>{
    class Person{
        // Constructor
        constructor(name,surname){
            this.name=name;
            this.surname=surname;
        }

        // Function
        data(number){
            return `${number} sayısının karesi => ${Math.pow(number,2)}`
        }
    }

    const resultData=new Person("Oğuzhan","Demir");
    console.log(resultData.name);
    console.log(resultData.surname);
    console.log(resultData.data(5));
    const mathPow=resultData.data(5);
    console.log(mathPow);


}
// data7();

// 8 - Modules
import {add,subtract,multiple,divide,mod} from "./Math.js"
import greet from "./Math.js"
let data8=()=>{
    console.log("Toplama: "+add(5,6));
    console.log(`Çıkarma: ${subtract(5,6)}`);
    console.log(`Çarpma: ${multiple(5,6)}`);
    console.log(`Bölme: ${divide(5,6)}`);
    console.log(`Mod: ${divide(5,6)}`);
    console.log(greet("Oğuzhan"));
}
// data8();

// 9 - Promise
let data9=()=>{
    const admin=function(number){
        const isLogin=true;

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(isLogin){
                    console.log("Promise çalıştı");
                    resolve(number)
                }
                else{
                    reject("Hata oluştu...");
                }
            },1000)
        }).then((response)=>{
            console.log("Response: "+response);
        }).then().then().catch((err)=>{console.error("err",err);})        
    }
    admin(44);
}
data9();
