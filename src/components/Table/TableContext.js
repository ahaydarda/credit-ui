import React from "react";

const TableContext = React.createContext();

export function TableConsumer(props) {
    return (
        <TableContext.Consumer {...props}>
            {context => {
                if (!context) {
                    throw new Error(
                        `Table.Consumer cannot be rendered outside the Table component`,
                    )
                }
                return props.children(context)
            }}
        </TableContext.Consumer>
    )
}

export function TableProvider({value, children}) {
    return (
        <TableContext.Provider value={value} >
            { children }
        </TableContext.Provider>
    );
}
