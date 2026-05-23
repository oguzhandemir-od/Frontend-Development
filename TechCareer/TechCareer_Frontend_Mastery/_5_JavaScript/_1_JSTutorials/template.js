// alert("External JS")
// window.alert("External JS")

// Log
// console.log("Log");

// Warning
// console.warn("Warning");

// Info
// console.info("Info");

// Error
// console.error("Error");

//////////////////////////////////////////////
// Variable (Global)
// var kelime="Js Tutorial";
// console.log(kelime);
// // alert(kelime)

// // Hoisting
// kelime44="Kelimeler";
// var kelime44;

// var sayi=44;
// console.log(sayi);
// var sayi=44.23;
// console.log(sayi);

// var karar=true;
// console.log(karar);

// // Let
// let kelime2="Math"
// console.log(kelime2);

// // Const
// const kelime4="Math"
// console.log(kelime4);

// Operators
// let number1=11;
// let number2=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);
// console.log(number1**number2);

// && Ve || Veya ! Değil > >= < <=
// Atama
// == Eşittir (Türüne bakmaksızın)
// === Eşittir (Türüne bakarak)

////////////////////////////////////////////////////
// Kullanıcıdan veri alma
// let user1=Number(prompt("Lütfen 1. sayıyı giriniz"));
// let user2=parseInt(prompt("Lütfen 2. sayıyı giriniz"));

// console.log(user1+user2);
// console.log(user1-user2);
// console.log(user1*user2);
// console.log(user1/user2);
// console.log(user1%user2);
// console.log(user1**user2);
//////////////////////////////////////////////////////////

// Math
// let user=Number(prompt("Lütfen 1. sayıyı giriniz"));
// console.log("Pi: "+Math.PI);
// console.log("E: "+Math.E);
// console.log("Mutlak Değer: "+Math.abs(user));
// console.log("Karekök: "+Math.sqrt(user));
// console.log("Kare: "+Math.pow(user,2));

// console.log("Yuvarla: "+Math.round(7.3));
// console.log("Yuvarla: "+Math.round(7.5));
// console.log("Aşağı Yuvarla: "+Math.floor(8.9));
// console.log("Yukarı Yuvarla: "+Math.ceil(8.1));

// console.log("Rastgele: "+Math.random());
// console.log("Rastgele: "+Math.random()*4+1);
// console.log("Rastgele: "+Math.floor(Math.random()*4+1));


// console.log("Sin: "+Math.sin(45));
//////////////////////////////////////////////////////////

// TypeOf
// let variable1=44;
// console.log(typeof variable1);

// variable1=String(44);
// console.log(typeof variable1);

// variable1=true;
// console.log(typeof variable1);

// variable1=()=>{};
// console.log(typeof variable1);
//////////////////////////////////////////////////////////

// Undefined
// let data;
// console.log(data);
//////////////////////////////////////////////////////////

// NaN
// let data1=44/22;
// console.log(data1);

// data1=44/"22";
// console.log(data1);

// data1=44/"abc";
// console.log(data1);

// if(isNaN(data1)){
//     console.log("Lütfen sayı giriniz.");
// }
//////////////////////////////////////////////////////////

// Infinity
// console.log(0/44);
// console.log(44/0);
//////////////////////////////////////////////////////////

// Escape
// let escape1="1.Alan '2.Alan";
// console.log(escape1);

// escape1='1.Alan \'2.Alan';
// console.log(escape1);

// escape1="1.Alan \n\t'2.Alan\u00a9";
// console.log(escape1);
//////////////////////////////////////////////////////////

// Sayısal İşlemler
// let number1=55.44;
// // document.writeln(number1);
// console.log(number1);
// console.log(typeof(number1));
// console.log(Number(number1));
// console.log(parseInt(number1));
// console.log(parseFloat(number1));

// // Normal Gösterim
// let bilimsel=1300000;
// console.log(bilimsel);

// // Bilimsel Gösterim
// bilimsel=13E+5;
// console.log(bilimsel);
// bilimsel=13E-5;
// console.log(bilimsel);

// const number2=1453.1234;

// console.log(number2.toExponential(1));

// // 10'luk Tabana Çevirme
// let binary=0b0100101101010;
// console.log(binary);

// let octa=0o76511;
// console.log(octa);

// let decimal=123456;
// console.log(decimal);

// let hexadecimal=0xfbc12;
// console.log(hexadecimal);

// // 10'luk Tabandan Çevirme
// let number3=4444;
// let binary3=number3.toString(2);
// console.log(binary3);

// let octa3=number3.toString(8);
// console.log(octa3);

// let hexa3=number3.toString(16);
// console.log(hexa3);

// // Fixed
// const number4=1234.56789
// console.log(number4.toFixed(2));
//////////////////////////////////////////////////////////

// Metinsel İşlemler
// let vocabulary="Html5, CSS3, javascript, jquery, Html5";
// vocabulary=String(vocabulary);
// vocabulary=vocabulary.trim();

// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim());

// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.toLowerCase());

// console.log(vocabulary.startsWith("H"));
// console.log(vocabulary.endsWith("y"));

// console.log(vocabulary.concat("-INC"));
// console.log(vocabulary.replace("jquery","React JS"));

// console.log(vocabulary.substring(4));
// console.log(vocabulary.substring(1,3));

// console.log(vocabulary.indexOf("Html5"));
// console.log(vocabulary.lastIndexOf("Html5"));

// console.log(vocabulary.charAt(0));
//////////////////////////////////////////////////////////

// Functions
// function parametresizReturnsuz(){
//     console.log("Parametresiz Returnsuz");

// }
// parametresizReturnsuz();

// function parametreliReturnsuz(adi,soyadi,sehir){
//     console.log("Parametreli Returnsuz: "+adi+" "+soyadi+" "+sehir);

// }
// parametreliReturnsuz("Oğuzhan","Demir","Ankara");

// function parametresizReturnlu(){
//     return "Parametresiz Returnlu";

// }
// const data3=parametresizReturnlu();
// console.log(data3);

// function parametreliReturnlu(adi,soyadi,sehir){
//     // return "Parametresiz Returnlu" + " "+adi+" "+soyadi+" "+sehir;
//     return `Parametresiz Returnlu:  ${adi} ${soyadi} ${sehir}`;

// }
// const data4=parametreliReturnlu("Oğuzhan","Demir","Ankara");
// console.log(data4);
///////////////////////////////////////////////////////////////////
// (function(){
//     console.log("Immedia Anonymous Function");
// })();

// (()=>{
//     console.log("Immedia Arrow Function");
// })();

// Normal Function
// function normal(){
//     console.log("Normal Function");
// }
// normal();

// // Anonymous Function
// const anonymousFunction = function(){
//     console.log("Anonymous Function");
// }
// anonymousFunction();

// // Anonymous Function
// const arrowFunction = ()=>{
//     console.log("Arrow Function");
// }
// arrowFunction();
//////////////////////////////////////////////////////////

// Conditionals
// let conditional1 = () => {
//     const number = 10;
//     if (number > 5) {
//         console.log(number + " sayısı 5'ten büyüktür.");
//     }
//     else {
//         console.log(number + " sayısı 5'ten küçüktür.");
//     }
// }
// conditional1();

// let conditional2 = () => {
//     const number = 3;
//     let result = (number > 5) ? number + " sayısı 5'ten büyüktür."
//         : number + " sayısı 5'ten küçüktür.";
//     console.log(result);
// }
// conditional2();

// let conditional3 = () => {
//     const number = 5;
//     if (number == 1) {
//         console.log("Sayı 1'e eşittir.");
//     }
//     else if (number == 2) {
//         console.log("Sayı 2'ye eşittir.");
//     }
//     else if (number == 3) {
//         console.log("Sayı 3'e eşittir.");
//     }
//     else if (number == 4) {
//         console.log("Sayı 4'e eşittir.");
//     }
//     else if (number == 5) {
//         console.log("Sayı 5'e eşittir.");
//     }
//     else {
//         console.log("Sayı 5'ten farklıdır.");
//     }
// }
// conditional3();

// let conditional4 = () => {
//     const number = 5;
//     switch (number) {
//         case 1:
//             console.log("Sayı 1'e eşittir.");
//             break;
//         case 2:
//             console.log("Sayı 2'ye eşittir.");
//             break;
//         case 3:
//             console.log("Sayı 3'e eşittir.");
//             break;
//         case 4:
//             console.log("Sayı 4'e eşittir.");
//             break;
//         case 5:
//             console.log("Sayı 5'e eşittir.");
//             break;
//         default:
//             console.log("Sayı 5'ten farklıdır.");
//             break;
//     }
// }
// conditional4();
///////////////////////////////////////////////////////

// Loops
// let loop1=()=>{
//     for(let i=0;i<10;i++)
//     {
//         console.log(i);
//     }
//     // for(;;){} => Sonsuz döngü
// };
// loop1();

// let loop2=()=>{
//     let i=0;
//     while(i<10)
//     {
//         console.log(i);
//         i++;
//     }
//     // while(true){} => Sonsuz döngü
// };
// loop2();

// let loop3=()=>{
//     let i=0;
//     do{
//         console.log(i);
//         i++;
//     }
//     while(i<10)
//         {
//             console.log(i);
//             i++;
//         }
// }
// loop3();
///////////////////////////////////////////////////////

// Exception Handling
// let exceptionHandling=()=>{


//     try {
//         alerx("Popup");

//     } catch (err) {
//         console.error(err);
//         console.error(err.message);

//     }
//     finally{
//         console.log("Port close");
//     }
//     console.log("Son satır mutlaka görünsün.");
//     throw new Error("Hata44");
// };
// exceptionHandling();
///////////////////////////////////////////////////////

// Set TimeOut
// let setTimeOutFunction=()=>{
//     setTimeout(() => {
//         console.log("Çalışsın");
//     }, 3000)
// }
// setTimeOutFunction();

// // Set Interval
// let setIntervalFunction=()=>{
//     setInterval(() => {
//         console.log("Sürekli Çalışsın");
//     }, 1000)
// }
// setIntervalFunction();
///////////////////////////////////////////////////////

// // Asenkron
// // 1 - Callback Function
// const callbackFunction=()=>{
//     // 1. Alan
//     let hesapla=(x,y,callback)=>{
//         let result=x+y;
//         callback(result);
//     };

//     // 2. Alan
//     let goster=(data)=>{
//         console.log("Sonuç: "+data);
//     };

//     hesapla(5,3,goster);
// };
// callbackFunction();
// ///////////////////////////////////////////////////////

// // 2 - Promise Function
// const promiseFunction=()=>{
//     const myPromise=new Promise((resolve,reject)=>{
//         let number=5 //Math.floor(Math.random()*10);
//         if(number%2==0){
//             resolve(number);
//             console.log("Çift sayı");
//         }
//         else{
//             reject(number);
//             console.log("Tek sayı");
//         }
//     }).then(()=>{
//         console.log("Then çalıştı");
//     }).catch((err)=>{
//         console.log("Catch çalıştı");
//         console.error(err.message);
//     })
// };
// promiseFunction();

// // 3 - Await Function
// const asynAwaitFunction=()=>{
//     async function myFunction(){
//         try {
//             let response=await fetch('')
//         let result=response.json();
//         } catch (error) {
//             console.log(error.message);
//         }

//     }
// }
// asynAwaitFunction();
/////////////////////////////////////////////////////

// Arrays
// let diziFunction=()=>{
//     let dizi=[1,4,3,5,6,2];
//     // dizi.sort();
//     // dizi.sort().reverse();

//     console.log(dizi);
//     console.log(dizi.length);
//     console.log(dizi[dizi.length-1]);

//     let sum=0;
//     for(let i=0;i<dizi.length;i++){
//         sum+=i;
//     }
//     console.log(sum);

//     // For-In
//     for (const temp in dizi) {
//         console.log(`${temp}=>${dizi[temp]}`);
//     }
//     dizi.push(99);
//     dizi.unshift(11);
//     dizi.pop(0);
//     dizi.shift();


//     //For-Of
//     for (const temp of dizi) {
//         console.log(`${temp}`);
//     }

//     dizi.map((value,index,array)=>{

//         return value=value*2;
//     }).filter((value,index,array)=>{

//         return value>=value*2;
//     })

// };
// diziFunction();
///////////////////////////////////////////////

// Class

// const classExample = () => {
//     class Person {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//         greet() {
//             console.log(`Merhaba ${this.name}, yaş ${this.age}`);
//         }
//     }
//     let personData1=new Person("Oğuzhan",28);
//     personData1.greet();
// };
///////////////////////////////////////////////

// Object
// const objectExample=()=>{
//     let city={
//         name:"Ankara",
//         age:20,
//         state:["Çankaya","Yenimahalle","Altındağ"],
//         getInfo:function(){
//             return `Şehir Adı: ${this.name} Yaş: ${this.age} İlçeler: ${this.state}`;

//         }
        
//     };
//     console.log(city);
//         console.log(city.name);
//         console.log(city.age);
//         console.log(city.state);
//         console.log(city.state[0]);

//         const data=city.getInfo();
//         console.log(data);
// };
// objectExample();
///////////////////////////////////////////////

// InstanceOf
// const instanceOfFunction=()=>{
//     function Hayvan(tur){
//         this.tur=tur;
//     }

//     function Kopek(cins){
//         this.cins=cins;
//     }

//     Kopek.prototype=new Hayvan();
//     let karabas=new Kopek("Karabaş Kangal");

//     console.log(karabas instanceof Kopek);
//     console.log(karabas instanceof Hayvan);

// }
// instanceOfFunction();
///////////////////////////////////////////////

// Local Storage
const localStorageFunction=()=>{
    localStorage.setItem("unique_name","Harun");
    const username=localStorage.getItem("unique_name");
    console.log(username);
    localStorage.removeItem("unique_name");
    localStorage.clear();
}
localStorageFunction();

const greet=()=>{
    alert("Event çalıştı");
}
/////////////////////////////////////
// Event
const parag_change=()=>{
    //alert("Event Çalıştı")
    let parag=document.getElementById("parag_id");
    //parag.innerHTML="<b><mark>İnner Html Değiştirdi</mark></b>";
    parag.innerText="<b><mark>İnner Html Değiştirdi</mark></b>";
    parag.style.color="white";
    parag.style.backgroundColor="black";
    parag.style.margin="1rem";
    parag.style.padding="1rem";
  }
  
  // AddEventListener
  parag_id.addEventListener("click",()=>{
    alert("Kopyalama");
  });