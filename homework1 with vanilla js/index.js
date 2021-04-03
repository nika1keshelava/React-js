const incrementBtn1 = document.getElementById('increment-button1')
const incrementBtn5 = document.getElementById('increment-button5')
const incrementBtn100 = document.getElementById('increment-button100')

const decrementBtn1 = document.getElementById('decrement-button1')
const decrementBtn5 = document.getElementById('decrement-button5')
const decrementBtn100 = document.getElementById('decrement-button100')

const countDisplay = document.getElementById('count-display')

let currentCount = 0


incrementBtn1.addEventListener("click", ()=>{
    currentCount += 1
    countDisplay.innerText = currentCount

    
})

incrementBtn5.addEventListener("click", ()=>{
    currentCount += 5
    countDisplay.innerText = currentCount

    
})


incrementBtn100.addEventListener("click", ()=>{
    currentCount += 100
    countDisplay.innerText = currentCount

    
})


decrementBtn1.addEventListener("click", ()=>{
    currentCount -= 1
    countDisplay.innerText = currentCount

    
})

decrementBtn5.addEventListener("click", ()=>{
    currentCount -= 5
    countDisplay.innerText = currentCount

    
})


decrementBtn100.addEventListener("click", ()=>{
    currentCount -= 100
    countDisplay.innerText = currentCount

    
})