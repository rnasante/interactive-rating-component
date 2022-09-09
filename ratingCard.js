const rateContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("btn")

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden")
    rateContainer.style.display = "none"
})

const rateValues = document.getElementById("rating-value")
const rateOptions = document.querySelectorAll(".dot")

rateOptions.forEach((rate) => {
    rate.addEventListener("click", () => {
        rateValues.innerHTML = rate.innerHTML
    })
})