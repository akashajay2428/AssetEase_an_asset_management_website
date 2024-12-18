import React, { useContext, useState } from 'react'
import './MedItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const MedItem = ({ id, name, price, description, image, }) => {
  // const [itemCount, setItemCount] = useState(0);

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);



  return (
    <div className="med-item">
      <div className="med-item-img-container">
      <img className="med-item-image" src={`${url}/images/${image}`} alt="" />

        {
          !cartItems[id] ? (
            <img className='add'
              onClick={() =>addToCart(id)}
              src={assets.add_icon_white}
              alt="Add Icon"
            />
          ) : (
            <div className="med-item-counter">
                <img 
                  onClick={() => removeFromCart(id)} 
                  src={assets.remove_icon_red} 
                  alt="Remove Icon" 
                />
                <p>{cartItems[id]}</p>
                <img 
                  onClick={() => addToCart(id)} 
                  src={assets.add_icon_green} 
                  alt="Add Icon" 
                />
              </div>
          )
        }
      </div>
      <div className="med-item-info">
        <div className="med-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="med-item-desc">{description}</p>
        <p className="med-item-price">Rs {price}</p>
      </div>
    </div>
  );
};

export default MedItem;
