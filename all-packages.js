// Array of package data
const packages = [
    { id: 1, image: 'Images/Rectangle 5.png', title: 'Maldives', price: 50000000 },
    { id: 2, image: 'Images/Rectangle 6.png', title: 'Indonesia', price: 30000000 },
    { id: 3, image: 'Images/Rectangle 7.png', title: 'SriLanka', price: 20000000 },
    { id: 4, image: 'Images/Rectangle 8.png', title: 'NorthAmerica', price: 70000000 },
    { id: 5, image: 'Images/Rectangle 9.png', title: 'Kashmir', price: 90000000 },
    { id: 6, image: 'Images/Rectangle 10.png', title: 'Bangladesh', price: 50000 },
    { id: 7, image: 'Images/Rectangle 11.png', title: 'Bandarban', price: 5000 }
];

// Function to display all packages
const displayAllPackages = (packages) => {
    const container = document.querySelector('.all-packages-container');
    if (container) {
        container.innerHTML = packages.map((package) => {
            return `
                <div class='card'>
                    <div class='card-image'>
                        <img src='${package.image}' alt='${package.title}'>
                    </div>
                    <div class='card-content'>
                        <h2>${package.title}</h2>
                        <p>Price: $${package.price.toLocaleString()}</p>
                        <button class='btn'>Add to cart</button>
                    </div>
                </div>`;
        }).join('');
    }
};

// Call the function to display all packages
displayAllPackages(packages);
