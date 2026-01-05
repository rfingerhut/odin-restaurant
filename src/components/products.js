function renderProducts() {
    const content = document.getElementById('content');

    const productsSection = document.createElement('section');
    productsSection.id = "products";

    const title = document.createElement('h2');
    title.textContent = "Products";

    const container = document.createElement('div');
    const productImage = document.createElement('div');
    const productInfo = document.createElement('div');
    productInfo.textContent = 'Our famous Butter Creme Cofee Cake will melt in your mouth.';

    container.append(productImage, productInfo);
    productsSection.append(title, container);

    content.append(productsSection);
}

export default renderProducts;
