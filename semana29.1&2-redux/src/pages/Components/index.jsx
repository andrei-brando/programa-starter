/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useDebugValue,
} from 'react';

function useUserStatus() {
  const [isLogged, setIslogged] = useState(true);

  if (1 === 2) {
    setIslogged(true);
  }

  // TODO: implementar lógica
  useDebugValue(isLogged ? 'Logged' : 'Not logged');

  return isLogged;
}

export default function Components() {
  const [valor, setValor] = useState(1);
  const [dobro, setDobro] = useState(1);
  const [nome, setNome] = useState('oi');

  const isLogged = useUserStatus();
  console.log(isLogged);

  console.log('RENDER');

  function onClickCounter() {
    setValor(valor + 1);
  }

  // só executa quando alguem valor do array mudar
  useEffect(() => {
    console.log('RENDER EFFECT');
    // setDobro(dobro * 2);
    setDobro((dobroVelho) => dobroVelho * 2);
  }, [nome, valor]);

  // só executa uma vez, quando o componente for renderizado
  useEffect(() => {
    console.log('RENDER EFFECT VARIAÇÃO 1');
  }, []);

  // executa toda vez que o componente for renderizado
  useEffect(() => {
    console.log('RENDER EFFECT VARIAÇÃO 2');
  });

  const input = useRef(null);
  const div = useRef(null);

  const contador = useRef(0);

  function onUseRef() {
    console.log(input.current.value);
    console.log(div.current);
    contador.current += 1;
  }

  const incrementar = useCallback(() => {
    setValor((oldValue) => oldValue + 1);
    console.log('RENDER USE CALLBACK');
  }, [valor]);

  const contadorDobro = useMemo(() => {
    setDobro(valor * 2);
    console.log('RENDER USE MEMO');
  }, [valor]);

  return (
    <>
      <h1>Hooks</h1>
      <div>
        <h2>useState</h2>
        {valor} - {dobro}
        <button type="button" onClick={onClickCounter}>
          +1
        </button>
        {/* <button type="button" onClick={() => setValor(valor + 1)}>+1</button> */}
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <h2>useEffect</h2>
      </div>
      <div ref={div}>
        <h2>useRef</h2>
        <input type="text" ref={input} />
        <button type="button" onClick={onUseRef}>
          faz algo useRef
        </button>{' '}
        <br />
        {contador.current}
      </div>
      <div>
        <h2>useCallback</h2>
        <button type="button" onClick={incrementar}>
          +1
        </button>
      </div>
      <div>
        <h2>useMemo</h2>
        {contadorDobro}
      </div>
    </>
  );
}
