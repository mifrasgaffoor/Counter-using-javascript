const maindiv =document.createElement("div");
maindiv.classList.add("maindiv")
const body = document.querySelector("body");
body.appendChild(maindiv);

const counterdiv =  document.createElement("div");
maindiv.appendChild(counterdiv)
const h1h1 = document.createElement("h1h1");
counterdiv.appendChild(h1h1)
h1h1.classList.add("h1h1")
h1h1.innerHTML="Counter"

const numdiv =  document.createElement("div");
maindiv.appendChild(numdiv)
const number = document.createElement("h1");
counterdiv.appendChild(number)
number.classList.add("number")
number.innerHTML=" 0"



const btndiv =  document.createElement("div");
maindiv.appendChild(btndiv)
btndiv.classList.add("btndiv")

const degrasebtn  = document.createElement("button")
btndiv.appendChild(degrasebtn)
degrasebtn.innerHTML="DECREASE"
degrasebtn.classList.add("degrease")



const restbtn  = document.createElement("button")
btndiv.appendChild(restbtn)
restbtn.innerHTML="RESET"
restbtn.classList.add("rest")

const increasebtn  =document.createElement("button")
btndiv.appendChild(increasebtn)
increasebtn.innerHTML="INCREASE"
increasebtn.classList.add("increase")


const NumChange =  document.querySelector("h1");
const btnss = document.querySelectorAll("button");
let num = 0 ;

btnss.forEach(function(item){
item.addEventListener('click', function(e){
    const style = e.currentTarget.classList;
    
    if(style.contains("degrease")){
     num --;
    }

    if(style.contains("increase")){
        num++;
    }

    if(style.contains("rest")){
        num=0;
    }
    NumChange.textContent = num;

    if(num > 0){
        NumChange.style.color='green'
    }

    if(num < 0){
        NumChange.style.color='red'
    }

    if(num == 0){
        NumChange.style.color='white'
    }
})
})

console.log(btnss);
