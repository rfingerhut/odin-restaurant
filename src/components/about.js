function renderAbout () {
    const content = document.getElementById('content');

    const aboutDiv = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'Our Story';

    const p = document.createElement('p');
    p.textContent = 'A trip to the Fingerhut Bakery of North Judson, Indiana is like taking a trip back in time. A time when your local neighborhood bakery produced some of the best smells and even better tastes than you can remember.'

    aboutDiv.append(h2, p);
    content.append(aboutDiv);
}

export default renderAbout;

