import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/articles-1.png';
import img2 from '../../assets/images/articles-2.png';
import img3 from '../../assets/images/articles-3.png';
import './detail.scss';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    localStorage.setItem('detailId', id ?? 1)
  }, [id])

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (value) => {
    if (quantity + value >= 1) {
      setQuantity(quantity + value);
    }
  };

  return (
    <div className="product-page">
      <div className="product-images">
        <img src={img1} alt="Tray Table" />
        <div className="thumbnail-images">
          <img src={img1} alt="Thumbnail 1" />
          <img src={img2} alt="Thumbnail 2" />
          <img src={img3} alt="Thumbnail 3" />
        </div>
      </div>
      <div className="product-details">
        <h1>Tray Table</h1>
        <p className="price">
          <span className="discounted-price">$199.00</span>
          <span className="original-price">$400.00</span>
        </p>
        <div className="offer-timer">
          <span>02 Days</span>
          <span>12 Hours</span>
          <span>45 Minutes</span>
          <span>05 Seconds</span>
        </div>
        <div className="measurements">
          <p>Measurements</p>
          <span>17 1/2×20 5/8 "</span>
        </div>
        <div className="color-selection">
          <label htmlFor="color">Choose Color</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(e) => handleColorChange(e.target.value)}
          >
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
          </select>
        </div>
        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
