
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


const getPrices = () =>{
    return Promise.resolve(prices);
}

export default {getPrices};
