let countHome = 0
let countGuest = 0

let countHomeEl = document.getElementById("countHome")
let countGuestEl = document.getElementById("countGuest")



function increment1() {
    countHome += 1
    countHomeEl.textContent = countHome
}

function increment2() {
    countHome += 2
    countHomeEl.textContent = countHome
}

function increment3() {
    countHome += 3
    countHomeEl.textContent = countHome
}

function incrementGuest1() {
    countGuest += 1
    countGuestEl.textContent = countGuest
}

function incrementGuest2() {
    countGuest += 2
    countGuestEl.textContent = countGuest
}

function incrementGuest3() {
    countGuest += 3
    countGuestEl.textContent = countGuest
}