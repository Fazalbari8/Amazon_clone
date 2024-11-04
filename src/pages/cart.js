
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem ,removeFromCart} from '../Redux/Cartslice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems, "cartItems");
  const dispatch = useDispatch();



  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {cartItems ? (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (

                <li key={item.id} className="flex items-center justify-between py-4">
                  {console.log(item.imageUrl, 'item.imageUrl);')}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price} each</p>
                  </div>
                  <div>
                    <Image src={item.imageUrl[0]} width={50} height={50}></Image>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.lenght))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span> {/* {JSON.stringify(item.id)} */}
                    <button                   
                      onClick={() => dispatch(increaseQuantity(item.lenght))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold">${item.price * item.quantity}</p>
                  {console.log(item.price, 'item.price')}
                  {console.log(item.quantity, 'item.quantity')}
                  <button
                    // onClick={() => {
                    //   dispatch(removeFromCart(item.id))
                    // }}
                    className="text-red-500 font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-right mt-4">
              <p className="text-lg font-semibold">Total: ${getTotalPrice()}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
