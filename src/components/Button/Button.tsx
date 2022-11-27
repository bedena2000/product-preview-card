import './Button.scss';
import buttonIcon from '../../assets/images/icon-cart.svg';

export const Button = () => {
  return (
    <div className='buttonIcon'>
      <img alt="btnIcon" src={buttonIcon} />
      <p>Add to Cart</p>
    </div>
  );
};
