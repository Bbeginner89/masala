//1
// *TODO#1  *function yozing 3t argument qabul qilsin: expampleFunction(arr arg1 arg2).
//  * bu funtion berilgan arraydan arg1 ga teng va undan katta, arg2 ga teng undan kichik elementlarni ochirb bersin.
//  * berilgan arrayni ozgartirmasin, yangi array qaytarsin. masalan:
//  * let arr = [5, 3, 8, 1];
//  * expampleFunction(arr 1 4) //natija: [3,1]

// let arr = [5, 3, 8, 1];
// function returnFn(arr, higher,lower) {
  
//   let newArr = arr.filter((value,index,array)=>{
//     if (value>=higher && value<=lower){
//       return value
//     }
//   } 
// )
//   console.log(newArr) 
  
// }

// returnFn(arr,1,4)                    // *! Bajarildi.







//2
// *TODO #2 yuqoridagi funksiyaga oxshash lekin yangi array qaytarmasin berilgan arrayni ozgartigan function yozing */

// let arr = [5, 3, 8, 1];

// function returnFn(arr,higher,lower) {
//   for (let element of arr) {
//     if (element<higher || element>lower ) {
//       let index = arr.indexOf(element)
//       arr.splice(index,1)
//     }
    
//   }
//   console.log(arr)

// }


// returnFn(arr,1,4)                    // *! Bajarildi

 




//*TODO #3

/*let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ]; */

/* yuqoridagi  users arrayga qarasez har bir userni name va surname qiymati bor. shunday function yozingki agar 
 unga shu users arrayi berilsa name, surname orniga fulName qaytarsin masalan natija 
 taxmiman shunday bolsin:
 [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
  ]
 */

 /* let newArray = []
  users.reduce(function fn(total, value,index,array) {
    let obj = {}
    obj.fullName = `${value.name} ${value.surname}`
    obj.id = value.id
    newArray.push(obj)
      
    return newArray
  },0
)


  console.log(newArray)    */         // *! BAjarildi.
  
 


// *TODO #4
// berilgan arraydagi agelarni ortacha qiymatini chiqarib beradigan function yozing. masalan:  
// (25 + 30 + 29) / 3 = 28 .demak natija 28 chiqish kerak

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// let arr2 = arr.reduce(function fn(total,value,index,array) {
//   return total+(value.age/array.length)

// },0)

// console.log(arr2)                         // *! Bajarildi



// *TODO #5
/** berilgan arraydan uniquelarni qaytarib beradigan fucntion yozing masalan: natija: [Hare, Krishna, :-O] */

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"]


// function getUnique(txt) {
//   let newtxt = []
//   txt.forEach(element => {
//     if (newtxt.includes(element) ===false){
//       newtxt.push(element)
//     }
//   }
// );
// console.log(newtxt)
// }
  
// getUnique(strings)                   // *! Bajarildi




// *TODO #6
/**
 let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
berilgan arraydan quyidagicha object yasaydigan function yozing, har bir object ni keyi shu objectni 
ichidagi id siga teng bolsin, id unique bolishini hisobga oling:
{
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
 */
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ]

// function makeObj(arr) {
//   let usersObj = {}
//   arr.forEach(function fn(element) {
//     usersObj[element.id] = element
//   }
// )  
//   console.log(usersObj)
// }
                                             

// makeObj(users)                           // *! Bajarildi




// *TODO #7    //*TODO pipe function da yozish kere


/**bu vazifani Function Composition orqali yechishga urinib koring:
 function composition yozingki Eng ko'p ishlatilgan belgini(harf...) topsin masalan yakuniy function chaqilganda:
 getMaxLetter("Some value!") //natija objectda chiqsin: // {count: 2, letter: 'e'} eng kop ishlatilgan belgi ni countda 
 nechtaligini va qayis belgiligin bildirib turish uchun letterda osha belgi chiqsin

 hint:  function compsotion taxmiman shunday xolatda boladi:

 const compose = (a, b) => str => a(b(str));

 sizdan qilinadigan talab a va b function larini yozish. */ 


// let text = "Some value"
// function b(arg) {
//   let obj = {}
//   for (const element of arg) {
//     obj[element] = obj[element]+1 || 1 
//   }
//   return obj
  
// }

// let max  = 0
// function a(arg) {
//   let countObj = {}
//   for (const key in arg) {
//     if (arg[key]>max) {
//       max = arg[key]
//       countObj.count = arg[key]
//       countObj.letter = key
      
//     }

//   }
//  console.log(countObj)    // *! composeda bu ishlatiladi
//  return countObj            // *! pipe da bu ishlatiladi
  
//}


// const compose = (a, b) => str => a(b(str));
// const getMaxLetter = compose(a,b)
// getMaxLetter("Some value!")                                   // *! Bajarildi


// *TODO #8 Tedagini pipe functionda yozish


// const pipe = (a, b) => str => b(a(str));
// const getPipeFunction = pipe(b,a)(text);
// console.log(getPipeFunction)


// *TODO 9. counter yozish kerak har safar function chaqirilganda count 1taga oshishi kerak


function fn1() {
  let count = 0
  function fn2() {
    count++
    console.log(count)
    
  }
  return fn2
}

const counter = fn1()
counter()
counter()
counter()

