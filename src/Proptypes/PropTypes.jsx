import PropTypes from "prop-types"

export const ProductCardProp = {
    imageUrl: PropTypes.string,
    productName : PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.number,
    onAddToCart: PropTypes.func
}

export const NavBarProp = {
    isOpen: PropTypes.bool,
    isMobile : PropTypes.bool,
    toggleMenu: PropTypes.func,
    cartLength : PropTypes.number
}

export const MenuItemProp = {
    isMobile: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
  };

export const MenuItemLinkProp = {
    item : PropTypes.object,
    onClick: PropTypes.func,
}

export const CartProp = {
    cartItems: PropTypes.array,
    handleAddToCart: PropTypes.func,
    handleRemoveItemFromCart: PropTypes.func,
    handleIncreaseItemAmount: PropTypes.func,
    handleDecreaseItemAmount: PropTypes.func
}

export const CartItemProp = {
    item : PropTypes.object
}