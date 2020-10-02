const btn = document.querySelector('#button1')
const textBox = document.querySelector('#text1')

$("#nameForm").submit(function (e) {
    e.preventDefault();
});

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

function clearThis(target) {
    if (target.value.length > 1) {
        target.value = "";
    }
}
