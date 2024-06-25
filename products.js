const products = [
    {
        id: 1,
        title: "Product 1",
        description: "This is the description for Product 1",
        image: "lookbook-bg_1440x547.jpg"
    },
    {
        id: 2,
        title: "Product 2",
        description: "This is the description for Product 2",
        image: "https://via.placeholder.com/150?text=Product+2"
    },
    {
        id: 3,
        title: "Product 3",
        description: "This is the description for Product 3",
        image: "https://via.placeholder.com/150?text=Product+3"
    }
    // Add more products as needed
];



const ITEMS_PER_PAGE = 9;
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
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
        `;
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
        cardList.appendChild(card);
    });
};

const renderPagination = () => {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

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
};

showMoreButton.addEventListener('click', () => {
    currentPage++;
    renderCards(currentPage);

    if (currentPage * ITEMS_PER_PAGE >= products.length) {
        showMoreButton.style.display = 'none';
    }

    renderPagination();
});

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
