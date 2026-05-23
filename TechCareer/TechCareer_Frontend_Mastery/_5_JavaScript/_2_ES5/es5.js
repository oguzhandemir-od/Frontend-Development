// 1 - ES5 Strict Mode
"use strict";

function myData1(){
    x=5;
    console.log(x);
}
// myData1();

// 2 - Object Methods, Keys
function myData2(){
    const person={name:"Oğuzhan",surname:"Demir",city:"Ankara"}
    const keys=Object.keys(person);
    console.log(keys);
}
// myData2();

// 3 - Object Methods, Values
function myData3(){
    const person={};
    Object.defineProperty(person,"name",{
        value:"Oğuzhan",
        writables:false
    });

    console.log(person.name);
    person.name="Baturhan";
    console.log(person.name);
}
// myData3();

// 4 - Array (ForEach)
function arrayData(){
    var data1=[1,2,3,4,5,6,7,8,9];
    return data1;
}
function myData4(){
    console.log(arrayData());
    var data2=arrayData();
    data2.forEach(function(temp){
        console.log(temp);
    });
}
// myData4();

// 5 - Array (Map)
function myData5(){
    var data2=arrayData();
    var temp=data2.map(function(temp){
        return temp*2;
    });
    temp.forEach(function(temp){
        console.log(temp);
    });
}
// myData5();

// 6 - Array (Filter)
function myData6(){
    var data2=arrayData();
    data2.map(function(temp){
        return temp+1;
    }).filter(function(temp){
        return temp%2==1;
    })
    .forEach(function(temp){
        console.log(temp);
    })
}
// myData6();

// 7 - Array (Reduce)
function myData7(){
    var data2=arrayData();
    var sum=data2.reduce(function(total,number){
        return total+number;
    },0);
    console.log(sum);
}
// myData7();

// 8 - JSON (JavaScript Object Notation)
function myData8(){
    var person={
        name:"Oğuzhan",
        surname:"Demir",
        job:"EE Engineer"
    }

    var jsonToString=JSON.stringify(person);
    console.log(jsonToString.substring(0,6));

    var stringToJson=JSON.parse(jsonToString);
    console.log(stringToJson.name);
    console.log(stringToJson.surname);
}
// myData8();

// 9 - Get, Set
function myData9(){
    var person={
        name:"Oğuzhan",
        surname:"Demir",
        job:"EE Engineer",
        get fullName()
        {
            return this.name+" "+this.surname+" "+this.job;
        },
        set fullName(name){
            var splitData=name.split(' ');
            this.name=splitData[0];
            this.surname=splitData[1];
            this.job=splitData[2];
        }
    }

    console.log(person.fullName);
    person.fullName="Oğuzhan Demir Electronics"
    console.log(person.fullName);
    console.log(person.name);
    console.log(person.surname);
    console.log(person.job);

}
// myData9(); 

// 10 - Get, Set
function myData10(){
    var person={
        name:"Oğuzhan",
        surname:"Demir",
        job:"EE Engineer",
        fullName:function(){
            return this.name+" "+this.surname;
        }
    }

    var student={
        name:"Baturhan",
        surname:"Demir",
    }

    var dataBind=person.fullName.bind(student);
    console.log(dataBind());

}
myData10(); 