let hmScr = document.getElementById("hm-scr")
let gstScr = document.getElementById("gst-scr")
let hmScr1 = 0
let gstScr1 = 0

function home1() {
    hmScr1 += 1
    hmScr.textContent = hmScr1
}

function home2() {
    hmScr1 += 2
    hmScr.textContent = hmScr1
}

function home3() {
    hmScr1 += 3
    hmScr.textContent = hmScr1
}

function guest1() {
    gstScr1 += 1
    gstScr.textContent = gstScr1
}

function guest2() {
    gstScr1 += 2
    gstScr.textContent = gstScr1
}

function guest3() {
    gstScr1 += 3
    gstScr.textContent = gstScr1
}

function resetBtn () {
    hmScr1 *= 0
    gstScr1 *= 0
    hmScr.textContent = 0
    gstScr.textContent = 0
}