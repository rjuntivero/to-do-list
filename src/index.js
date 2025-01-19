import "./styles.css";
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

export const content = document.getElementById("content")

const tabs = {
    homeButton: homePage,
    menuButton: menuPage,
    aboutButton: aboutPage
};

function setActiveButton(activeButton) {
    Object.keys(tabs).forEach((id) => {
        const button = document.getElementById(id);
        button === activeButton ? button.classList.add("active") : button.classList.remove("active");
    });
}

Object.keys(tabs).forEach((id) => {
    const button = document.getElementById(id);
    button.addEventListener("click", () => {
        setActiveButton(button);
        tabs[id]();
    });
});

homePage()