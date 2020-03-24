import React, {useContext} from "react";
import {render, waitForElement, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {PriceProvider, PriceContext, PriceConsumer} from "./PriceProvider";

const mockPriceApi = {
    getPrices: ()=> {
        return Promise.resolve( [
            {
                "ticker": "BETA",
                "price": -350.67,
                "assetClass": "Credit"
            },
            {
                "ticker": "ALPHA",
                "price": -350.67,
                "assetClass": "Credit"
            },
            {
                "ticker": "BETA",
                "price": 3791.37,
                "assetClass": "Equities"
            },
            {
                "ticker": "ALPHA",
                "price": 1232.67,
                "assetClass": "Macro"
            },
            {
                "ticker": "BETA",
                "price": 3125.67,
                "assetClass": "Macro"
            },
        ])
    }
}

test('it provides prices tree', async () => {
    let providedPrices = [];
    let getByText;
    act( ()=>  {
         const rendered  =render(
             <PriceProvider api={mockPriceApi}>
                 <PriceConsumer>
                     {
                         ([state])=>{
                             const {prices} = state;
                             providedPrices = prices;
                             return (<div>Total Item:{prices.length}</div>)
                         }
                     }
                 </PriceConsumer>
             </PriceProvider>);
         getByText = rendered.getByText;
    } );

    const element = await waitForElement    (() => getByText("Total Item:5"));
    expect(providedPrices.length).toBe(5);
});

test('it provides prices ordered by default  “Asset Class”: Macro first, then Equities ' +
    'and Credit last by “Price” in descending order by “Ticker” in alphabetical order', async () => {
    let providedPrices = [];
    let getByText;
    act( ()=>  {
        const rendered  =render(
            <PriceProvider api={mockPriceApi}>
                <PriceConsumer>
                    {
                        ([state])=>{
                            const {prices} = state;
                            providedPrices = prices;
                            return (<div>Total Item:{prices.length}</div>)
                        }
                    }
                </PriceConsumer>
            </PriceProvider>);
        getByText = rendered.getByText;
    } );

    const element = await waitForElement    (() => getByText("Total Item:5"));
    const expectedProvidedPrices = [
        {
            "ticker": "BETA",
            "price": 3125.67,
            "assetClass": "Macro"
        },
        {
            "ticker": "ALPHA",
            "price": 1232.67,
            "assetClass": "Macro"
        },
        {
            "ticker": "BETA",
            "price": 3791.37,
            "assetClass": "Equities"
        },
        {
            "ticker": "ALPHA",
            "price": -350.67,
            "assetClass": "Credit"
        },
        {
            "ticker": "BETA",
            "price": -350.67,
            "assetClass": "Credit"
        }
    ]
    expect(providedPrices).toStrictEqual(expectedProvidedPrices);
});
