import React from 'react';
import './app.scss';

// Components
import { CardWrapper } from './components/CardWrapper/CardWrapper';
import { CardImage } from './components/CardImage/CardImage';
import { CardInfo } from './components/CardInfo/CardInfo';


function App() {
  return (
    <div className="App">
      <CardWrapper>
        <CardImage />
        <CardInfo />
      </CardWrapper>
    </div>
  );
}

export default App;
