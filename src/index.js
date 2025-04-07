function displayDate() {
    let day = moment().format("dddd");
    let month = moment().format("MMMM");
    let date = moment().format("D");
    let year = moment().format("YYYY");

    let currentDate = document.querySelector("#current-date");
    currentDate.innerHTML = `Today is ${day}, ${month} ${date}, ${year}`;
}

displayDate();