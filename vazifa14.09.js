/** bu vazifalar CRUD amallari uchun berilmoqda.*/

/** ushbu vazifalarni exam sifatida qabul qiling */
let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 1994, name: "Asilbek Topilov" },
  { id: 3, year: 2001, name: "Najmiddin Nazarov " },
  { id: 4, year: 2003, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2011, name: "Hudoyberdieva Mohichehra " },
  { id: 7, year: 1996, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shukurov Shohruh" },
];
/**vazifalar */

//1  students arrayni ichidigilarni yillarni boyicha sartiroka qiling, oldin kamayish hisobda keyin kopayish hisobda
//2 name lari boyicha sartirovka qiling
//3 istalgan 1ta odamni topib bering
//4 2000 yildan kich bolgan bollarni topib bering

//9 studentlar orasidan name berib qidirb topsa boladigan funciton yozing
//10 studentlar orasidan ushbu userni topib bering: { value: 2, key: "id" }

/** pasdagi vazifalarni hech narsa qaytarmasin studentni ozini ozgartirib bersin  */

//5 shunday function yozingki unga kimni id raqami berilda, studentlar orasidan  shu odamni ochirib yuborsin 
//6 studentlar qatoriga yana 1ta student qoshib beradigan function yozing: masalan: addUser({year: 1994, name: "Jamshid Makhmudov" }).
//7 studentlarni yoshlariga 1 yoshdan qoshib qoying: function.
//8 studentlar orasidan 1tasini shu student bilan almashtiring: { id: 1, type: "name", value: "James Adams" }. unutmang har bir user 
//uchun id unque hisoblanadi.




 


// *TODO 1   Sort by Age
//let sortedByAge = students.sort((a,b)=>a.year-b.year)                  // *! Bajarildi
//console.log(sortedByAge)

// *TODO 2  Sort by Name
//let sortedByName = students.sort((a,b)=>a.name.localeCompare(b.name))          // *! Bajarildi
//console.log(sortedByName)



// *TODO 3   Get random name 

//let getRandom = ()=>students[Math.floor(Math.random()*(students.length+1))]               // *! Bajarildi
//console.log(getRandom().name)


// *TODO 4   Get user ages < 2000 

//let getLower = students.filter((value)=>value.year>2000)                // *! Bajarildi
//console.log(getLower)

// *TODO 9   Get user by name

// function getUserName(name) { 
//   let username = students.filter((value=>value.name===name))                      // *! Bajarildi
//   console.log(username)
  
// }
// getUserName("Shukurov Shohruh")

// *TODO 10   Get user by given object values


// let obj = { value: 2, key: "id" }

// function getByObj(obj) {
//   let key = `${obj.key}`
//   let val = obj.value
//   let user  = students.filter(value=>value[key] ===val)                 c
//   console.log(user)
  
// }

// getByObj(obj)


// *TODO 5   Delete user by given id
// let id = 1

// students.splice(id-1,1)                                // *! Bajarildi
// console.log(students)



// *TODO 6   Add user by given obj


// function addUser(year , name, arr) {
//   let obj = {}
//   obj.id = arr.length+1                    
//   obj.year = year
//   obj.name = name
//   arr.push(obj)
//   console.log(arr)                                                // *! Bajarildi

// }
// addUser(1994, "Jamshid Makhmudov" , students)


// *TODO 7   Add user year  1 
// let addAge = students.map(({id, year, name})=>({id, year:year+1, name}))         // *! Bajarildi
// console.log(addAge)



// *TODO 8 Change user by given user name { id: 1, type: "name", value: "James Adams" }


// let obj = { id: 1, type: "name", value: "James Adams" }
// let find  = students.findIndex(value=>value.id ===obj.id)   // *! Bajarildi
// students[find].name = obj.value
// console.log(students)



  
// *TODO 11 
//output is: { name: [ { firstname: 'Jamshid', lastname: 'Makhmudov' } ] }
// topshiriq output 'Jamshid' chiqquncha desturture ni davom ettiring
  
// const data = [students = { name: [{firstname: "Jamshid", lastname: "Makhmudov"}] }];        // *! Bajarildi
// const [{name:[{firstname}]}] = data; 
// console.log(firstname); 



// *TODO 12 
/**anagrams. lanrni bilasizmi? https://en.wikipedia.org/wiki/Anagram
 berilgan arraydan anagramlarni tozalab beradigan function yozing masalan: 
  input: let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];                  // *! Bajarildi
  output: "nap,teachers,ear" yoki "PAN,cheaters,era" chiqsin.
   natija array korinishda qaytsin

 */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let newArr = arr.map(value=>value.split('').sort().join(''))
//let neeewArr = newArr.sort(value=> va)
//console.log(newArr)

function findDuplicates(arr) {
  let newArr = arr.map(value=>value.split('').sort().join(''))                 // *! yechish kere
  return newArr.filter((item, index) => item  );                                
}
console.log(findDuplicates(arr))

students.map(function fn(value,index,array) {

  
})