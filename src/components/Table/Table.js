import React from "react";
import './Table.css';
import _ from 'lodash'

function getGridTemplate (columns) {
    return columns && columns.map(({width,unit})=>{
        const fr = unit? unit: (10/columns.length).toFixed(2);
        return `minmax(${width}px,${fr}fr)`;
    }).join(" ")
}

export const TableRow= ({columns,data}) =>{
    const dataIndexes = columns && columns.map(column=>column.dataIndex);
    return (
        <tbody>
        { data && data.map(row=>(
            <tr>
                { dataIndexes  && dataIndexes.map(dataIndex =>(<td>{row[dataIndex]}</td>))}
            </tr>
        ))}
        </tbody>
    );
}


export const TableBody = ({columns,data}) =>{
    const dataIndexes = columns && columns.map(column=>column.dataIndex);
    return (
        <tbody>
            { data && data.map(row=>(
                <tr>
                    { dataIndexes  && dataIndexes.map(dataIndex =>(<td>{row[dataIndex]}</td>))}
                </tr>
            ))}
        </tbody>
    );
}

export const TableHeader = ({columns}) =>{
    return (
        <thead>
            <tr>
                { columns && columns.map(({title}) =>(<th>{title}</th>))}
            </tr>
        </thead>
    )
}
export const Table = ({columns, data, compareOrder, comparer})=>{
     const sortedData =  comparer? _.orderBy(data, compareOrder, comparer) : data;
     const gridTemplateStyle = getGridTemplate(columns);
     return (
         <table style={{gridTemplateColumns:gridTemplateStyle}}>
            <TableHeader columns={columns}/>
            <TableBody  columns={columns} data={sortedData} />
        </table>
     )
};

export default Table;
