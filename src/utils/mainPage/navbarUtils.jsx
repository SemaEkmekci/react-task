

export const handleHamburgerMenuClick = (isHamburgerMenuOpen, setHamburgerMenuOpen) => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

export  const handleProductsMouseEnter = (setProductsOpen) => {
    setProductsOpen(true);
  };

export const handleProductsMouseLeave = (setProductsOpen) => {
    setProductsOpen(false);
  };
