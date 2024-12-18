import React, { useContext, forwardRef } from 'react';
import './MedDisplay.css';
import { StoreContext } from '../../Context/Storecontext';
import MedItem from '../MedItem/MedItem';

const MedDisplay = forwardRef(({ category }, ref) => {
  const { med_list } = useContext(StoreContext);

  return (
    <>
    <div ref={ref} className="med-display" id="med-display">
      <h2>Essential Items for Your Events</h2>
      <div className="med-display-list">
        {med_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <MedItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
    </>
    
  );
});

export default MedDisplay;
