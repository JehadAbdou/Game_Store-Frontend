import Games from "./data";

const reducer = (state, action) => {
  if (action.type === "ADD_GAME") {
    const newCart = new Map(Games);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    console.log(item);
  }
};

export default reducer;
