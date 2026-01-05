function renderProducts() {
    const content = document.getElementById('content');

    const productsDiv = document.createElement('div');
    const title = document.createElement('h2');
    const container = document.createElement('div');
    const productImage = document.createElement('div');
    const productInfo = document.createElement('div');
    productInfo.textContent = 'Our famous Butter Creme Cofee Cake will melt in your mouth.';

    container.append(productImage, productInfo);
    productsDiv.append(title, container);

    content.append(productsDiv);
}

export default renderProducts;
