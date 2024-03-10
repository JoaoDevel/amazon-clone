const slider = document.querySelectorAll("ul img")
const buttonPrev = document.querySelector(".control-prev")
const buttonNext = document.querySelector(".control-next")

let n = 0

function changeSliders() {

    for ( let i = 0; i < slider.length; i++) {
        slider[i].style.display = `none`
    }

    slider[n].style.display = `block`

}



buttonPrev.addEventListener("click", (e) => {
    if(n > 0) {
        n--
    } else{
        n = slider.length - 1
    }

    changeSliders()
})

buttonNext.addEventListener("click", (e) =>{
    if( n < slider.length - 1){
        n++
    }else {
        n = 0
    }

    changeSliders()
})


