import React, {Children} from "react";
import './Table.css';
import classnames from 'classnames'
const TableContext = React.createContext();


function TableConsumer(props) {
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

function TableCollectionPresenter({collection, itemRender, children}) {
    const ui = typeof children === 'function' ? children(collection) : children;
    console.log("presenter",ui);
    if(ui ===undefined && !collection ) {
        return null;
    }
    return ui ? ui : (collection && collection.map(itemRender));
}

function getGridTemplate (columns ) {
    const calculateMinMax = ({width,unit}) =>{
        const fr = unit? unit: (10/columns.length).toFixed(2);
        return `minmax(${width}px,${fr}fr)`;
    }
    if(columns &&columns.length>0){
        return columns && columns.map(calculateMinMax).join(" ")
    }
}


export const Table = ({children, className,...rest})=>{
    let {columns} = rest;
    if(!columns || columns.length === 0){
        const tableHeader =  children && React.Children.toArray(children)[0];
        columns =  tableHeader && tableHeader.props.children ? React.Children.toArray(tableHeader.props.children).map(child =>child.props) : null;
        if(!columns){
            throw new Error("Empty or null table column data, can not render table");
        }
    }

    const gridTemplateStyle = getGridTemplate(columns);
    return (
     <TableContext.Provider value={rest} >
         <div className={classnames(className,'ctable')} >
             <table  style={{gridTemplateColumns:gridTemplateStyle}}>
                 {
                     children? children :
                         (<React.Fragment>
                             <TableHeader/>
                             <TableBody />
                         </React.Fragment>)
                 }
             </table>
         </div>
      </TableContext.Provider>
    )
};

const TableHeader = ({children}) =>{
    return (
        <thead>
            <tr>
                <TableConsumer>
                    {
                        ({columns}) => (
                            <TableCollectionPresenter
                                collection={columns}
                                itemRender={({title}) =>(<Title>{title}</Title>)}
                            >
                                {children}
                            </TableCollectionPresenter>)
                    }
                </TableConsumer>
            </tr>
        </thead>
    )
}

const Title = ({title,children}) =>{
    return (<th>{ children? children: title}</th>)
}



const TableBody = ({children}) =>{
    return (
        <tbody>
            <TableConsumer>
                {({data}) => (
                    <TableCollectionPresenter
                        collection={data}
                        itemRender={(item) =>(<TableRow data={item}/>)}
                    >
                        {children}
                    </TableCollectionPresenter>
                )}
            </TableConsumer>
        </tbody>
    );
}

function getRowItems({columns,row}) {
     return columns && columns.map(({dataIndex})=> {
         const rowItem =row[dataIndex]
        if( rowItem===undefined){
            throw new Error(`undefined dataIndex, can not find dataIndex:${dataIndex} in row ${row}`);
        }
        return {value: rowItem,dataIndex};
    })
}

const TableRow = ({data,className, children}) =>{
    return (<tr className={className}>
                <TableConsumer>
                    {({columns}) => (
                        <TableCollectionPresenter
                            collection={getRowItems({row:data,columns})}
                            itemRender={({value}) =>(<RowItem>{value}</RowItem>)}
                        >
                            {
                                children ?
                                    React.Children.map(children,
                                        (child)=>React.cloneElement(child,{...child.props,className:classnames(className,child.props.className)}))
                                    : children
                            }
                        </TableCollectionPresenter>
                    )}
                </TableConsumer>
            </tr>
    );
}


const RowItem = ({className,children}) =>{
    return (<td className={className}>{children}</td>)
}


Table.TableBody = TableBody;
Table.TableHeader = TableHeader;
Table.TableHeader.TableTitle = Title;
Table.TableBody.TableRow = TableRow;
Table.TableBody.TableRow.RowItem = RowItem;
export default Table;
