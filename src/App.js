import React from 'react';
import {PriceProvider} from "./providers/PriceProvider";
import {ProductPriceTable} from "./components/ProductPriceTable";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>JP Morgan Credit UI</header>
      <PriceProvider>
        <ProductPriceTable/>
      </PriceProvider>
    </div>
  );
}

export default App;
