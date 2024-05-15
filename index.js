const slider = document.querySelector(".slider");
const thumb = document.querySelector(".slider-thumb");
const tooltip = document.querySelector(".tooltip");
const progress = document.querySelector(".progress");


function customSlider() {
const maxVal = slider.getAttribute("max");
const val = (slider.value / maxVal) * 100 + "%";

tooltip.innerHTML = slider.value;

progress.style.width = val;
thumb.style.left = val;
}

customSlider();

slider.addEventListener("input",() => {
customSlider();
});