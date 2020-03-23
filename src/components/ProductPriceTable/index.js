import React, {useContext} from "react";
import {PriceContext} from "../../providers/PriceProvider";
import {Table } from "../Table";
import classnames from 'classnames';
import './index.css';

const { TableBody, TableHeader, TableRow} = Table;
const { TableTitle} = TableHeader;
const { TableRowItem} = TableRow;


const getPriceClass = (price)=>{
    return  classnames({'negative-price':price<0,'positive-price':price>=0})
}

const getRowClass = (assetClass)=>{
    return assetClass? classnames( `${assetClass.toLowerCase()}`) :"";
}
export const ProductPriceTable = ({classNames}) =>{
    const [state] = useContext(PriceContext);
    const {prices} = state;
    return (
             <div className={classnames(classNames,'product-price-table')}>
                 <Table>
                     <TableHeader>
                         <TableTitle
                             title='Asset Class'
                             dataIndex= 'assetClass'
                             key = 'assetClass'
                             width={200}
                             unit ={4}
                         />
                         <TableTitle
                             title='Price'
                             dataIndex= 'price'
                             key = 'price'
                             width={150}
                             unit ={3}
                         />
                         <TableTitle
                             title='Ticker'
                             dataIndex= 'ticker'
                             key = 'ticker'
                             width={50}
                             unit ={3}
                         />
                     </TableHeader>
                     <TableBody>
                         {
                             prices && prices.map(({assetClass, price, ticker}) =>(
                                 <TableRow className={getRowClass(assetClass)}>
                                     <TableRowItem>{assetClass}</TableRowItem>
                                     <TableRowItem >
                                         <span className={getPriceClass(price)}>{price}</span>
                                     </TableRowItem>
                                     <TableRowItem>{ticker}</TableRowItem>
                                 </TableRow>
                             ))
                         }
                     </TableBody>
                 </Table>
             </div>
           )
}
