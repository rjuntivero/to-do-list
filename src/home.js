import { content } from ".";

export const homePage = () => {
    content.innerHTML = ""

    const headlineSection = document.createElement("div")
    const restarantName = document.createElement("h1")
    const headline = document.createElement("h2")

    restarantName.textContent = "Jay's Burgers"
    headline.textContent = "Eating the Right Way"
    headlineSection.classList.add("headline")
    const heroImg = document.createElement("img")
    heroImg.src = "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
    headlineSection.append(restarantName, headline)
    content.append(headlineSection, heroImg)

};