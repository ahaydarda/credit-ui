import React from 'react';
import {PriceProvider, PriceConsumer} from "./providers/PriceProvider";
import {ProductPriceTable,} from "./components/ProductPriceTable";
import PriceApi from "./lib/PriceApi";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">Product Price UI</div>
      <PriceProvider api={PriceApi}>
          <PriceConsumer>
              {
                  ([state])=><ProductPriceTable prices={state.prices}/>
              }
          </PriceConsumer>

      </PriceProvider>
    </div>
  );
}

export default App;
