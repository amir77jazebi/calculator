const keys = document.querySelectorAll(".key")
const input = document.querySelector('.text')
const btn = document.querySelector('.btnkey')
const btnAC = document.querySelector('.AC')
const btnDEL = document.querySelector('.DEL')
keys.forEach((key) => {
    key.addEventListener('click', () => {
        input.value += key.value
    })
})

btn.addEventListener('click', () => {
    input.value = eval(input.value)
})

btnAC.addEventListener('click', () => {
    input.value = ""
})

btnDEL.addEventListener('click', () => {
    input.value = input.value.slice(0,-1)
})


