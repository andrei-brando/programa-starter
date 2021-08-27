import { FaDesktop } from 'react-icons/fa';
import { IconCardStyle } from './styles';

export default function IconCard(props) {
  return (
    <IconCardStyle>
      <FaDesktop color="blue" />
      <h3>{props.text}</h3>
      <h4>{props.subText}</h4>
    </IconCardStyle>
  );
}
