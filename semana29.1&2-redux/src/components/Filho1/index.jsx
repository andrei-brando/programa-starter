import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { add } from '../../store/modules/cart/actions';

export default function Filho1() {
  const [cart, setCart] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function onClickHandle() {
    setCart((oldValue) => oldValue + parseInt(quantity, 10));
    setQuantity(0);

    dispatch(
      add({
        quantity,
      })
    );
  }

  return (
    <>
      <h1>Componente filho 1</h1>
      <h2>Pedido - {cart}</h2>
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="button" onClick={onClickHandle}>
        Adicionar
      </button>
    </>
  );
}
