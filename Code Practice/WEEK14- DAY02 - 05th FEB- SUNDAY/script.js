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
a();
function a() {
	let x = 10;
	// console.log(x);
	// console.log(y);
	b();
	function b() {
		let y = 20;
		console.log(x);
		c();
		function c() {
			let z = 30;
			console.log(x);
			console.log(y);
		}
	}
}
