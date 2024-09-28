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

// function summa(n) {
// 	let sum = 0;
// 	for (let index = 0; index <= n; index++) {
// 		sum+=index
		
// 	}
// 	console.log(sum)
	
// }
// summa(4)

let sum = 0
let index = 0
function summaRecursion(n) {
	console.log(sum)
	if (index<=n) {
		sum+=index
		index++
		return
		
	}
	summaRecursion(n-1)
	
}

summaRecursion(4)


//3- vazifa
/** 5 sonini factorialini toping.
 * factorial nima degani?  https://en.wikipedia.org/wiki/Factorial 
 */


// function factorial(n) {
// 	let facto = 1
// 	for (let index = 1; index <= n ; index++) {
// 		facto *=index
		
// 	}
// 	console.log(facto)
	
// }

// factorial(5)


//4 vazifa
/** n raqami berilgan bolsa uni fibonacisini toping. 
 * fibonaci nima degani? https://en.wikipedia.org/wiki/Fibonacci_number
 */


