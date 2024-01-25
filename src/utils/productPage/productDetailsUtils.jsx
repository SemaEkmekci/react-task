export const addToCart = (selectedProduct, updateCartItemCount) => {
    if (selectedProduct) {
        const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
        const existingCartItem = itemsInCart.find(item => item.id === selectedProduct.id);

        if (!existingCartItem) {
            itemsInCart.push({ ...selectedProduct, quantity: 1 });
        } else {
           
            existingCartItem.quantity += 1;
        }

        localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
        updateCartItemCount();
        alert('Ürün sepete eklendi!');
    } else {
        console.error('Ürün bulunamadı!');
    }
};


export const buyItNow = (selectedProduct, updateCartItemCount)  => {
    if (selectedProduct) {
        const buyNow = [{ ...selectedProduct, quantity: 1 }];
        localStorage.setItem('itemsInCart', JSON.stringify(buyNow));
        updateCartItemCount();
        alert('Ürün sepete eklendi!');
    } else {
        console.error('Ürün bulunamadı!');
    }
};

export const decreaseCartItem = (selectedProduct, cartItemCount, setCartItemCount, updateCartItemCount)  => {
    const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
    const existingCartItem = itemsInCart.find(item => item.id === selectedProduct.id);

    if (existingCartItem) {
        existingCartItem.quantity -= 1;

        if (existingCartItem.quantity === 0) {
            const updatedCart = itemsInCart.filter(item => item.id !== existingCartItem.id);
            localStorage.setItem('itemsInCart', JSON.stringify(updatedCart));
            setCartItemCount(cartItemCount - 1);
        } else {
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
            setCartItemCount(cartItemCount - 1);
        }
        updateCartItemCount();
    }
};

export const downloadCartData = () => {
    const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
    const jsonData = JSON.stringify(itemsInCart, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'itemsInCart.json';
    a.click();
};