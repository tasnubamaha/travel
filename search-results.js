const packages = [
    { id: 1, image: 'Images/Rectangle 5.png', title: 'Maldives', price: 50000000 },
    { id: 2, image: 'Images/Rectangle 6.png', title: 'Indonesia', price: 30000000 },
    { id: 3, image: 'Images/Rectangle 7.png', title: 'SriLanka', price: 20000000 },
    { id: 4, image: 'Images/Rectangle 8.png', title: 'NorthAmerica', price: 70000000 },
    { id: 5, image: 'Images/Rectangle 9.png', title: 'Kashmir', price: 90000000 },
    { id: 6, image: 'Images/Rectangle 10.png', title: 'Bangladesh', price: 50000 },
    { id: 7, image: 'Images/Rectangle 11.png', title: 'Bandarban', price: 5000 }
];

const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

const searchQuery = getQueryParam('query');

const filterData = packages.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

const displayItem = (items) => {
    const resultsContainer = document.querySelector('.search-results-container');
    if (resultsContainer) {
        resultsContainer.innerHTML = items.map((item) => {
            const { image, title, price } = item;
            return `
                <div class='card'>
                    <div class='card-image'>
                        <img src='${image}' alt='${title}'>
                    </div>
                    <div class='card-content'>
                        <h2>${title}</h2>
                        <p>Price: $${price.toLocaleString()}</p>
                        <button class='btn'>Add to cart</button>
                    </div>
                </div>`;
        }).join('');
    }
};

// Display results
displayItem(filterData);
