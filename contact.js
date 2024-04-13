var mobilebar = document.getElementById("mobilebar")
var menuicon = document.getElementById("menuicon")
var closebar = document.getElementById("closebar")
menuicon.addEventListener("click",function(){
    mobilebar.style.right=0
})
closebar.addEventListener("click",function(){
    mobilebar.style.right="-50%"
})