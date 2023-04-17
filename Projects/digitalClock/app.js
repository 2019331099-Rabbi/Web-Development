function displayTime () {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let timeFormat = document.getElementById('session');

    if (hrs > 12) {
        hrs -= 12;
        timeFormat.innerText = 'PM';
    }
    else if (hrs == 0) {
        timeFormat.innerText = 'AM';
        hrs = 12;
    }
    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    document.getElementById('hours').innerText = hrs;
    document.getElementById('minutes').innerText = mins;
    document.getElementById('seconds').innerText = secs;
    setInterval(displayTime, 1000);
}
displayTime();