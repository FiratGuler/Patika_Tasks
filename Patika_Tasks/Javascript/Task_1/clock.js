function showTime() {
    const today = new Date();
    let Day = today.getDate();
    let Hours = today.getHours();
    let Minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let DaysNames = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];

    document.querySelector("#myClock").innerHTML = Hours + ":" + Minutes + ":" + seconds + " " + DaysNames[Day];

}
setInterval(showTime, 1000)