function barFn() {
  const inputRef = document.getElementById("myProgress");
  inputRef.value = document.getElementById("value").value;

  if (inputRef.value < 20) {
    inputRef.classList.add("progress-red");
  } else if (inputRef.value >= 20 && inputRef.value <= 65) {
    inputRef.classList.remove("progress-red");
    inputRef.classList.add("progress-yellow");
  } else if (inputRef.value > 65 && inputRef.value <= 100) {
    inputRef.classList.add("progress-green");
  } else {
    alert("number is greater than 100");
    inputRef.classList.add("progress-mix");
  }
}

/*
const submitBtn = () => {
  barFn();
  return barFn();
  return {
    ...barFn(),
    hay: "success",
  };
};
*/
