// # Array Carousel
// - Dichiarazione
// - dichiaro le variabili
// - creo un array contente le immagini
// - recupero il Dom element tramite la classe

const carouselImages = [
  "./img/01.webp",
  "./img/02.webp",
  "./img/03.webp",
  "./img/04.webp",
  "./img/05.webp",
];
console.log(carouselImages);

const carouselDOMElement = document.querySelector(".carousel");
console.log(carouselDOMElement);

// - Creo un ciclo for con il quale vado ad inserire le immagini nel Dom
for (let i = 0; i < carouselImages.length; i++) {
  const currentImage = carouselImages[i];
  console.log(currentImage);

  const imgString = `
    <div class="carousel__img">
        <img class="img" src="${currentImage}"
    </div>
    `;
  console.log(imgString);

  carouselDOMElement.innerHTML += imgString;
}

let actualImgIdx = 0;

// Mostrare un'immagine alla volta
const carouselImgDOMElements = document.getElementsByClassName("carousel__img");
const firstImageDOMElement = carouselImgDOMElements[actualImgIdx];
firstImageDOMElement.classList.add("active");
console.log(firstImageDOMElement);

// Thumbnail
const thumbnailImgDomElements = document.getElementsByClassName('col')
const firstThumbnailOpacityDomElement = thumbnailImgDomElements[actualImgIdx]
firstThumbnailOpacityDomElement.classList.add('brightness-1')

// Ciclo per spostare la classe active con il right slider
const rightArrowDOMElement = document.querySelector(".right-arrow");

rightArrowDOMElement.addEventListener("click", function () {
  const actualImageDOMElement = carouselImgDOMElements[actualImgIdx];
  actualImageDOMElement.classList.remove("active");

//   thumbnail
const actualThumbnailOpacityDomElement = thumbnailImgDomElements[actualImgIdx]
actualThumbnailOpacityDomElement.classList.remove('brightness-1')
 
  // Se sono all'ultimo elemento
  if (actualImgIdx === (carouselImgDOMElements.length - 1)) {
    actualImgIdx = 0;
  } else {
    actualImgIdx++;
  }
  const nextImageDOMElement = carouselImgDOMElements[actualImgIdx];
  nextImageDOMElement.classList.add("active");
  
//   thumbnail
  const nextThumbnailDomElement = thumbnailImgDomElements[actualImgIdx]
  nextThumbnailDomElement.classList.add('brightness-1')
});

// Ciclo per spostare la classe active con il left slider
const leftArrowDOMElement = document.querySelector(".left-arrow");

leftArrowDOMElement.addEventListener('click', function (){
    const actualImageDOMElement = carouselImgDOMElements[actualImgIdx];
    actualImageDOMElement.classList.remove('active');

    // thumbnail
    const actualThumbnailOpacityDomElement = thumbnailImgDomElements[actualImgIdx]
    actualThumbnailOpacityDomElement.classList.remove('brightness-1')

    // Se sono al primo elemento
    if(actualImgIdx === 0){
        actualImgIdx = (carouselImgDOMElements.length - 1);
    } else {
        actualImgIdx--;
    }
    const prevImageDOMElement = carouselImgDOMElements[actualImgIdx];
    prevImageDOMElement.classList.add("active");

    // thumbnail
    const prevThumbnailDomElement = thumbnailImgDomElements[actualImgIdx]
    prevThumbnailDomElement.classList.add('brightness-1')
})