import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = () => {
  return (
   
   <>
   <div className="position-relative">
     
      <ShoppingCartIcon />
      <span className="cart-count">3</span>
      
    </div>
   </>

  );
};

export default CardWidget;
