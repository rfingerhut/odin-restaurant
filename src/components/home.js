function renderHome() {
    const content = document.getElementById('content');

    const heroSection = document.createElement('section');
    heroSection.id = 'hero';

    const title = document.createElement('h1');
    title.textContent = "Your Local Neighborhood Bakery";

    const p = document.createElement('p');
    p.textContent = 'Home of the Famous Butter Creme Cofee Cake';

    heroSection.append(title, p);
    content.append(heroSection);
}

export default renderHome;