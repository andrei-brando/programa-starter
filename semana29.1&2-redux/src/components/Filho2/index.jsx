import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../store/modules/cart/actions';

export default function Filho2() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function onClickHandle() {
    dispatch(clear());
  }

  return (
    <>
      <h1>Componente Filho 2</h1>
      <h2>Carrinho</h2>
      <p>Total de itens: {cart.total}</p>
      <button type="button" onClick={onClickHandle}>
        Limpar
      </button>
    </>
  );
}
