export function increase(payload) {
  return {
    type: 'counter/INCREASE',
    payload,
  };
}

export function decrease(payload) {
  return {
    type: 'counter/DECREASE',
    payload,
  };
}
