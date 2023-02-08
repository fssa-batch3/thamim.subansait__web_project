

// let string = "";
// for(let i = 5; i >=1;i--){
//     string+= i+ " ";
// }
// console.log(string);

// let n=7;
// let string = "";
// for(let i = 1; i <=n; i=i+2){
//     string+= i+ " ";
// }
// console.log(string);

// let n = 4
// let string = "";
// let second=" ";
// for(let i = 1; i <=1;i++){
//     string+="    "+i;
    
    
// }
// console.log(string)

// for(let i = 4; i>=1; i--){
//     second+= i+" ";
// }
// console.log(second)

// let n=5;
// let str="";
// for(let i=1;i<=n;i++){
//     for (let j=i;j<=n;j++){
//     str+=j+" "
// }
//     str+="/n"
// }
// console.log(str)



// let n = 5
// let string = "";
// for(let i = 1; i <=n;i++){
    
//     string+= i+ " ";
// }
// console.log(string);



//-----------------------------------------//

// let n = 5;
// // Repeat n times
// for(let i = 1; i <= n ; i++) {
// //	//spaces + sequence of numbers
// 	console.log( Spaces((n - i + 1)) + NumSequence(i));
// }
 
//console.log( getSpaces(3) + getNumSequence(1));


//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

// function space(n) {
// 	let str = "";
// 	for(let i = 1; i <= n ; i++) {
// 		str = str + " ";
// 	}
// 	return str;
// }


// function NumSequence(n) {
	
// 	let numseq_str = "";
// 	for(let i = 1; i <= n; i++) {
// 		numseq_str = numseq_str + i + " ";

// 	}
// 	return numseq_str;
// }
		
//Reverse half diamond
	//Repeat 2 times
		// spaces + sequence in reverse of numbers

// let n=3;
// let string="";
// for(let i=1;i<=n;i++){
//     string+= i+" "
// }
// console.log(i)

// function getspace(n){
//   let space="";
//   for(let i=1;i<n;i++){
//     space+="..";
//   }
//   return space
// }

// function number(n){
//   let container="";
//   for(let i=n;i>=1;i--){
//     container+=i +" ";
//   }
//   return container
// }

// let n=5;
// for(let i = 1 ; i<=n;i++){
//   console.log(getspace((i))+number(n-i+1))
// }

// let n=3;
// let string="";
// for(let i=1;i<=n,i++;){
//   string+= i+" ";
// }
// console.log(string)
// function number(n){
//   let container="";
//   for(let i=n;i>=1;i--){
//     container+=i +" ";
//   }
//   return container
// }

// let n=5;
// for(let i = 1 ; i<=n;i++){
//   console.log(+number())
// }


// let str = "";
// function series(n) {
//   str = "";
//   for (let j=n;j>=n;j--){
//   for (let i = 1; i <= n; i++) {
//     str += i + " ";
//   }
//   console.log(str);
// }
// }

// let n = 3;
// // repeating code
// series(n);

// n = 2;
// // repeating code
// series(n);

// n = 1;
// // repeating code
// series(n);

// let n=5
// let str="";
// for(let i=n;i>2;i--){
//   str += i+"."
//   console.log(str)
// }

const objectsArray = [
  { id: 1, name: "Object 1" },
  { id: 2, name: "Object 2" },
  { id: 3, name: "Object 3" }
];
// Convert the array of objects to a string using JSON.stringify()

const objectsArrayString = JSON.stringify(objectsArray);

// Store the string in local storage
localStorage.setItem("objectsArray", objectsArrayString);

// Get the string from local storage
const oaString = localStorage.getItem("objectsArray");
//Convert the string back to an array of objects using JSON.parse()
const oArray = JSON.parse(objectsArrayString);

