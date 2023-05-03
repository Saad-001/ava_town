import { createContext } from "react";

const cartCountContext = createContext({
  cartCount: 0,
  setCartCount: () => {},
});

export default cartCountContext;
