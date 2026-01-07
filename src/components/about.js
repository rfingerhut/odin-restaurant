import storefront from '../images/storefront.jpg';


function renderAbout () {
    const content = document.getElementById('content');

    const aboutSection = document.createElement('section');
    aboutSection.id = 'aboutSection';

    const textContainer = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Our Story';

    const p = document.createElement('p');
    p.textContent = 'A trip to the Fingerhut Bakery of North Judson, Indiana is like taking a trip back in time. A time when your local neighborhood bakery produced some of the best smells and even better tastes than you can remember.';

    textContainer.append(h2, p);

    const image = document.createElement('img');
    image.src = storefront;
    image.alt = 'Image of Fingerhut Bakery storefront.';

    aboutSection.append(textContainer, image);
    content.append(aboutSection);
}

export default renderAbout;

