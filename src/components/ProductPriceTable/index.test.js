
import React from "react";
import renderer from 'react-test-renderer';
import {ProductPriceTable} from "./index";
import {render, waitForElement, act} from '@testing-library/react'

const prices = [
    {
        "ticker": "ALPHA",
        "price": 3150.67,
        "assetClass": "Macro"
    },
    {
        "ticker": "BETA",
        "price": -350.67,
        "assetClass": "Credit"
    },
    {
        "ticker": "BETA",
        "price": 3791.37,
        "assetClass": "Equities"
    }
    ];
it('renders correctly', () => {
    const productPriceTable = renderer.create( <ProductPriceTable prices={prices} />)
        .toJSON();
    expect(productPriceTable).toMatchSnapshot();
});

it('shows negative prices with negative class', () => {
    const {container}= render( <ProductPriceTable prices={prices} />)
    const items = container.getElementsByClassName("negative-price")
    expect(items[0].textContent).toBe("-350.67");
});


it('shows positive prices with negative class', () => {
    const {container, getByText}= render( <ProductPriceTable prices={prices} />)
    const items = container.getElementsByClassName("positive-price");
    expect(items[0].textContent).toBe("3150.67");
    expect(items[1].textContent).toBe("3791.37");
});

