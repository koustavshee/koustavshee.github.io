var counter = 1;
sliderPhoto();

function sliderPhoto() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}
setInterval(sliderPhoto, 5000);

