const ITEMS_PER_PAGE = 20;
let currentPage = 1;

const cardList = document.getElementById('card-list');
const pagination = document.getElementById('pagination');

// Function to get products by type
const getProductsByType = (type) => {
    return products.filter(product => product.type.toLowerCase() === type.toLowerCase());
};

// Function to render cards based on filtered products
const renderCards = (page = 1, filteredProducts) => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const items = filteredProducts.slice(start, end);

    cardList.innerHTML = '';
    items.forEach(product => {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'cardProduct';
        cardProduct.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            
             <button> Discover</button>
        `;
        cardProduct.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
        cardList.appendChild(cardProduct);
    });
};

// Function to render pagination
const renderPagination = (filteredProducts) => {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    if (totalPages > 3) {
        const leftArrow = document.createElement('button');
        leftArrow.innerHTML = '&laquo;';
        leftArrow.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderCards(currentPage, filteredProducts);
                renderPagination(filteredProducts);
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

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-button ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderCards(currentPage, filteredProducts);
            renderPagination(filteredProducts);
        });
        pagination.appendChild(pageButton);
    }

    if (totalPages > 3) {
        const rightArrow = document.createElement('button');
        rightArrow.innerHTML = '&raquo;';
        rightArrow.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderCards(currentPage, filteredProducts);
                renderPagination(filteredProducts);
            }
        });
        pagination.appendChild(rightArrow);
    }
};

// Get the category from the section title
const sectionTitle = document.querySelector('.section-title').innerText.trim().toLowerCase();
const filteredProducts = getProductsByType(sectionTitle.toLowerCase());

// Initial render
renderCards(currentPage, filteredProducts);
renderPagination(filteredProducts);
