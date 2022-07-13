function MudarFundo(){
    let corR = Math.floor(Math.random() * 255)
    let corG = Math.floor(Math.random() * 255)
    let corB = Math.floor(Math.random() * 255)
    let cor = `rgb(${corR} , ${corG}, ${corB})`
   console.log(cor)
    document.body.style.backgroundColor = cor
}

document.querySelector("#btColorir").addEventListener("click", function(){
   MudarFundo()
})