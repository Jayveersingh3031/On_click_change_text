const arr =["apple", "mango","grapes","banana"]
let i=0;
let h=document.querySelector("#h");
h.addEventListener("click",function(){
    h.textContent=arr[i]
    i++;
    if(i==4){
        i=0
    }
})
