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
//8 studentlar orasidan 1tasini shu student bilan almashtiring: { id: 1, type: "name", value: "James Adams" }. unutmang har bir user uchun id unque hisoblanadi.




 


// *TODO1   Sort by Age
//let sortedByAge = students.sort((a,b)=>a.year-b.year)
//console.log(sortedByAge)

// *TODO2  Sort by Name
//let sortedByName = students.sort((a,b)=>a.name.localeCompare(b.name))  
//console.log(sortedByName)



// *TODO3   Get random name 

//let getRandom = ()=>students[Math.floor(Math.random()*(students.length+1))]
//console.log(getRandom().name)


// *TODO4   Get user ages < 2000 

//let getLower = students.filter((value)=>value.year>2000)
//console.log(getLower)

// *TODO4   Get user ages < 2000 