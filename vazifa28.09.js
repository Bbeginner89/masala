// function recursive() {
//   let counter = 0;
// 	if (counter <= 3) {
// 		console.log("done!") 
// 	}
// 	counter++
	
// 	recursive()
// }


// recursive()


//2 vazifa
/** n soni berilgan, shu songacha bolgan sonlarni barchasini yiginisini toping toping. masalan:  n=3 bolsa, 1+2+3=6
 * n=4 bolsa, 1+2+3+4=10
 */

// let sum = 0

/*function recursiveSum(number) {               
	for (let index = 0; index <= number; index++) {
		sum+=index
	}                                   // *!  for loop bn yechim
	console.log(sum)
	
}                */

/*function recursiveSum(number) {            // *! recursive fn bn yechim
	if (number>0) {
		sum+=number
	}
	else{
		console.log(sum)
		return
	}
	recursiveSum(number-1)
	
}

recursiveSum(10)            */


//3- vazifa
/** 5 sonini factorialini toping.
 * factorial nima degani?  https://en.wikipedia.org/wiki/Factorial 
 */


/*function factorial(n) {
	let facto = 1
	for (let index = 1; index <= n ; index++) {               // *!  for loop bn yechim
		facto *=index
		
	}
	console.log(facto)
	
}  */


/*let facto = 1
function recursiveFactorial(number) {                     // *! recursive fn bn yechim
	if (number>0) {
		facto*=number
	} else {
		console.log(facto)
		return
	}
	recursiveFactorial(number-1)
}

recursiveFactorial(5)   */


//4 vazifa
/** n raqami berilgan bolsa uni fibonacisini toping. 
 * fibonaci nima degani? https://en.wikipedia.org/wiki/Fibonacci_number
 */



let n1 = 0
let n2 = 1
let sum = 0

// function fibonaci(n) {
// 	for (let index=1; index < n; index++){                  // *!  for loop bn yechim
// 		sum = n1+n2
// 		n1 = n2
// 		n2 = sum
			
// 	}
// 	console.log(n2)

// }

function fibonaci(n) {
	if (n>=2) {
		sum = n1+n2
		n1 = n2
		n2 = sum
	}
	else{
		console.log(n2)                                 // *! recursive fn bn yechim
		return
	}
	fibonaci(n-1)

}

fibonaci(16)

