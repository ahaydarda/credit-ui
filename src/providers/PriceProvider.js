
import React , {useState, useEffect}from "react";
import {getPrices} from '../lib/PriceApi'
import {ORDER, orderData} from '../util'

const initialState = {
    prices: [],
    orderBy: { assetClass:["macro","equities","credit"],
              price: ORDER.DESC,
              ticker: ORDER.ASC
              }
}


const PriceContext = React.createContext({});

const PriceProvider = ({api, children}) =>{
    const [state, setState] = useState(initialState);
    const {orderBy} =state;
    useEffect(()=>{
             api && api.getPrices().then((prices)=>{
                console.log("loading prices..",prices);
                setState({...state,prices:orderData({data:prices,orderBy})})
            });

    },[]);

    return (
            <PriceContext.Provider value={[state,setState]}>
                {children}
            </PriceContext.Provider>
        )
}

const  PriceConsumer = (props) =>(
        <PriceContext.Consumer {...props}>
            {context => {
                if (!context) {
                    throw new Error(
                        `PriceContext cannot be rendered outside the PriceProvider component`,
                    )
                }
                return props.children(context)
            }}
        </PriceContext.Consumer>
)


export {PriceContext, PriceProvider, PriceConsumer};
