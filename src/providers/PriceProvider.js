
import React , {useState, useEffect}from "react";
import {getPrices} from '../lib/priceService'
import {ORDER, orderData} from '../util'


const initialState = {
    prices: [],
    orderBy : [ {
                    key:"assetClass",
                    order:["macro","equities","credit"]
                },
                {
                    key:"price",
                    order:ORDER.DESC
                },
                {
                    key:"ticket",
                    order:ORDER.ASC
                }]
}



const PriceContext = React.createContext({});

const PriceProvider = ({children}) =>{
    const [state, setState] = useState(initialState);
    const {orderBy} =state;
    useEffect(()=>{
            getPrices().then((prices)=>{
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



export {PriceContext, PriceProvider};
