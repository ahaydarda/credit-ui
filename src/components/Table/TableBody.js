import React from "react";
import {CollectionRenderer} from "./CollectionRenderer";
import {TableConsumer} from "./TableContext";
import {TableRow} from "./TableRow";

export const TableBody = ({children}) =>{
    return (
        <tbody>
            <TableConsumer>
                {({data, uniqueId}) => (
                    <CollectionRenderer
                        collection={data}
                        itemRender={(item) =>(<TableRow key={uniqueId} data={item}/>)}
                    >
                        {children}
                    </CollectionRenderer>
                )}
            </TableConsumer>
        </tbody>
    );
}
