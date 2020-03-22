import React, {useContext} from "react";
import {PriceContext} from "../../providers/PriceProvider";
import {Table} from "../Table";
import { columns} from "./config";

export const ProductPriceTable = () =>{
    console.log("here");
    const [state,dispatch] = useContext(PriceContext);
    const {prices, compareOrder, comparer} = state;
    return ( <Table columns={columns} data={prices}  compareOrder={compareOrder} comparer={comparer}/>)
}
