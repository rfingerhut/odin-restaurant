import "./styles.css";
import renderHome from "./components/home";
import renderAbout from "./components/about";
import renderProducts from "./components/products";

renderHome();

const content = document.getElementById('content');
const shopButton = document.getElementById('shop-now-button');
const navButtons = document.querySelector(".navButtons");
const logoButton = document.getElementById('logo');

content.addEventListener('click', (e) => handleShopButtonClick(e));
navButtons.addEventListener('click', (e) => handleNavButtonClick(e));
logoButton.addEventListener('click', handleLogoButtonClick);

function handleShopButtonClick(e){
    const id = e.target.id;
    if (id === 'shop-now-button'){
        content.textContent = '';
        renderProducts();
    }
}

function handleNavButtonClick(e){
    const id = e.target.id;

    if(!id) {return;}

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

function handleLogoButtonClick(){
    content.textContent = '';
    renderHome();
}