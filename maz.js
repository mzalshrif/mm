var codes = document.getElementById("codes");
var play = document.getElementById("play");
var remove = document.getElementById("remove");
var result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML=codes.value
    localStorage.setItem("RESULT" , codes.value);
    
}
remove.onclick = ()=>{
    result.innerHTML ="";
    codes.value ="";
}
onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
    result.innerHTML=codes.value
}


