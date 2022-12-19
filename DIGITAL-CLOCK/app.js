let timeIn= ()=>{
    let option= {timeZone:'Asia/Kolkata'};
    let currentDate= new Date().toLocaleDateString("en-US",option);
    let currentTime= new Date().toLocaleTimeString("en-US",option);
    document.querySelector('#timeIN').innerText=currentTime;
    document.querySelector('#dateIN').innerText=currentDate;
}
setInterval(timeIn, 1000);

let timeUS= ()=>{
    let option= {timeZone:'America/New_York'};
    let currentDate= new Date().toLocaleDateString("en-US",option);
    let currentTime= new Date().toLocaleTimeString("en-US",option);
    document.querySelector('#timeUS').innerText=currentTime;
    document.querySelector('#dateUS').innerText=currentDate;
}
setInterval(timeUS, 1000);

let timeCH= ()=>{
    let option= {timeZone:'Asia/Shanghai'};
    let currentDate= new Date().toLocaleDateString("en-US",option);
    let currentTime= new Date().toLocaleTimeString("en-US",option);
    document.querySelector('#timeCH').innerText=currentTime;
    document.querySelector('#dateCH').innerText=currentDate;
}
setInterval(timeCH, 1000);

