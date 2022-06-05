import React from 'react';
import shopCar from '/CartWidget.png'

function CartWidget() {
    return (
    <div>
      {/* icon de carrito de compra */}
    <img 
      src={shopCar} 
      alt={'shoopingCar'}
    />
    </div> 
    );
  }
  
  export default CartWidget