
const ITEMS_PER_PAGE = 20;
let currentPage = 1;

const cardList = document.getElementById('card-list');
const showMoreButton = document.getElementById('show-more');
const pagination = document.getElementById('pagination');

const renderCards = (page = 1) => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const items = products.slice(start, end);

    cardList.innerHTML = '';
    items.forEach(product => {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'cardProduct';
        cardProduct.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
        `;
        cardProduct.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
        cardList.appendChild(cardProduct);
    });
};

const renderPagination = () => {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);


    if (totalPages > 3) {
        const leftArrow = document.createElement('button');
        leftArrow.innerHTML = '&laquo;';
        leftArrow.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderCards(currentPage);
                renderPagination();
            }
        });
        pagination.appendChild(leftArrow);
    }

    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 1, totalPages);

    if (currentPage === 1) {
        endPage = Math.min(3, totalPages);
    }
    if (currentPage === totalPages) {
        startPage = Math.max(totalPages - 2, 1);
    }


    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-button ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderCards(currentPage);
            renderPagination();
        });
        pagination.appendChild(pageButton);
    }

     if (totalPages > 3) {
        const rightArrow = document.createElement('button');
        rightArrow.innerHTML = '&raquo;';
        rightArrow.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderCards(currentPage);
                renderPagination();
            }
        });
        pagination.appendChild(rightArrow);
    }

};


// showMoreButton.addEventListener('click', () => {
//     currentPage++;
//     renderCards(currentPage);

   

//     renderPagination();
// });

// Initial render
renderCards(currentPage);
renderPagination();



// Ensure this line is added after including the products.js script in the HTML file
// <script src="products.js"></script>

// const productDetails = document.getElementById('product-details');

// const getProductDetails = (id) => {
//     return products.find(product => product.id === parseInt(id, 10));
// };
  
// const renderProductDetails = () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('id');
//     if (productId) {
//         const product = getProductDetails(productId);
//         if (product) {
//             productDetails.innerHTML = `
//                 <img src="${product.image}" alt="${product.title}">
//                 <h2>${product.title}</h2>
//                 <p>${product.description}</p>
//             `;
//         } else {
//             productDetails.innerHTML = '<p>Product not found.</p>';
//         }
//     } else {
//         productDetails.innerHTML = '<p>No product specified.</p>';
//     }
// };

// // Initial render
// renderProductDetails();
