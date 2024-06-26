import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { addItem, increment, decrement } from "../../redux/userSlice";
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";

function AddtoCart({ item }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const inCart = useSelector((state) => state.cart.items);
  // console.log('item', item);
  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addItem(item));
    }
  };

  return (
    <div className="mb-12 flex justify-center mt-4 flex-col space-y-3 lg:flex-row lg:items-center lg:space-x-4 lg:mt-8 lg:space-y-0">
      <div className="flex justify-around bg-gray/10 px-4 py-3 rounded-lg lg:w-[60%] lg:py-5">
        <button
          className="cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          <img src={minus} alt="minus" />
        </button>
        <p className="font-bold">{quantity}</p>
        <button
          className="cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
      <button
        className={`shadow-lg cursor-pointer flex items-center justify-center space-x-2 bg-orange text-black font-bold py-4 rounded-lg
         lg:w-full lg:py-5 
        ${quantity === 0 ? "bg-orange/40" : " "} `}
        onClick={handleAddToCart}
      >
        <IoCartOutline />
        <p>Add to cart!</p>
      </button>
    </div>
  );
}

export default AddtoCart;
