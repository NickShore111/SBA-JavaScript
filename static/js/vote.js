"use strict";

window.onload = document.myForm.name.focus();

const form = document.getElementById("myForm");
const submit = document.getElementById("submit-btn");

form.addEventListener("submit", (event) => {
  console.log("submitting form");
  event.preventDefault();
  var deppVerdictMsg =
    form.deppVerdict.value == "depp-guilty" ? "Guilty" : "Innocent";
  var heardVerdictMsg =
    form.heardVerdict.value == "heard-guilty" ? "Guilty" : "Innocent";
  if (
    form.name.validity.valid &&
    form.email.validity.valid &&
    form.deppVerdict.validity.valid &&
    form.heardVerdict.validity.valid
  ) {
    let alert = document.getElementById("custom_alert");

    alert.innerHTML = `
    <h4>${form.name.value}</h4>
    <h5>Your verdict has been cast!</h5>
    <h6>Johnny Deep: ${deppVerdictMsg}<br>${
      form.deppLiable.checked ? "Liable for damages" : "Not liable for damages"
    }</h6>
    <h6>Amber Heard: ${heardVerdictMsg}<br>${
      form.heardLiable.checked ? "Liable for damages" : "Not liable for damages"
    }</h6>`;

    var newBtn = document.createElement("button");
    newBtn.className = "btn btn-warning fw-bold my-2";
    newBtn.id = "close_btn";
    newBtn.innerHTML = "Close";

    alert.appendChild(newBtn);
    alert.style.display = "block";

    newBtn.addEventListener("click", () => {
      alert.style.display = "none";
    });
  }
});
