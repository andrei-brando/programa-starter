const initialState = 0;

export default function counter(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'counter/INCREASE':
      return parseInt(state) + parseInt(payload);
    case 'counter/DECREASE':
      return parseInt(state) - parseInt(payload);
    default:
      return initialState;
  }
}
