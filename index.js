function barFn() {
    const inputRef = document.getElementById("myProgress");
    inputRef.value = document.getElementById("value").value;

    if (inputRef.value < 20) {
        inputRef.classList.remove("progress-green");
        inputRef.classList.add("progress-red");
    } else if (inputRef.value >= 20 && inputRef.value <= 65) {
        inputRef.classList.remove("progress-green", "progress-red");
        inputRef.classList.add("progress-yellow");
    } else {
        inputRef.classList.remove("progress-yellow", "progress-red");
        inputRef.classList.add("progress-green");
    }
}
