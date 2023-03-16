// // let age=parseInt(prompt("Enter votre  Age "));
// // age>=18 ? alert("vous êtes majeur") : age==0 ? alert("vous n'êtes encore pas né"): alert("vous êtes mineur");


// // for(let x in data){
// //     alert(`${x}:${data[x]}`)
// // }
// // let data1=['bon','jo','ur']
// // for(let x of data1){
// //     alert(`${x}`)
// // }

// // function salutation(nom){
// //     alert("bonjour "+nom)
// // }

// // function passage(callback){
// //     let nom=prompt("Entrer votre nom ")
// //     setTimeout(callback,100) 
// // }
// // passage(salutation)


// let data={
//     fnama:'emmanuel',
//     lname:'bdb',
//     age:99
// }
// var json=JSON.stringify(data)

// alert(json)
// alert(typeof(JSON.parse(json)))
fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((json) => console.log(json));