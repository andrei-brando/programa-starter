import React, { useState } from "react";
import { CardStyle, CardContentStyle } from './style.jsx'

export default function Card(props) {
  const { user } = props;

  const [stack, setStack] = useState('');
  const [stacks, setStacks] = useState(user.stacks);

  function onClick(event) {
    event.preventDefault();
    setStacks(arr => [...arr, stack]);
  }

  return (
    <React.Fragment>
      <CardStyle className='card' style={{ background: user.color }}>
        <CardContentStyle>
          <strong>Nome:</strong> {user.name}
        </CardContentStyle>
        <CardContentStyle>
          <strong>Cargo:</strong> {user.job}
        </CardContentStyle>
        <CardContentStyle>
          <strong>Salário:</strong> {user.salary}
        </CardContentStyle>
        <div>
          <strong>Tecnologias:</strong> <br />
          <ul>
            {
              stacks.map(stack => <li key={stack}>{stack}</li>)
            }
          </ul>
        </div>
        <input type="text" value={stack} onChange={(e) => setStack(e.target.value)} />
        <button onClick={onClick}>add</button>
        {
          /**
           * useState
           * input text
           * button -> add item na stack
           */
        }
        {/* <CardContentStyle>
          <strong>Imagem:</strong> {user.image}
        </CardContentStyle> */}
      </CardStyle>
    </React.Fragment>
  );
}