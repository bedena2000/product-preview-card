import './CardWrapper.scss';

type CardWrapperProps = {
    children: React.ReactNode;
};

export const CardWrapper = (props: CardWrapperProps) => {
  return <div className="cardWrapper">{props.children}</div>;
};
