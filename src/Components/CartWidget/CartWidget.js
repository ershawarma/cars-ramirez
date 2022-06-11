import shopCar from '../../Img/CartWidget.svg'

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