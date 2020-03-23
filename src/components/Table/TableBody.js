import React from "react";
import {CollectionRenderer} from "./CollectionRenderer";
import {TableConsumer} from "./TableContext";
import {TableRow} from "./TableRow";

export const TableBody = ({children}) =>{
    return (
        <tbody>
            <TableConsumer>
                {({data}) => (
                    <CollectionRenderer
                        collection={data}
                        itemRender={(item) =>(<TableRow data={item}/>)}
                    >
                        {children}
                    </CollectionRenderer>
                )}
            </TableConsumer>
        </tbody>
    );
}
