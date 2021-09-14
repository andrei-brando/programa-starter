const initialState = {
  total: 0,
};

export default function cart(state = initialState, { type, payload }) {
  switch (type) {
    case 'cart/ADD':
      return {
        total: state.total + parseInt(payload.quantity, 10),
      };
    case 'cart/CLEAR':
      return initialState;
    default:
      return state;
  }
}
