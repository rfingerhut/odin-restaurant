function renderAbout () {
    const content = document.getElementById('content');

    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';

    const h2 = document.createElement('h2');
    h2.textContent = 'Our Story';

    const p = document.createElement('p');
    p.textContent = 'A trip to the Fingerhut Bakery of North Judson, Indiana is like taking a trip back in time. A time when your local neighborhood bakery produced some of the best smells and even better tastes than you can remember.'

    aboutSection.append(h2, p);
    content.append(aboutSection);
}

export default renderAbout;

