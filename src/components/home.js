function renderHome() {
    const content = document.getElementById('content');

    const heroSection = document.createElement('section');
    heroSection.id = 'hero';

    const title = document.createElement('h1');
    title.textContent = "Your Local Neighborhood Bakery";

    const p = document.createElement('p');
    p.textContent = 'Home of the Famous Butter Creme Coffee Cake';

    const container = document.createElement('div');

    const button = document.createElement('button');
    button.textContent = 'Shop Now';
    button.id = 'shop-now-button';

    container.append(button);
    heroSection.append(title, p, container);
    content.append(heroSection);
}

export default renderHome;