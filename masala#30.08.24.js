
// *TODO #1 ushbu functionda user.ref.name nimaga teng va nega? console.log(user.ref.name); user.ref.name nimaga teng va nega? */
/*function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  console.log(user.ref.name)*/


// *TODO #2 conssole.logda nima chiqadi va nega shu code ni izohlab bering 
/*let a = 10;
increase(a)
function increase(a) {
  ++a;

}

console.log(a); */ 


// *TODO #3 
/**
 * berilgan text stringdagi eng oxirgi elementni lengini toping masalan
 * input: "Hello World"                  output: 5 
 * input: "   fly me   to   the moon  "  output: 4
 * input: "luffy is still joyboy"        output: 6
 */

/*let text = "   fly me   to   the moon  "
function getLength(inputString) {
    let arr = inputString.split(" ")
    let last = arr.filter(function (value) {
      return value.length>0
    } 
  )
  return last[last.length-1].length        
}

console.log(getLength(text)) */ 


// *TODO #4
/**shunday function yozingki unga text berib number qiymat berilsa, shu texni uznuligi numberdan kattal bolsa  
 * textni shu numbergacha kesib qolganiga ... belisini qoshisin.
 masalan:

  exampleFunction(str,num) //100 qator...
 */


let srt="100 qator so'z"
let num=10

function names(str,num) {
   if (str.length>num) return str.slice(0,num)
    
  }
  

console.log(names(srt,num))