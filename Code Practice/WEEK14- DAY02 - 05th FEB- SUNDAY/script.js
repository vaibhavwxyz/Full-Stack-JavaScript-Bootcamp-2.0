// console.log(foo);
// var foo = "bar";

// price();
// function price() {
//   let soap = 29;
//   console.log(soap);
//   discount();
//   function discount() {
//     soap = 27;
//     let finalPrice = 21;
//     console.log(soap);P
//     console.log(finalPrice);
//   }
// }

// let foo = "bar";
// console.log(typeof foo
// a();
// function a() {
// 	let x = 10;
// 	// console.log(x);
// 	// console.log(y);
// 	b();
// 	function b() {
// 		let y = 20;
// 		console.log(x);
// 		c();
// 		function c() {
// 			let z = 30;
// 			console.log(x);
// 			console.log(y);
// 		}
// 	}
// }

{
	// block, we group together multiple statements in blocks
	// var a = 10;
	// console.log(a);
}

// if (true) console.log(a); // valid

// // what all var an funcitons that access inside the block

// {
// 	var aa = 10;
// 	let bb = 20;
// 	const cc = 30;
// 	console.log(aa);
// 	console.log(bb);
// 	console.log(cc);
// }
// console.log(aa);
// console.log(bb);
// console.log(cc);

// var a = 100;
// {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(a);

let a = 10;

test();
function test() {
	a = 20;
	console.log(a);
}
