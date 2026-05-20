import React from "react";
import "./Itemcard.scss";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../../assets/images/bg/prod-img.webp";
import { Heart, ShoppingCart } from "lucide-react";

export const Itemcard = ({ image, title, company, price, stock, id, onWishlist, isWishlisted, onAddToCart }) => {
  const router = useNavigate();
  
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    onWishlist?.();
  };
  
  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart?.();
  };
  
  return (
    <div
      onClick={() => {
        router(`/products-details/${id}`);
      }}
      key={id}
      className="PS__ProductCardWrapper"
    >
      <button className="wishlist-btn" onClick={handleWishlistClick}>
        <Heart size={20} fill={isWishlisted ? "#ff6b6b" : "none"} stroke={isWishlisted ? "#ff6b6b" : "#666"} />
      </button>
      <div className="productImg__wrapper">
        <img 
          src={image || placeholderImg} 
          alt="wholesale-retailer.com"
          onError={(e) => { e.target.src = placeholderImg; }}
        />
      </div>
      <div className="PS__productInfoWrapper">
        <p className="company-name">{company}</p>
        <h4 className="product-title">{title}</h4>
        <h3 className="product-price">${price}</h3>
        <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
