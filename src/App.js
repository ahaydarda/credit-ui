import React from 'react';
import {PriceProvider} from "./providers/PriceProvider";
import {ProductPriceTable} from "./components/ProductPriceTable";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">Product Price UI</div>
      <PriceProvider>
        <ProductPriceTable/>
      </PriceProvider>
    </div>
  );
}

export default App;
