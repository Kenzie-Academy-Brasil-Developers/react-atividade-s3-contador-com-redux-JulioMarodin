import { useSelector } from 'react-redux';
import './styles.css';

const Display = () => {
  const number = useSelector((state) => state.number);

  return (
    <div className="div__display">
      <h1>{number}</h1>
    </div>
  );
};

export default Display;
