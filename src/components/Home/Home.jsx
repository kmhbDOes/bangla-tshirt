import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === ts._id);
    if (exists) {
      toast("You have already added this tee shirt");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
