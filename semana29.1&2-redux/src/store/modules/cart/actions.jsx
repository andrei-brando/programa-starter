/* eslint-disable import/prefer-default-export */
export function add(payload) {
  return {
    type: 'cart/ADD',
    payload,
  };
}

export function clear() {
  return {
    type: 'cart/CLEAR',
  };
}
