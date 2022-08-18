function func() {
    const x = document.getElementById("myProgress");
    x.value = document.getElementById("value").value;

    if (x.value < 20) {
        x.classList.remove("progress-green");
        x.classList.add("progress-red");
    } else if (x.value >= 20 && x.value <= 65) {
        x.classList.remove("progress-green", "progress-red");
        x.classList.add("progress-yellow");
    } else {
        x.classList.remove("progress-yellow", "progress-red");
        x.classList.add("progress-green");
    }
}
