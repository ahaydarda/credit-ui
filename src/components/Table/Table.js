import React, {Component} from "react";
import {TableProvider} from "./TableContext";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {TableRow} from "./TableRow";
import classnames from 'classnames'
import {calculateGridTemplateColumns} from './TableUtil'
import './Table.css';

function getColumnsFromPropOrChildren({columns, children}){
    if(!columns || columns.length === 0){
        const tableHeader =  children && React.Children.toArray(children)[0];
        const columnsFromChildren =  tableHeader && tableHeader.props.children ?
            React.Children.toArray(tableHeader.props.children).map(child =>child.props)
            : null;
        if(!columnsFromChildren){
            throw new Error("Empty or null table column data, can not render table");
        }
        return columnsFromChildren;
    } else {
        return columns;
    }
}

export class Table extends Component {
    static  TableHeader = TableHeader;
    static  TableBody = TableBody;
    static  TableRow = TableRow;

    render() {
        const {className,...rest} = this.props;
        const columns = getColumnsFromPropOrChildren({...rest});
        const gridTemplateColumns = calculateGridTemplateColumns(columns);
        const {children} = rest;
        const indexOfId =  columns && columns.findIndex(item=>  item.isUniqueId === true)
        const uniqueId = indexOfId>0? columns[indexOfId].dataIndex : null;
        return (
            <TableProvider value={ {...rest, uniqueId}}>
                <div className={classnames(className, 'ctable')}>
                    <table style={{gridTemplateColumns: gridTemplateColumns}}>
                        {
                            children ? children :
                                (<React.Fragment>
                                    <TableHeader/>
                                    <TableBody/>
                                </React.Fragment>)
                        }
                    </table>
                </div>
            </TableProvider>
        )
    };
}

