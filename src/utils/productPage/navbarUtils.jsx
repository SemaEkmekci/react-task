export const updateCartItemCount = (setCartItemCount) => {
    const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
    const itemCount = itemsInCart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  };