/**bu vazifani Function Composition orqali yechishga urinib koring:
 function composition yozingki Eng ko'p ishlatilgan belgini(harf...) topsin masalan yakuniy function chaqilganda:

//*TODO pipe function da yozish kere

 getMaxLetter("Some value!") //natija objectda chiqsin: // {count: 2, letter: 'e'} eng kop ishlatilgan belgi ni countda nechtaligini va qayis belgiligin bildirib turish uchun letterda osha belgi chiqsin

 hint:  function compsotion taxmiman shunday xolatda boladi:

 const compose = (a, b) => str => a(b(str));

 sizdan qilinadigan talab a va b function larini yozish.

 
 */

 let text = "Some valuuue"
 
 function b(str) {
  let arr = []
  for (let index of str) {
    const regex = new RegExp(index, "gi")
    arr.push(str.match(regex))
   
  }
  return arr

  }
 //console.log(b(text))
    
  function a(params) {
    //console.log(params)
    let obj = {}
    for (let index = 0; index < params.length; index++) {
      //console.log(params[index+1]?.length)
     if (params[index]?.length>params[index+1]?.length) {
      obj.count = params[index].length;
      obj.letter = params[index][0]
     } else {
      obj.count = params[index+1].length;
      obj.letter = params[index+1][0]
     }     
    return obj
    }
  }


console.log(a(b(text)))
