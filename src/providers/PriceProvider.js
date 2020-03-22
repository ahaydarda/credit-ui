
import React , {useReducer, useEffect}from "react";
import prices, {LOAD_PRICES, UPDATE_PRICE} from "../reducers/prices";
import { getPrices} from '../lib/priceService'

const assetOrder = ["macro","equities","credit"];

const assetComparer = (item) =>{
     const {assetClass} = item;
     return  assetOrder.length - assetOrder.findIndex(asset=> asset.toLowerCase()===assetClass.toLowerCase());
}
const initialState = {
    prices: [],
    compareOrder : [assetComparer,"price","ticker"],
    comparer: ["desc","desc","asc"],
}



const PriceContext = React.createContext({});

const PriceProvider = ({children}) =>{
    const [state, dispatch] = useReducer(prices,initialState);
    useEffect(()=>{
            getPrices().then((prices)=>{
                console.log("prices",prices);

                dispatch({type:LOAD_PRICES,payload:prices})
            });

    },[]);

    // setTimeout(()=>{
    //     const newPrices=  [...state.prices, {
    //         "ticker": "ALPHA",
    //         "price": 3150.67,
    //         "assetClass": "Credit"
    //     }];
    //     dispatch({type:UPDATE_PRICE,payload:newPrices})
    // },5000)
    return (
            <PriceContext.Provider value={[state,dispatch]}>
                {children}
            </PriceContext.Provider>
        )
}



export {PriceContext, PriceProvider};
