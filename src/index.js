import "./styles.css";

export const content = document.getElementById("content")

const tabs = {
    homeTab,
    todayTab,
    upcomingTab
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
        tabs[id];
    });
});