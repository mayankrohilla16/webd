var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

//counter.innerHTML = 11111;

let count=1;
setInterval(() =>{
    if(count<1111){
        count++
        counter.innerText= count;

    }
    
},1)


