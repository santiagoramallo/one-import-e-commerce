import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Button } from "@chakra-ui/react";

const CartWidget = () => {
    const [cart, setCart] = useContext(CartContext);



    return (
    <>
   <div className="cart">
        <Button size="lg" variant="outline" colorScheme="orange">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;