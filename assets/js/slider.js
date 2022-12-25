// Elementos
const nextButton = document.querySelector(".next-button")
const previousButton = document.querySelector(".previous-button")
const sliderImage = document.querySelectorAll(".slide-image")
const randomButton = document.querySelector(".random-button")

// Slide atual
let currentSlide = 0

// Próximo slide
function nextSlide() {
    sliderImage[currentSlide].classList.remove("active")
    currentSlide = (currentSlide + 1) % sliderImage.length
    sliderImage[currentSlide].classList.add("active")
}

// Slide anterior
function previousSlide() {
    sliderImage[currentSlide].classList.remove("active")
    currentSlide = (currentSlide - 1 + sliderImage.length) % sliderImage.length
    sliderImage[currentSlide].classList.add("active")
}

// Remover slide ativo
function hideSlide() {
    sliderImage.forEach(image => image.classList.remove("active"))
}

// Adicionar slide ativo
function showSlide() {
    sliderImage[currentSlide].classList.add("active")
}

// Slide aleatório
function randomSlide() {
    currentSlide = Math.floor(Math.random() * sliderImage.length)
    hideSlide()
    showSlide()
}

// Slide automático
setInterval(nextSlide, 5000)

// Adicionar evento aos elementos
nextButton.addEventListener("click", nextSlide)
previousButton.addEventListener("click", previousSlide)
randomButton.addEventListener("click", randomSlide)