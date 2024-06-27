const productDetails = document.getElementById('product-details');
const productName = document.getElementById('productName');
const getProductDetails = (id) => {
    return products.find(product => product.id === parseInt(id, 10));
};
  
const renderProductDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        const product = getProductDetails(productId);
        if (product) {
            productName.innerHTML=`${product.title}`
            productDetails.innerHTML = `
              <div class="productDetails">
                    <div class="productDetailsImg">
                          <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="productDetailsInfo">
                            <h2>${product.title}</h2>
                            <p><b>Producer</b> : <span>Aroma Egy Spices</span></p>
                            <p><b>Origin</b> : <span>Egypt</span> </p>
                            <p><b>Packing</b> : <span>${product.packing}</span> </p>
                            <p><b>Net weight</b>  : <span>${product.netWeight}</span> </p>
                            <p><b>Available forms</b> : <span>${product.availableForms}</span> </p>
                            <p><b>20FT FCL</b> : <span>${product.FTFCL20}</span> </p>
                            <p><b>40FT FCL</b> : <span>${product.FTFCL40}</span> </p>
                    </div>
              </div>
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
