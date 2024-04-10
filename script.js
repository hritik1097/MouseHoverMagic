const main=document.querySelector(".main")
// const square=document.querySelector(".square")
const color=["red","green","yellow","blue","grey","orange","white","black"]
let squarecount=500;
function randomcolor(color){
    return color[Math.floor(Math.random()*color.length)]
}
function setcolor(getcolor){
getcolor.style.backgroundColor=randomcolor(color);
}

function removecolor(getcolor){
    getcolor.style.backgroundColor="#1D1D1D";
    getcolor.style.boxShadow="0 0 2px 0 rgba(0, 0, 0, 0.03)";
    }

for(let i=0;i<squarecount;i++){
    const square=document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=>{
        setcolor(square)
    })

    square.addEventListener("mouseout",()=>{
        removecolor(square)
    })
main.appendChild(square)
}