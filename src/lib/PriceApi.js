
const prices = [
    {
        "ticker": "ALPHA",
        "price": 3150.67,
        "assetClass": "Macro"
    },
    {
        "ticker": "BETA",
        "price": -350.67,
        "assetClass": "Macro"
    },
    {
        "ticker": "BETA",
        "price": 3791.37,
        "assetClass": "Equities"
    },
    {
        "ticker": "ALPHA",
        "price": 372.37,
        "assetClass": "Equities"
    },
    {
        "ticker": "BETA",
        "price": 34.37,
        "assetClass": "Credit"
    },
    {
        "ticker": "BETA",
        "price": 55.37,
        "assetClass": "Equities"
    },
    {
        "ticker": "ALPHA",
        "price": 55.37,
        "assetClass": "Equities"
    },
    {
        "ticker": "ALPHA",
        "price": -55.37,
        "assetClass": "Equities"
    }
]

const addRandomUniqueIds = (prices)=>{
    return prices.map( (item)=> !item.id? {id: ID(), ...item}: item);
}

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const getPrices = () =>{
    return Promise.resolve(addRandomUniqueIds(prices));
}

export default {getPrices};
