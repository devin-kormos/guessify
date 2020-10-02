let urlA = 'https://api.agify.io/?name='
let urlB = 'https://api.genderize.io?name='
let urlC = 'https://api.nationalize.io?name='
let name = new Array()

function capit(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateForm() {
    var y = 0;
    var x = document.forms["nameForm"]["fname"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    } else {
        name.push(x);
        toBottom();
        nameReq();
        gendrReq();
        nationReq();
    }
}

function addName() {
    name[x] = document.getElementById("text1").value
    x++
    document.getElementById("text1").value = ""
    toBottom()
    nameReq()
    gendrReq()
    nationReq()
}

function nameReq() {
    let full = urlA.concat(name)
    var request = new XMLHttpRequest()

    request.open('GET', full, true)
    request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        console.log(data)
        let nameSpan = document.querySelector(".name")
        let ageSpan = document.querySelector(".age")
        let countSpan = document.querySelector(".count")
        let theName = capit(data.name)
        nameSpan.textContent = theName
        ageSpan.textContent = data.age
        countSpan.textContent = data.count

    } else {
        console.log('error')
    }
    }

    request.send()
}

function gendrReq() {
    let full = urlB.concat(name)
    var request = new XMLHttpRequest()

    request.open('GET', full, true)
    request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        console.log(data)
        let genderSpan = document.querySelector(".gender")
        let theGender = capit(data.gender)
        genderSpan.textContent = theGender
    } else {
        console.log('error')
    }
    }

    request.send()
}

function nationReq() {
    let full = urlC.concat(name)
    var request = new XMLHttpRequest()

    request.open('GET', full, true)
    request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        console.log(data)
        const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
        const nameOfNation = regionNamesInEnglish.of(`${data.country[0].country_id}`)
        let nationSpan = document.querySelector(".nationality-1")
        nationSpan.textContent = nameOfNation
    } else {
        console.log('error')
    }
    }

    request.send()
}
