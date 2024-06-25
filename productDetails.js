const productDetails = document.getElementById('product-details');

const getProductDetails = (id) => {
    return products.find(product => product.id === parseInt(id, 10));
};
  
const renderProductDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        const product = getProductDetails(productId);
        if (product) {
            productDetails.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
            `;
        } else {
            productDetails.innerHTML = '<p>Product not found.</p>';
        }
    } else {
        productDetails.innerHTML = '<p>No product specified.</p>';
    }
};

// Initial render
renderProductDetails();
