import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import FormulaOnePage from './pages/FormulaOnePage/FormulaOnePage';

const App: FC = () => {
  useEffect(() => {
    console.log('App reload');
  }, []);
  return (
    <Provider store={store}>
      <FormulaOnePage />
    </Provider>
  );
};

export default App;
