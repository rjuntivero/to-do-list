import { content } from ".";

export const menuPage = () => {
    content.innerHTML = ""

    content.innerHTML = `
        <ul>
            <li> Menu Item 1<li>
            <li> Menu Item 2<li>
            <li> Menu Item 3<li>
        <ul>
    `
}