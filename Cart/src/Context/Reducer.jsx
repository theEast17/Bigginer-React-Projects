function Reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payLoad),
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payLoad) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payLoad) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTAL"){
    let {total,amount}=state.cart.reduce((cartTotal,cartItems)=>{
        const {price,amount}=cartItems;
        const itemTotal=price*amount;
        cartTotal.total+=itemTotal
        cartTotal.amount+=amount;
        return cartTotal;
    },
    {        //this is cartTotal value first Time
        total:0,
        amount:0
    })
    total=parseFloat(total.toFixed(2));
    return {...state,total,amount}
  } 

  if(action.type==='LOADING'){
    return {...state,loading:true}
  }
  if(action.type==='DISPLAY_ITEMS'){
    return {...state,cart:action.payLoad,loading:false}
  }


  return state;
}

export default Reducer;
