import './CardInfo.scss';

// Components
import { Button } from '../Button/Button';

export const CardInfo = () => {
  return (
    <div className="cardInfo">
      <p className='cardInfo-title'>perfume</p>
      <h1 className='cardInfo-main'>Gabrielle Essence Eau De Parfum</h1>
      <p className='cardInfo-description'>
        A floral, solar and voloptuous interpretation composed by Olivier Polge, Perfumer-Creator
        for the House of CHANEL.
      </p>
      <div className='cardInfo-price'>
        <p>$149.99</p>
        <p>$169.99</p>
      </div>
      <Button />
    </div>
  );
};
