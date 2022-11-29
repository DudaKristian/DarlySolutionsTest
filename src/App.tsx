import React from 'react';
import { Home } from './pages/Home/Home';
import { Modal } from './pages/Modal/Modal';


const App:React.FC = () => {
  return (
    <div>
      <Home />
      <Modal/>
    </div>
  );
}

export default App;
