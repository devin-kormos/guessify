// window.addEventListener('load', (event) => {
//     setTimeout(function(){
//         let budy = document.querySelector("body")
//         budy.classList.add("loaded")
//     }, 200)
//     setTimeout(function(){
//         let loadin = document.getElementById("loading")
//         let navBur = document.querySelector(".navbar")
//         navBur.classList.add("block")
//         loadin.classList.add("none")
//     }, 400)
// })

function toTop() {
    document.getElementById('top').scrollIntoView({
    behavior: 'smooth'
    })
}

function toBottom() {
    document.getElementById('bottom').scrollIntoView({
    behavior: 'smooth'
    })
}

function delayReload() {
    setTimeout(function(){
        window.location.reload()
    }, 700)
}