import butterCookie from '../images/butter-cookies.jpg';
import cinnamonBread from '../images/cinnamon-raisin-bagel-bread.jpg';
import glazedDonuts from '../images/glazed-donuts.jpg';

function renderProducts() {
    const content = document.getElementById('content');

    const productsSection = document.createElement('section');
    productsSection.id = "productsSection";

    const grid = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = "Products";

    //BUTTER COOKIES
    const butterCookieContainer = document.createElement('div');
    butterCookieContainer.id = 'butter';
    const butterCookieImage = document.createElement('img');
    butterCookieImage.src = butterCookie;
    butterCookieImage.alt = 'Image of Fingerhut Bakery Butter Cookies.';
    const butterCookieTitle = document.createElement('h3');
    butterCookieTitle.textContent = 'Butter Cookies';
    const butterCookieInfo = document.createElement('div');
    butterCookieInfo.textContent = 'Your traditions of getting a Fingerhut Bakery treat for a party, a cake for your celebration, donuts for your coworkers, or simply stopping in when passing through.';

    butterCookieContainer.append(butterCookieImage, butterCookieTitle, butterCookieInfo);

    //CINNAMON RAISIN BAGEL BREAD
    const cinnamonBreadContainer = document.createElement('div');
    cinnamonBreadContainer.id = 'cinnamon';
    const cinnamonBreadImage = document.createElement('img');
    cinnamonBreadImage.src = cinnamonBread;
    cinnamonBreadImage.alt = 'Image of Fingerhut Bakery Cinnamon Raisin Bagel Bread.';
    const cinnamonBreadTitle = document.createElement('h3');
    cinnamonBreadTitle.textContent = 'Cinnamon Raisin Bagel Bread';
    const cinnamonBreadInfo = document.createElement('div');
    cinnamonBreadInfo.textContent = 'Experience the comforting flavors of cinnamon and raisin in a freshly baked bread, expertly paired with a warm cup of coffee.';

    cinnamonBreadContainer.append(cinnamonBreadImage, cinnamonBreadTitle, cinnamonBreadInfo);

    //GLAZED DONUTS
    const glazedDonutsContainer = document.createElement('div');
    glazedDonutsContainer.id = 'glazed';
    const glazedDonutsImage = document.createElement('img');
    glazedDonutsImage.src = glazedDonuts;
    glazedDonutsImage.alt = 'Image of Fingerhut Bakery glazed donuts.'
    const glazedDonutsTitle = document.createElement('h3');
    glazedDonutsTitle.textContent = 'Glazed Donuts';
    const glazedDonutsInfo = document.createElement('div');
    glazedDonutsInfo.textContent = 'Raised yeast donuts with classic glaze.'

    glazedDonutsContainer.append(glazedDonutsImage, glazedDonutsTitle, glazedDonutsInfo);


    grid.append(butterCookieContainer,cinnamonBreadContainer, glazedDonutsContainer);

    productsSection.append(title, grid);

    content.append(productsSection);
}

export default renderProducts;
