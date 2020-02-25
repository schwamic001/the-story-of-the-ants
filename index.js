window.onload = function () {
    var todayDate = new Date();
    todayDate.setMinutes(todayDate.getMinutes() - todayDate.getTimezoneOffset());
    document.getElementById("date").innerHTML = todayDate.toISOString().slice(0, 10);
}
