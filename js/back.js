let urlA = 'https://api.agify.io/?name='
let urlB = 'https://api.genderize.io?name='
let urlC = 'https://api.nationalize.io?name='
let name = new Array()
let spNe = document.createElement('span')
let iie = document.getElementById('iie')
let fragment = document.createDocumentFragment()
let dNam = document.querySelectorAll('[index="0"]')
let dAge = document.querySelectorAll('[index="1"]')
let dGen = document.querySelectorAll('[index="2"]')
let dNat = document.querySelectorAll('[index="3"]')
let dOcu = document.querySelectorAll('[index="4"]')

function capit(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let x = 0
function addName() {
    name[x] = document.getElementById('text1').value
    x++
    document.getElementById('text1').value = ""
    toBottom()
    nameReq()
    gendrReq()
    nationReq()

    let titls = ['Name: ', 'Average Age: ', 'Sex: ', 
    'Top Country for Name: ', 'Occurance of Name: ']
    titls.forEach(function(titl) {
        let dv = document.createElement('div')
        dv.textContent = titl
        fragment.appendChild(dv)
    })
    iie.appendChild(fragment)

    let childDivs = document.getElementById('iie').getElementsByTagName('div')
    for(i = 0; i < childDivs.length; i++ )
    {
        let childDiv = childDivs[i].setAttribute('index', [i])
    }
}

function nameReq() {
    let full = urlA.concat(name)
    let request = new XMLHttpRequest()
    request.open('GET', full, true)
    request.onload = function () {
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        console.log(data)
        let nName = capit(data.name)
        let spn1 = document.createElement("span")
        var textnode = document.createTextNode(nName)
        dNam.appendChild(spn1)
        // let dName = document.querySelectorAll('[index="0"]')
        // let createS = document.createElement('span')
        // dName.appendChild(createS)
        // console.log("name", dName)

        

    } else {
        console.log('error')
    }
    }

    request.send()
}

function gendrReq() {
    let full = urlB.concat(name)
    let request = new XMLHttpRequest()
    request.open('GET', full, true)
    request.onload = function () {
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        console.log(data)

    } else {
        console.log('error')
    }
    }

    request.send()
}

function nationReq() {
    let full = urlC.concat(name)
    let request = new XMLHttpRequest()
    request.open('GET', full, true)
    request.onload = function () {
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        console.log(data)
        
    } else {
        console.log('error')
    }
    }

    request.send()
}


//sffuts.js
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


// function typeWriter() {
//     const i = 0;
//     const txt = document.querySelector('#iie > div')
//     const speed = 50;
//     if (i < txt.length) {
//         document.getElementById("iie").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }

//html
// <!-- <div id="loading">
//     <div class="loader"><img src="req/strawberry.svg" alt="Strawberry" width="160px" height="160px"></div>
// </div> -->

// <!-- <nav class="navbar fixed-top none"> -->