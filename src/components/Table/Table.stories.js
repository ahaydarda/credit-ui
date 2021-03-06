import React from 'react';
import { action } from '@storybook/addon-actions';
import { Table } from './Table';

const {TableBody, TableHeader, TableRow} = Table;
const { TableTitle} = TableHeader;
const { TableRowItem} = TableRow;

export default {
  title: 'Table',
  component: Table,
};

const prices = [
    {
        "ticker": "ALPHA",
        "price": 3150.67,
        "assetClass": "Macro"
    },
    {
        "ticker": "BETA",
        "price": 3750.67,
        "assetClass": "Macro"
    },
    {
        "ticker": "BETA",
        "price": 3791.37,
        "assetClass": "Equities"
    },
]

 const columns = [
    {
        title: 'Asset Class',
        dataIndex: 'assetClass',
        key: 'assetClass',
        width: 200,
        unit: 4

    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        width: 50,
        unit:3
    },
    {
        title: 'Ticker',
        dataIndex: 'ticker',
        key: 'ticker',
        width: 150,
        unit: 3
    }
];


export const withDirectData = () => <Table columns={columns} data={prices}/>;

export const  renderPropsTable = () =>(
    <Table columns={columns} data={prices}>
        <TableHeader>
            {(columns)=> columns && columns.map(column=>( <TableTitle {...column}/>)) }
        </TableHeader>
        <TableBody>
            {(rows)=> rows && rows.map(row=><TableRow data={row}/>) }
        </TableBody>
    </Table>
)


export const  renderPropsTableWithCustomTitle = () =>(
    <Table columns={columns} data={prices}>
        <TableHeader>
            {(columns)=> columns && columns.map(column=>( <TableTitle {...columns}>{
                <span style={{textDecoration: "underline"}}>{column.title}</span>}</TableTitle>)) }
        </TableHeader>
        <TableBody>
            {(rows)=> rows && rows.map(row=><TableRow data={row}/>) }
        </TableBody>
    </Table>
)


export const customChildrenTableWithCustomRow = () => {
    return (
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
                    prices.map(item =>(
                        <TableRow>
                            <TableRowItem>{item["assetClass"]}</TableRowItem>
                            <TableRowItem><span style={{color:"red"}}>{item["price"]}</span></TableRowItem>
                            <TableRowItem>{item["ticker"]}</TableRowItem>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
};


