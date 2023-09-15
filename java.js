
let arrowRight =document.querySelectorAll(".fa-chevron-right")
let arrowLeft=document.querySelectorAll(".fa-chevron-left")
let movieList=document.querySelectorAll(".movie-list")

arrowRight.forEach((arrow,i)=>{
  let itemNum=movieList[i].querySelectorAll("img").length
 let counter =0
 arrow.addEventListener("click",()=>{

    let windowSlid=Math.floor(window.innerWidth / 270);
    counter++
    if(itemNum -(4 + counter) + (4 - windowSlid) >=0){
        movieList[i].style.transform=`translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value-300}px)`
    }
    else{
        movieList[i].style.transform="translateX(0)"
      counter=0
    }
   })   
})










//start toggle

let ball=document.querySelector(".toggle-light");
let items=document.querySelectorAll(".container, .movie-title, .navbar-container, .sidebar, .profile .toggle, .sidebar i")
 
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})

