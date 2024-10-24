let carouselInner = document.querySelector(".carousel-inner");
let carouselItem = document.querySelectorAll(".carousel-item");
let count = 0;

function showSlide(){
    let slidArr = carouselItem;

    let totalsid = slidArr.length-1;
    let indexAnterior = count-1;

    if(count > totalsid){
        count = 0;
        indexAnterior = totalsid;
        slidArr[indexAnterior].style.display = "none";
        slidArr[count].style.display = "flex";

    } else {
        if(count == 0){
            indexAnterior = totalsid;
        }
        slidArr[indexAnterior].style.display = "none";
        slidArr[count].style.display = "block";
    }
    count++;

    let carouselInnerT = carouselInner;
    carouselInnerT.style.transform = `translateX(-${offset * 100}%)`;
}

function nextSlide(){
    showSlide(carouselInner -1)
}

function prevSlide(){
    showSlide(carouselInner +1)
}

setInterval(showSlide, 5000)