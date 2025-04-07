function displayFutureDate() {
    let day = moment().add(10, "years").format("dddd");
    let month = moment().add(10, "years").format("MMMM");
    let date = moment().add(10, "years").format("D");
    let year = moment().add(10, "years").format("YYYY");
    let hours = moment().add(10, "years").format("HH");
    let minutes = moment().add(10, "years").format("mm");
    let seconds = moment().add(10, "years").format("ss");


    let futureDate = document.querySelector("#future-date");
    futureDate.innerHTML = `10 years from now, it will be ${day}, ${month} ${date}, ${year} - ${hours}:${minutes}:${seconds}`;
}


function displayDate() {
    let day = moment().format("dddd");
    let month = moment().format("MMMM");
    let date = moment().format("D");
    let year = moment().format("YYYY");

    let currentDate = document.querySelector("#current-date");
    currentDate.innerHTML = `Today is ${day}, ${month} ${date}, ${year}`;
}

displayDate();
displayFutureDate();