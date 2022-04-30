console.log("hello")
let fetchbtn = document.getElementById('fetchbtn')
fetchbtn.addEventListener('click' , buttonHandler)
function buttonHandler (){
    const xhr = new XMLHttpRequest()
    // open xhr object (getting the jeson file nothing change😎😎)
    xhr.open('get' ,'https://animechan.vercel.app/api/random', 'true');
    // xhr.open('get' ,'https://jsonplaceholder.typicode.com/todos/1', 'true');
    // on progress what to do
    xhr.onprogress = function(){
        console.log('every thiong is fine')
    }
    xhr.onload = function(){ 
        if (this.status ===200){
// quates = this.responseText ,
parsed =JSON.parse(this.responseText) 
console.log(parsed , typeof parsed)
let printit =document.getElementById('fetchcont')
const h = "  😊🅰 :"
let quote =parsed["quote"]
let character = parsed ["character"]
let anime =  parsed["anime"]
 let print = `<div class="yellow"> amine name :
 ${anime} <hr> character : ${character}<hr>anime : ${quote} </div>`
console.log(typeof print)
let to =JSON.stringify.print
console.log(print)
console.log("every thing is good")
// xhr.onload =function(){let to =JSON.stsringify.print
    // console.log(to)
    // printit.innerHTML ==`<li>${parsed[quates]} </li

// CreateElement = document.createElement('p')
// createElement.innerText= print
// printit.innerText === print;
setTimeout(() => {
    printit.innerHTML = print
}, 2000);
// printit.innerHTML = to

// this.readyState[4] =function(){printit.innerHTML = print}
}
        else{console.log('some problem has occered')}
    }
    xhr.send()

}