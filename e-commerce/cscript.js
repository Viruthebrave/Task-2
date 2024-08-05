document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 20.00 },
        { id: 3, name: 'Product 3', price: 30.00 },
        // Add more products as needed
    ];

    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.parentElement.dataset.id);
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
            totalPrice += item.price;
        });

        document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Proceeding to checkout');
    });
});
