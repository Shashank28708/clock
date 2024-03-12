 const deg = 6;
 const hr = document.querySelector('#hr');
 const min = document.querySelector('#min');
 const sec = document.querySelector('#sec');
 function renderTime() {
    const currentTime = new Date();
    const h = currentTime.getHours() * 30;
    const m = currentTime.getMinutes() * deg;
    const s = currentTime.getSeconds() * deg;

    hr.style.transform = `rotateZ(${h + m / 12}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
}

renderTime();
setInterval(renderTime,1000);