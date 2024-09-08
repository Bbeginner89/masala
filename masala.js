

// Case :  obj berilgan unda raqam qatnashgan qismlarni 2ga kopaytirlgan xolatda qaytaring functionda,
//         yangi object yasamasin berilgan objectni ozgartirsin


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu" 
//   }
  
// function fn(obj){
// var objKeys = Object.keys(obj);

// for (let i of objKeys){
//   if (typeof(obj[i]) === "number"){
//     obj[i] = obj[i] *2 ;
  
//     }
//   }
// }    

// fn(menu)
// console.log(menu) 
 



// Object values ni summasini topish 


// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function sumAll(obj) {
// let sum=0;
	
// 	for (let key in obj) {
// 		sum+=obj[key]
// 	}
// console.log(sum);
// }
// sumAll(salaries);


// let arr = Object.entries(salaries);
// console.log(arr);

// function myFunction(total, value, index, arr ) {
//   return arr
// }

// let sum = arr.reduce(myFunction);
// console.log(sum);






// function capital(text){
//   var a = text[0].toUpperCase();
//   var sliced = text.slice(1);
//   console.log(a+sliced)
// }

// capital('bobur')

// let searchText =  function(text, findThis){
//   var searched = text.search(findThis);
//   if (searched >= 0){
    
//     return true;
//   }
//   else{
//     //console.log(false)
//     return false;
//   }
// }
// let givenText = "Bu yerda text bulishi kerak"
// let searching = "yuq"
// console.log(searchText(givenText, searching))



// let pr = "$500"
// function slicer(price){
//   return Number(price.slice(1))
// }

// console.log(typeof(slicer(pr)))





/**  function camelize(str){} degan  fucnction yozing. string qabul qilsin. 
stringdagi "-" belgilarni ochirb "-"dan keyingi harifni bosh harfga ogirsin 
va camel case holatda qaytarib bersin masalan:
 */
 
// camelize("background-color") //natija 'backgroundColor';
// camelize("list-style-image") //natija 'listStyleImage';
// camelize("-webkit-transition") //natija 'WebkitTransition';

// function camelize(str){

//   str = str.replace("-", "")
//   var arr = str.split("-")
//   var upperString = ""

//   for (let i=0; i<arr.length; i++){
      
//     let text = arr[i]
//     let newtext = text[0].toUpperCase()+text.slice(1)
//     upperString+=newtext
//   }

//   return upperString

// }

// console.log(camelize("-webkit-transition"))


//*!-----------------------------------------------------------------------------------------------------------------

// *TODO cache lash uchun function yozib bering.
// * 2ta qiymat olsin va shu ikalasini yiginidisini birinchi cache dan qidirib qaytarsin agar cache shu yigindilar bolmasa undan song hisoblab natijani cache qoyisn va userga natijani qaytarsin.
// *console.log da cachedan olib beryabdimi yoki yangidan hisoblab qaytardimi bilish uchun habar yozib qoying. masalan 
// * birinchi marta funciton ni chaqirganda: 
 
//*console.log(add(2, 3)); //natija logda: "Calculating result: 2,3", qaytgab qiymat: 5
//ikkinchi marta chaqirganda:
//* console.log(add(2, 3)); // "Retrieving from cache: 2,3", qaytgab qiymat: 5 **/



var cacheMemory = [];
const add = function memoizedAdd(a , b){
  var sum = a+b;
  if (cacheMemory.includes(sum)){
    return (`Retrieving from cache: ${a}, ${b},  sum : ${sum}` )
  
  }
  else{
    cacheMemory.push(sum)
    return sum
    
  }

}

// // const add = function memoizedAdd(a , b){
// //   var cacheMemory = [];
// //   var sum = a+b;
// //   let asdf = cacheMemory.includes(sum)
// //   return asdf? `Retrieving from cache sum: ${sum}`:cacheMemory.push(sum)
  

// // }


// console.log(add(4, 3)); 
// console.log(add(4, 3));
 



//*!  23.08.24    ----------------------------------------------------------------------------------------------*/

//1
// *TODO #1 function yozing 3t argument qabul qilsin: expampleFunction(arr arg1 arg2).*/
//  * bu funtion berilgan arraydan arg1 ga teng va undan katta, arg2 ga teng undan kichik elementlarni ochirb bersin.
//  * berilgan arrayni ozgartirmasin, yangi array qaytarsin. masalan:
//  * let arr = [5, 3, 8, 1];
//  * expampleFunction(arr 1 4) //natija: [3,1]
 
/*let arr = [5, 3, 8, 1];

function fn(arr, arg1 , arg2){
  let newArray =[]; 
  for (let i of arr){
    if (i>=arg1 && i<=arg2  ){
      //console.log(i)
      newArray.push(i)
    }
  }
  return newArray

}

let result = fn(arr, 2, 7);
console.log(result)                          */ 



// *TODO #2 yuqoridagi funksiyaga oxshash lekin yangi array qaytarmasin berilgan arrayni ozgartigan function yozing */


// *!    need to solve this

function fn(arr, arg1 , arg2){
  let arr = [5, 3, 8, 1];
  arr.filter(value => value>arg2);
  

}

let result = fn(arr, 2, 7);
console.log(result)  

splice bn yechiladi 



// *TODO #3 yuqoridagi  users arrayga qarasez har bir userni name va surname qiymati bor. shunday function yozingki agar unga shu users arrayi berilsa name, surname orniga fulName qaytarsin masalan natija 
// * taxmiman shunday bolsin:
/* [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];      


function getName(array){
  let fullNameArray=[]
  for (let user of array){
    let fullName = {
      fullName: `${user.name} ${user.surname}`,
      id: user.id
    }

    fullNameArray.push(fullName)
  }
  return(fullNameArray)

}

console.log(getName(users))   */






//1
/**array berilgan uni ichidagi elementlar necha marta takrorlanganligini reduce methodi orqali toping if else ishlatilmasin */
// let arr = [1, 2, 3, 4, 6, 1, 4, 4, 4, 5, 1, "a", "b", "c", "a", "b"];
//natija { '1': 3, '2': 1, '3': 1, '4': 4, '5': 1, '6': 1, a: 2, b: 2, c: 1 }



