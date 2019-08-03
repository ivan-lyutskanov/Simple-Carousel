document.addEventListener("DOMContentLoaded", initializeCarousel)

function initializeCarousel() {

    const carousel = document.querySelector("[data-target='carousel']") 

    if (carousel) {

        const carouselWidth = carousel.offsetWidth,
              itemsCount = carousel.querySelectorAll("[data-target='item']").length,
              prevButton = document.querySelector("[data-action='slideLeft']"),
              nextButton = document.querySelector("[data-action='slideRight']")

        //Carousel's boundaries 
        let offset = 0
        const maxOffset = -((itemsCount - 1) * carouselWidth)

        // Add the click events
        prevButton.addEventListener("click", () => {
            // If is not the first item
            if (offset !== 0) { 
                offset += carouselWidth
                //Slide back one item
                carousel.style.transform = `translateX(${offset}px)`
            }
        })

        nextButton.addEventListener("click", () => {
            // If is not the last item
            if (offset !== maxOffset) { 
                offset -= carouselWidth
                //Slide to the next item
                carousel.style.transform = `translateX(${offset}px)`
            }
        })
    }
}
