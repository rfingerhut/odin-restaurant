import "./styles.css";
import renderHome from "./components/home";
import renderAbout from "./components/about";
import renderProducts from "./components/products";

renderHome();

const content = document.getElementById('content');

const navButtons = document.querySelector(".navButtons");

navButtons.addEventListener('click', (e) => handleNavButtonClick(e));

function handleNavButtonClick(e){
    const id = e.target.id;
    content.textContent = '';

    switch (id) {
        case 'home':
            renderHome();
            break;

        case 'about':
            renderAbout();
            break;

        case 'products':
            renderProducts();
            break;
    
        default:
            break;
    }
}