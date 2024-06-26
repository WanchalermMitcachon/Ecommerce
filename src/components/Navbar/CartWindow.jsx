import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../../redux/userSlice";

function CartWindow({ isCartOpen, cartWindowRef }) {
  const dispatch = useDispatch();
  const itemInCart = useSelector((state) => state.cart.items);

  return (
    <div
      className={`${
        isCartOpen ? " translate-y-[0] " : "translate-y-[-200%]"
      } transition-all transform duration-500 z-50 bg-white min-h-[200px] rounded-lg w-full absolute top-24 left-0 px-6 
      lg:w-[40%] lg:left-[63%] lg:shadow-lg
      `}
      ref={cartWindowRef}
    >
      <p className="font-bold py-4">Cart</p>
      <hr className="text-gray" />
      {itemInCart.length === 0 ? (
        <div className="flex justify-center items-center my-12">
          <p className="font-bold leading-[26px] text-gray">Your cart is empty.</p>
        </div>
      ) : (
        itemInCart.map((item, idx) => {
          // Find the first image in the images array of the item
          const firstImg = item.images[0].main;
          console.log("dasd", item);
          return (
            <div key={idx + 1} className="flex items-center my-4">
              <img
                src={firstImg}
                className="w-14 h-14 mr-4 rounded-lg "
                alt={item.name}
              />
              <div className="">
                <p className="leading-[26px]">{item.name}</p>
                <p>
                  {" "}
                  ${(item.price * item.discount.percent) / 100} x{" "}
                  {item.quantity}{" "}
                  <span className="font-bold">
                    $
                    {(
                      ((item.price * item.discount.percent) / 100) *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <button
                className="ml-16 "
                onClick={() => dispatch(removeItem(item.cartItemId))}
              >
                <MdDelete />
              </button>
            </div>
          );
        })
      )}
      {itemInCart.length !== 0 && (
        <button className="mb-8 cursor-pointer bg-orange text-black font-bold py-4 rounded-lg w-full">
          <p>Checkout</p>
        </button>
      )}
    </div>
  );
}

export default CartWindow;
