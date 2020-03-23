import React from "react";
import {TableConsumer} from "./TableContext";
import {CollectionRenderer} from "./CollectionRenderer";

const Title = ({title,children}) =>{
    return (<th>{ children? children: title}</th>)
}

export const TableHeader = ({children}) =>{
    return (
        <thead>
            <tr>
                <TableConsumer>
                    {
                        ({columns}) => (
                            <CollectionRenderer
                                collection={columns}
                                itemRender={({title}) =>(<Title>{title}</Title>)}
                            >
                                {children}
                            </CollectionRenderer>)
                    }
                </TableConsumer>
            </tr>
        </thead>
    )
}

TableHeader.TableTitle = Title;
