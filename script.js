const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digit = document.getElementById('digit')

function setClocks(){
    
    const now = new Date();
    setClock(now)
    setDigit(now)
}

function setClock(now) {
    // Rafraîchissement de l'heure toutes les secondes
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    console.log(hour+':'+mins+':'+seconds)
}

function setDigit(now){
    var timeToDisplay = formattedDate(now)
    digit.textContent = timeToDisplay
}

function formattedDate(date) {
    var d = new Date(date || Date.now()),
        hour = '' + (d.getHours()),
        minutes = '' + d.getMinutes(),
        seconds = d.getSeconds();
        
        if(seconds < 10)
            seconds = '0'+seconds
        if(minutes < 10)
            minutes = '0'+minutes
        if(hour < 10)
            hour = '0'+hour
            
    return [hour, minutes, seconds].join(':');
}

setInterval(setClocks, 1000);
