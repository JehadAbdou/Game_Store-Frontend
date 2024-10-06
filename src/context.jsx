import {
  useContext,
  createContext,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";
import Games from "./data";

const AppContext = createContext();
const initialState = {
  loading: false,
  cart: [],
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState([]);

  const AddGame = (id) => {
    const game = Games.find((game) => game.id === id);
    if (game && !cart.find((item) => item.id === game.id)) {
      setCart([...cart, game]);
    } else {
      console.log("Game not found or already in the cart");
    }
  };

  const removeGame = (id) => {
    const newCart = cart.filter((game) => game.id !== id);
    setCart(newCart);
  };

  return (
    <AppContext.Provider
      value={{ ...state, AddGame, cart, setCart, removeGame }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
