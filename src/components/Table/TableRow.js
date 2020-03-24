import React from "react";
import classnames from "classnames";
import {CollectionRenderer} from "./CollectionRenderer";
import {TableConsumer} from "./TableContext";

function getRowItems({columns,row}) {
    return columns && columns.map(({dataIndex})=> {
        const rowItem =row[dataIndex]
        if( rowItem===undefined){
            throw new Error(`undefined dataIndex, can not find dataIndex:${dataIndex} in row ${row}`);
        }
        return {value: rowItem,dataIndex};
    })
}



const RowItem = ({className,children}) =>{
    return (<td className={className}>{children}</td>)
}


export const TableRow = ({ id, data,className, children}) =>{
    return (<tr key={id} className={className}>
            <TableConsumer>
                {({columns}) => (
                    <CollectionRenderer
                        collection={getRowItems({row:data,columns})}
                        itemRender={({value}) =>(<RowItem>{value}</RowItem>)}
                    >
                        {
                            children ?
                                React.Children.map(children,
                                    (child)=>React.cloneElement(child,{...child.props,className:classnames(className,child.props.className)}))
                                : children
                        }
                    </CollectionRenderer>
                )}
            </TableConsumer>
        </tr>
    );
}


TableRow.TableRowItem = RowItem;
