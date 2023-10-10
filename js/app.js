// # Array Carousel
// - Dichiarazione
// - dichiaro le variabili
// - creo un array contente le immagini
// - recupero il Dom element tramite la classe

const carouselImages = ['./img/01.webp', './img/02.webp','./img/03.webp','./img/04.webp','./img/05.webp'];
console.log(carouselImages);

const carouselDOMElement = document.querySelector('.carousel');
console.log(carouselDOMElement);

// - Creo un ciclo for con il quale vado ad inserire le immagini nel Dom
for(let i = 0; i < carouselImages.length; i++){
    const currentImage = carouselImages[i];
    console.log(currentImage);

    const imgString = `
    <div class="carousel__img">
        <img class="img" src="${currentImage}"
    </div>
    `
    console.log(imgString)

    carouselDOMElement.innerHTML += imgString
}



